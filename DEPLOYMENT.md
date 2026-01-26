# Deployment Guide for GCP Cloud Run

This guide explains how to deploy the STEM Translation application to Google Cloud Platform (GCP) using Cloud Run.

## Prerequisites

1. **GCP Account**: A Google Cloud Platform account with billing enabled
2. **GCP Project**: A GCP project created
3. **gcloud CLI**: Google Cloud SDK installed and configured
4. **Docker**: Docker installed locally (for local testing)
5. **GitHub Repository**: Your code pushed to GitHub

## Setup Instructions

### 1. Enable Required GCP APIs

```bash
gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  containerregistry.googleapis.com
```

### 2. Set Up Service Account for CI/CD

Create a service account with necessary permissions:

```bash
# Set your project ID
export PROJECT_ID=your-project-id
gcloud config set project $PROJECT_ID

# Create service account
gcloud iam service-accounts create github-actions \
  --display-name="GitHub Actions Service Account"

# Grant necessary roles
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/storage.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:github-actions@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"

# Create and download key
gcloud iam service-accounts keys create key.json \
  --iam-account=github-actions@$PROJECT_ID.iam.gserviceaccount.com
```

### 3. Configure GitHub Secrets

Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- `GCP_PROJECT_ID`: Your GCP project ID
- `GCP_SA_KEY`: The contents of the `key.json` file created above

### 4. Deployment Options

#### Option A: Using GitHub Actions (Recommended)

The repository includes two workflow files:

1. **`.github/workflows/deploy.yml`**: Direct deployment using GitHub Actions
   - Builds Docker image
   - Pushes to Google Container Registry
   - Deploys to Cloud Run

2. **`.github/workflows/cloud-build.yml`**: Triggers GCP Cloud Build
   - Uses `cloudbuild.yaml` configuration
   - Leverages GCP Cloud Build service

Both workflows trigger on pushes to `main` or `master` branch.

#### Option B: Manual Deployment using Cloud Build

```bash
# Submit build to Cloud Build
gcloud builds submit --config cloudbuild.yaml
```

#### Option C: Manual Deployment using Docker

```bash
# Build the image
docker build -t gcr.io/$PROJECT_ID/stem-translation:latest .

# Push to Container Registry
docker push gcr.io/$PROJECT_ID/stem-translation:latest

# Deploy to Cloud Run
gcloud run deploy stem-translation \
  --image gcr.io/$PROJECT_ID/stem-translation:latest \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1
```

## Configuration

### Environment Variables

Set environment variables in Cloud Run:

```bash
gcloud run services update stem-translation \
  --region us-central1 \
  --set-env-vars NEXT_PUBLIC_ENV=production
```

### Custom Domain (Optional)

To use a custom domain:

```bash
gcloud run domain-mappings create \
  --service stem-translation \
  --domain your-domain.com \
  --region us-central1
```

## Monitoring

- **Cloud Run Console**: View logs and metrics in GCP Console
- **Cloud Logging**: `gcloud logging read "resource.type=cloud_run_revision"`
- **Cloud Monitoring**: Set up alerts in Cloud Monitoring

## Troubleshooting

### Build Failures

1. Check Cloud Build logs in GCP Console
2. Verify all dependencies are in `package.json`
3. Ensure Node.js version matches (20.x)

### Deployment Failures

1. Check Cloud Run service logs
2. Verify service account permissions
3. Ensure port 8080 is exposed in Dockerfile

### Performance Issues

- Adjust memory and CPU in `cloudbuild.yaml`
- Enable Cloud CDN for static assets
- Consider increasing `max-instances` for high traffic

## Cost Optimization

- Set `min-instances: 0` to scale to zero when not in use
- Adjust `max-instances` based on expected traffic
- Use Cloud CDN for static content caching
- Monitor usage in GCP Console

## Security

- Use IAM roles with least privilege
- Enable Cloud Armor for DDoS protection
- Use Secret Manager for sensitive environment variables
- Enable VPC connector for private networking if needed

## Support

For issues or questions:
- Check GCP documentation: https://cloud.google.com/run/docs
- Review Cloud Build logs
- Check GitHub Actions workflow runs
