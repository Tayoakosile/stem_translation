'use client';

import { useState } from 'react';

// Image paths from Figma assets
const imgLogo = "/images/logo.png";
const imgBackground = "/images/background.png";
const imgFeatureIcon1 = "/images/feature-icon-1.svg";
const imgFeatureIcon2 = "/images/feature-icon-2.svg";
const imgFeatureIcon3 = "/images/feature-icon-3.svg";
const imgJessica = "/images/jessica.png";
const imgChatbotPreview = "/images/chatbot-preview.png";
// const imgArrowDown = "/images/arrow-down.svg";
const imgAddIcon = "/images/add-icon.svg";
const imgArrowRight = "/images/arrow-right.svg";
const imgArrowDownElements = "/images/arrow-down-elements.svg";
const imgPeopleIcon = "/images/people-icon.svg";
const imgAttachmentIcon = "/images/attachment-icon.svg";
const imgSendIcon = "/images/send-icon.svg";
const imgDot = "/images/dot.svg";
const imgUserIcon = "/images/user-icon.svg";
const imgBooksIcon = "/images/books-icon.svg";
const imgNerdIcon = "/images/nerd-icon.svg";
const imgBoardIcon = "/images/board-icon.svg";
const imgMinusIcon = "/images/minus-icon.svg";
const imgFacebook = "/images/facebook.svg";
const imgLinkedin = "/images/linkedin.svg";
const imgInstagram = "/images/instagram.svg";
const imgTiktok = "/images/tiktok.svg";
const imgYoutube = "/images/youtube.svg";

// Mobile Menu Icon
function MenuIcon({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col gap-1.5 p-2 lg:hidden">
      <span className="w-6 h-0.5 bg-[#252525]"></span>
      <span className="w-6 h-0.5 bg-[#252525]"></span>
      <span className="w-6 h-0.5 bg-[#252525]"></span>
    </button>
  );
}

// Close Icon
function CloseIcon({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="p-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
}

// Arrow Down Component
function ArrowDown01Sharp({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
        <div className="absolute inset-[-18.75%_-9.38%_-13.57%_-9.38%]">
          <img alt="" className="block max-w-none w-full h-full" src={imgArrowDownElements} />
        </div>
      </div>
    </div>
  );
}

// CTA Button Component
function Cta({ className, text }: { className?: string; text: string }) {
  return (
    <div className={className} style={{ backgroundImage: "linear-gradient(146.302deg, rgb(250, 140, 84) 28.557%, rgb(251, 49, 187) 116.9%)" }}>
      <p className="font-bold leading-normal not-italic relative shrink-0 text-[14px] sm:text-[16px] text-center text-white">
        {text}
      </p>
    </div>
  );
}

// Nav Bar Component
function NavBar({ className, mobileMenuOpen, setMobileMenuOpen }: { className?: string; mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void }) {
  return (
    <>
      <div className={className}>
        <div className="h-[28px] sm:h-[35.606px] relative shrink-0 w-[84px] sm:w-[105px]">
          <img alt="STEM Translation Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={imgLogo} />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-[46px] items-center font-medium leading-normal not-italic relative shrink-0 text-[#252525] text-[16px] text-center">
          <a href="#features" className="relative shrink-0 hover:text-[#197be7] transition-colors cursor-pointer">Features</a>
          <a href="#faqs" className="relative shrink-0 hover:text-[#197be7] transition-colors cursor-pointer">FAQs</a>
          <a href="#support" className="relative shrink-0 hover:text-[#197be7] transition-colors cursor-pointer">Support</a>
        </div>
        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex gap-[12px] items-center relative shrink-0">
          <div className="flex items-center justify-center px-[16px] py-[10px] relative rounded-[10px] shrink-0 hover:bg-gray-50 transition-colors cursor-pointer">
            <p className="font-bold leading-normal not-italic relative shrink-0 text-[#252525] text-[16px] text-center">Login</p>
          </div>
          <Cta className="flex items-center justify-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" text="Sign up for free" />
        </div>
        {/* Mobile Menu Button */}
        <MenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="h-[28px] relative shrink-0 w-[84px]">
              <img alt="STEM Translation Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={imgLogo} />
            </div>
            <CloseIcon onClick={() => setMobileMenuOpen(false)} />
          </div>
          <div className="flex flex-col gap-6 p-6">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="font-medium text-[18px] text-[#252525] hover:text-[#197be7] transition-colors">Features</a>
            <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="font-medium text-[18px] text-[#252525] hover:text-[#197be7] transition-colors">FAQs</a>
            <a href="#support" onClick={() => setMobileMenuOpen(false)} className="font-medium text-[18px] text-[#252525] hover:text-[#197be7] transition-colors">Support</a>
          </div>
          <div className="mt-auto p-6 flex flex-col gap-3">
            <div className="flex items-center justify-center px-[16px] py-[12px] rounded-[10px] border border-gray-200 cursor-pointer">
              <p className="font-bold text-[#252525] text-[16px]">Login</p>
            </div>
            <Cta className="flex items-center justify-center px-[20px] py-[12px] rounded-[10px] cursor-pointer" text="Sign up for free" />
          </div>
        </div>
      </div>
    </>
  );
}

// Chat CTA Component
function ChatCta({ className }: { className?: string }) {
  return (
    <div className={className} style={{ backgroundImage: "linear-gradient(116.264deg, rgb(250, 140, 84) 28.557%, rgb(251, 49, 187) 116.9%)" }}>
      <div className="overflow-clip relative shrink-0 w-[20px] h-[20px]">
        <img alt="" className="block max-w-none w-full h-full" src={imgSendIcon} />
      </div>
    </div>
  );
}

// Short Response Component
function ShortResponse({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#252525] text-[14px]">Short Response</p>
      <ArrowDown01Sharp className="overflow-clip relative shrink-0 w-[16px] h-[16px]" />
    </div>
  );
}

// Attachment Square Component
function AttachmentSquare({ className }: { className?: string }) {
  return (
    <div className={className}>
      <img alt="" className="block max-w-none w-full h-full" src={imgAttachmentIcon} />
    </div>
  );
}

export default function StemLandingPage() {
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([]);
  const [showAttachDropdown, setShowAttachDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How is this different than other chatbots like ChatGPT?",
      answer: "This chatbot was custom-built specifically for science communication, not general conversation. While generic AI tools can explain STEM topics, they aren't designed to think about who the explanation is for or how people learn best. This chatbot uses learning-science research, narrative structure, targeted vocabulary, and audience-aware reasoning to deliver explanations that feel intuitive, relatable, and accurate. Instead of simply providing information, it helps people truly understand it."
    },
    {
      question: "Why is a chatbot that focuses on science communication important?",
      answer: "Scientific information can be complex—and often poorly communicated. A chatbot that understands science and understands how humans learn bridges that gap. By tailoring explanations to a specific audience and using proven communication strategies, it makes STEM concepts accessible, memorable, and meaningful. Clear science communication builds trust, improves education, enhances workforce readiness, and empowers people to use STEM knowledge in real life."
    },
    {
      question: "Who is this chatbot for?",
      answer: "Anyone who needs help explaining or understanding a STEM topic.\n— Scientists and researchers\n— Educators and students\n— STEM professionals presenting to non-technical audiences\n— Workforce trainers and career-development organizations\n— Communicators, content creators, and public-engagement leaders\n— Parents, lifelong learners, and the simply curious"
    },
    {
      question: "What STEM topics can it explain?",
      answer: "Almost anything. The chatbot is trained to handle a wide range of STEM fields—biology, chemistry, physics, engineering, data science, AI, environmental science, health sciences, and more. If it's grounded in science, it can help translate it."
    },
    {
      question: "Does this tool replace educators or science communicators?",
      answer: "Not at all. This tool is a support system, not a substitute. It helps you translate complex content efficiently, freeing you to focus on teaching, engaging, and connecting with your audience. Think of it as your personal science-communication assistant. If you want to translate complexity into understanding, this tool is for you."
    }
  ];

  return (
    <div className="bg-white relative w-full min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-start w-full">
        {/* Hero Section */}
        <div className="min-h-[700px] sm:min-h-[850px] md:min-h-[950px] lg:h-[979px] overflow-visible relative shrink-0 w-full pb-8 sm:pb-0">
          {/* Background Image */}
          <div className="absolute h-full sm:h-[1054.795px] left-0 top-0 w-full sm:w-[1582px] overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover w-full h-full" src={imgBackground} />
              <div className="absolute bg-[rgba(255,255,255,0.92)] inset-0" />
            </div>
          </div>

          {/* Chatbox */}
          <div className="absolute bg-white flex flex-col gap-6 sm:gap-[64px] items-start left-1/2 p-3 sm:p-[16px] rounded-[8px] shadow-[0px_0px_16px_7px_rgba(236,236,236,0.2)] bottom-4 sm:bottom-auto sm:top-[734px] lg:top-[734px] translate-x-[-50%] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] md:w-[600px] lg:w-[794px] max-w-[794px]">
            <div className="flex items-center relative shrink-0 w-full gap-2">
              <p className="flex-[1_0_0] font-medium italic leading-[24px] sm:leading-[32px] min-h-px min-w-px not-italic relative text-[#999] text-[14px] sm:text-[16px]">
                What would you like to learn about today?
              </p>
              <ChatCta className="flex items-center justify-center px-[12px] py-[8px] relative rounded-[10px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" />
            </div>
            <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="h-[1px] relative shrink-0 w-full bg-[#e7e7e7]" />
              <div className="min-h-[32px] relative shrink-0 w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
                <ShortResponse className="bg-[#f8f8f8] flex gap-[4px] h-[32px] items-center px-[12px] py-[6px] rounded-[8px] w-auto sm:w-[143px] cursor-pointer hover:bg-gray-100 transition-colors" />
                <div className="flex items-center justify-end relative">
                  <div
                    className="bg-[#f8f8f8] flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => setShowAttachDropdown(!showAttachDropdown)}
                  >
                    <AttachmentSquare className="overflow-clip relative shrink-0 w-[20px] h-[20px]" />
                    <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#252525] text-[14px]">Attach File</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Attach File Dropdown - now inside chatbox for better positioning */}
            <div
              className={`absolute bg-white flex flex-col gap-[8px] items-start px-[16px] py-[12px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(183,183,183,0.25)] w-[140px] z-50 origin-top transition-all duration-200 ease-out right-3 sm:right-4 bottom-0 ${
                showAttachDropdown
                  ? 'opacity-100 scale-y-100 translate-y-[calc(100%+8px)]'
                  : 'opacity-0 scale-y-0 translate-y-0 pointer-events-none'
              }`}
            >
              <p className="font-medium leading-normal min-w-full not-italic text-[#333] text-[16px] cursor-pointer hover:text-[#197be7] transition-colors py-[4px]">
                PDF
              </p>
              <div className="h-[1px] relative shrink-0 w-full bg-[#e5e5e5]" />
              <p className="font-medium leading-normal min-w-full not-italic text-[#333] text-[16px] cursor-pointer hover:text-[#197be7] transition-colors py-[4px]">
                Image
              </p>
            </div>
          </div>

          {/* Nav Bar */}
          <NavBar
            className="absolute border border-[#e7e7e7] border-solid flex items-center justify-between left-1/2 px-4 sm:px-[20px] py-[12px] rounded-[16px] top-4 sm:top-[43px] translate-x-[-50%] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[1112px] max-w-[1112px] bg-white/80 backdrop-blur-sm z-40"
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Hero Content */}
          <div className="absolute flex flex-col gap-4 sm:gap-[20px] items-center left-1/2 top-[100px] sm:top-[150px] lg:top-[207px] translate-x-[-50%] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[796px] max-w-[796px] px-4 sm:px-0">
            <div className="flex flex-col gap-[3px] items-center relative shrink-0 w-full">
              <div className="flex flex-wrap gap-2 sm:gap-[10px] items-center justify-center px-[6px] py-[2px] relative rounded-[8px] shrink-0">
                <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#197be7] text-[12px] sm:text-[14px] md:text-[16px] text-center">Science</p>
                <img alt="" className="hidden sm:block shrink-0 w-[4px] h-[4px]" src={imgDot} />
                <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#197be7] text-[12px] sm:text-[14px] md:text-[16px] text-center">Technology</p>
                <img alt="" className="hidden sm:block shrink-0 w-[4px] h-[4px]" src={imgDot} />
                <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#197be7] text-[12px] sm:text-[14px] md:text-[16px] text-center">Engineering</p>
                <img alt="" className="hidden sm:block shrink-0 w-[4px] h-[4px]" src={imgDot} />
                <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#197be7] text-[12px] sm:text-[14px] md:text-[16px] text-center">Mathematics</p>
              </div>
              <p className="font-medium leading-tight sm:leading-normal min-w-full not-italic relative shrink-0 text-[#333] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] text-center">
                Turn Complex STEM Topics Into Stories People Remember
              </p>
            </div>
            <p className="font-normal leading-[24px] sm:leading-[32px] not-italic relative shrink-0 text-[#333] text-[14px] sm:text-[16px] text-center w-full">
              This AI chatbot analyzes your target audience, your STEM topic, and how humans learn best—then crafts tailored explanations, analogies, and narratives that make science stick.
            </p>
          </div>

          {/* Target Audience */}
          <div className="absolute flex flex-col gap-4 sm:gap-[28px] items-center left-1/2 top-[420px] sm:top-[520px] md:top-[580px] lg:top-[613px] translate-x-[-50%] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-[900px] max-w-[900px]">
            <p className="font-medium leading-normal not-italic relative shrink-0 text-[#333] text-[16px] sm:text-[18px] md:text-[20px] text-center w-full">
              Who is your Target Audience?
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-[16px] items-center relative shrink-0 justify-center">
              <div className="border border-[#e7e7e7] border-solid flex gap-2 sm:gap-[8px] items-center px-3 sm:px-[16px] py-2 sm:py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:border-[#197be7] hover:bg-blue-50/30 transition-all">
                <div className="overflow-clip relative shrink-0 w-5 h-5 sm:w-[24px] sm:h-[24px]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgUserIcon} />
                </div>
                <p className="font-medium leading-[20px] not-italic relative shrink-0 text-[#252525] text-[14px] sm:text-[16px]">Myself</p>
              </div>
              <div className="border border-[#e7e7e7] border-solid flex gap-2 sm:gap-[8px] items-center px-3 sm:px-[16px] py-2 sm:py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:border-[#197be7] hover:bg-blue-50/30 transition-all">
                <div className="overflow-clip relative shrink-0 w-5 h-5 sm:w-[24px] sm:h-[24px]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgBooksIcon} />
                </div>
                <p className="font-medium leading-[20px] not-italic relative shrink-0 text-[#252525] text-[14px] sm:text-[16px]">Researcher</p>
              </div>
              <div className="border border-[#e7e7e7] border-solid flex gap-2 sm:gap-[8px] items-center px-3 sm:px-[16px] py-2 sm:py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:border-[#197be7] hover:bg-blue-50/30 transition-all">
                <div className="overflow-clip relative shrink-0 w-5 h-5 sm:w-[24px] sm:h-[24px]">
                  <img alt="" className="block rotate-180 max-w-none w-full h-full" src={imgNerdIcon} />
                </div>
                <p className="font-medium leading-[20px] not-italic relative shrink-0 text-[#252525] text-[14px] sm:text-[16px]">Adult Learner</p>
              </div>
              <div className="border border-[#e7e7e7] border-solid flex gap-2 sm:gap-[8px] items-center px-3 sm:px-[16px] py-2 sm:py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:border-[#197be7] hover:bg-blue-50/30 transition-all">
                <div className="overflow-clip relative shrink-0 w-5 h-5 sm:w-[24px] sm:h-[24px]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgBoardIcon} />
                </div>
                <p className="font-medium leading-[20px] not-italic relative shrink-0 text-[#252525] text-[14px] sm:text-[16px]">Teacher</p>
              </div>
              <div className="border border-[#e7e7e7] border-solid flex gap-2 sm:gap-[8px] items-center px-3 sm:px-[16px] py-2 sm:py-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:border-[#197be7] hover:bg-blue-50/30 transition-all">
                <div className="relative shrink-0 w-5 h-5 sm:w-[24px] sm:h-[24px]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgPeopleIcon} />
                </div>
                <p className="font-medium leading-[20px] not-italic relative shrink-0 text-[#252525] text-[14px] sm:text-[16px]">Students</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="bg-[#fbfcfd] flex flex-col gap-8 sm:gap-12 lg:gap-[47px] items-center overflow-clip px-4 sm:px-8 md:px-12 lg:px-[100px] py-16 sm:py-24 md:py-32 lg:py-[200px] relative shrink-0 w-full">
          <div className="flex flex-col gap-[2px] items-center justify-center relative shrink-0 max-w-[900px]">
            <div className="flex items-center justify-center px-[6px] py-[2px] relative rounded-[8px] shrink-0">
              <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#197be7] text-[14px] sm:text-[16px] text-center">Features</p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-[24px] items-center justify-center not-italic relative shrink-0 text-[#333] text-center">
              <p className="font-medium leading-tight sm:leading-normal relative shrink-0 text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px]">Features that Make Every Chat Smarter</p>
              <p className="font-normal leading-[24px] sm:leading-[32px] min-w-full relative shrink-0 text-[14px] sm:text-[16px] max-w-[900px] px-2">
                Sometimes you need more than a great explanation—you need a partner who can help you deliver it with clarity and impact. Jessica Burgess, The STEM Translator™, offers expert coaching, workshops and one-one guidance rooted in learning science and years of professional experience. Schedule a free 30-minute consultation to get started
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-[24px] items-stretch relative shrink-0 w-full max-w-[1240px]">
            {/* Card 1 */}
            <div className="bg-white flex-1 min-h-[380px] overflow-clip relative rounded-[20px] shadow-[0px_4px_20px_5px_rgba(236,236,236,0.09)]">
              <div className="flex flex-col gap-[8px] items-start px-4 not-italic pt-[200px] sm:pt-[209px] pb-4">
                <p className="font-medium leading-normal relative shrink-0 text-[18px] sm:text-[20px] text-black w-full">Audience Aware Reasoning</p>
                <p className="font-normal leading-[22px] sm:leading-[24px] relative shrink-0 text-[#333] text-[14px] sm:text-[16px] w-full">
                  The chatbot begins every interaction by analyzing who the explanation is for—age, background, prior knowledge, and needs—then shapes tone, vocabulary, structure, and examples specifically for that audience
                </p>
              </div>
              <div className="absolute h-[180px] sm:h-[191px] left-0 overflow-clip top-0 w-full rounded-t-[20px]" style={{ backgroundImage: "linear-gradient(130.734deg, rgb(29, 130, 226) 0%, rgb(25, 123, 231) 30.533%, rgb(36, 142, 217) 69.262%, rgb(60, 186, 186) 100%)" }}>
                <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <div className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-xl flex items-center justify-center">
                    <img alt="" className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] object-contain" src={imgFeatureIcon1} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white flex-1 min-h-[380px] overflow-clip relative rounded-[20px] shadow-[0px_4px_20px_5px_rgba(236,236,236,0.09)]">
              <div className="flex flex-col gap-[8px] items-start px-4 not-italic pt-[200px] sm:pt-[209px] pb-4">
                <p className="font-medium leading-normal relative shrink-0 text-[18px] sm:text-[20px] text-black w-full">Learning Science–Driven Explanations</p>
                <p className="font-normal leading-[22px] sm:leading-[24px] relative shrink-0 text-[#333] text-[14px] sm:text-[16px] w-full">
                  Built on research about how the brain processes information, it delivers explanations with intentional sequencing, cognitive chunking, scaffolding, and narrative flow so concepts feel intuitive and stick.
                </p>
              </div>
              <div className="absolute h-[180px] sm:h-[191px] left-0 overflow-clip rounded-t-[20px] top-0 w-full" style={{ backgroundImage: "linear-gradient(130.073deg, rgb(250, 140, 84) 28.557%, rgb(251, 49, 187) 116.9%)" }}>
                <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <div className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-xl flex items-center justify-center">
                    <img alt="" className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] object-contain" src={imgFeatureIcon2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white flex-1 min-h-[380px] overflow-clip relative rounded-[20px] shadow-[0px_4px_20px_5px_rgba(236,236,236,0.09)]">
              <div className="flex flex-col gap-[8px] items-start px-4 not-italic pt-[200px] sm:pt-[209px] pb-4">
                <p className="font-medium leading-normal relative shrink-0 text-[18px] sm:text-[20px] text-black w-full">Custom Analogy Generation Engine</p>
                <p className="font-normal leading-[22px] sm:leading-[24px] relative shrink-0 text-[#333] text-[14px] sm:text-[16px] w-full">
                  Instead of generic examples, it creates meaningful analogies tailored to the user&apos;s audience using context, relevance, and real-world experiences—making complex STEM ideas instantly relatable.
                </p>
              </div>
              <div className="absolute h-[180px] sm:h-[191px] left-0 overflow-clip rounded-t-[20px] top-0 w-full" style={{ backgroundImage: "linear-gradient(130.073deg, rgb(93, 88, 232) 28.557%, rgb(235, 34, 218) 116.9%)" }}>
                <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <div className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-xl flex items-center justify-center">
                    <img alt="" className="w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] object-contain" src={imgFeatureIcon3} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Cta className="flex items-center justify-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" text="Start Conversation" />
        </div>

        {/* Personalized Support Section */}
        <div className="bg-white flex flex-col lg:flex-row gap-8 lg:gap-[47px] items-center overflow-clip px-4 sm:px-8 md:px-12 lg:px-[100px] py-16 sm:py-24 md:py-32 lg:py-[200px] relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-[2px] items-start lg:items-start min-h-px min-w-px relative order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start px-[6px] py-[2px] relative rounded-[8px] shrink-0 w-full lg:w-auto">
              <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#197be7] text-[14px] sm:text-[16px]">STEM Translation</p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-[24px] items-center lg:items-start relative shrink-0 w-full">
              <p className="font-medium leading-tight sm:leading-normal min-w-full not-italic relative shrink-0 text-[#333] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px]">Need More Personalized Support?</p>
              <p className="font-normal leading-[24px] sm:leading-[32px] min-w-full not-italic relative shrink-0 text-[#333] text-[14px] sm:text-[16px]">
                Sometimes you need more than a great explanation—you need a partner who can help you deliver it with clarity and impact. Jessica Burgess, The STEM Translator™, offers expert coaching, workshops and one-one guidance rooted in learning science and years of professional experience. Schedule a free 30-minute consultation to get started.
              </p>
              <Cta className="flex items-center justify-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" text="Start Conversation" />
            </div>
          </div>
          <div className="bg-[#f9fcff] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[599px] overflow-clip relative rounded-[20px] lg:rounded-[23.709px] shrink-0 w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[598px] lg:w-[598px] order-1 lg:order-2">
            <img alt="Jessica Burgess - The STEM Translator" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={imgJessica} />
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faqs" className="bg-white flex flex-col lg:flex-row gap-8 lg:gap-[47px] items-start justify-center overflow-clip px-4 sm:px-8 md:px-12 lg:px-[100px] py-16 sm:py-24 md:py-32 lg:py-[200px] relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-6 lg:gap-[47px] items-start min-h-px min-w-px relative w-full lg:w-auto">
            <div className="flex flex-col gap-[2px] items-start relative shrink-0 w-full">
              <div className="flex items-center justify-center px-[6px] py-[2px] relative rounded-[8px] shrink-0">
                <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#197be7] text-[14px] sm:text-[16px] text-center">FAQ</p>
              </div>
              <div className="flex flex-col items-start relative shrink-0 w-full">
                <div className="font-medium leading-tight sm:leading-normal not-italic relative shrink-0 text-[#333] text-[36px] sm:text-[44px] md:text-[50px] lg:text-[56px] w-full lg:w-[484px]">
                  <p className="mb-0">Frequently</p>
                  <p>Asked Questions</p>
                </div>
              </div>
            </div>
            <div className="border border-[rgba(51,51,51,0.2)] border-solid flex gap-[2px] items-center justify-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <p className="font-bold leading-normal not-italic relative shrink-0 text-[#333] text-[14px] sm:text-[16px] text-center">Contact Us</p>
              <div className="flex items-center justify-center relative shrink-0 w-[16px] h-[16px] rotate-[-90deg]">
                <img alt="" className="block rotate-[90deg] max-w-none w-full h-full" src={imgArrowRight} />
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="flex flex-col gap-2 sm:gap-[8px] items-start justify-center relative shrink-0 w-full lg:w-[645px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#fbfcfd] flex flex-col gap-[10px] items-start justify-center p-4 sm:p-[24px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex gap-[10px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] font-medium leading-normal min-h-px min-w-px not-italic relative text-[#333] text-[16px] sm:text-[18px] md:text-[20px]">
                    {faq.question}
                  </p>
                  <div className="overflow-clip relative shrink-0 w-5 h-5 sm:w-[24px] sm:h-[24px]">
                    <img alt="" className="block max-w-none w-full h-full" src={openFaqIndices.includes(index) ? imgMinusIcon : imgAddIcon} />
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${openFaqIndices.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="font-normal leading-[24px] sm:leading-[32px] not-italic text-[#333] text-[14px] sm:text-[16px] w-full whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-white flex flex-col lg:flex-row gap-8 lg:gap-[47px] items-center overflow-clip px-4 sm:px-8 md:px-12 lg:px-[100px] py-16 sm:py-24 md:py-32 lg:py-[200px] relative shrink-0 w-full">
          <div className="flex flex-1 flex-col gap-6 lg:gap-[47px] items-center lg:items-start min-h-px min-w-px relative text-center lg:text-left order-2 lg:order-1">
            <div className="flex flex-col gap-[2px] items-center lg:items-start relative shrink-0 w-full">
              <div className="flex items-center justify-center px-[6px] py-[2px] relative rounded-[8px] shrink-0">
                <p className="font-medium leading-[16px] not-italic relative shrink-0 text-[#197be7] text-[14px] sm:text-[16px]">Get Started</p>
              </div>
              <div className="flex flex-col gap-4 sm:gap-[24px] items-center lg:items-start not-italic relative shrink-0 text-[#333] w-full">
                <p className="font-medium leading-tight sm:leading-normal min-w-full relative shrink-0 text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px]">Try the Chatbot- Let&apos;s Make STEM Make Sense</p>
                <p className="font-normal leading-[24px] sm:leading-[32px] relative shrink-0 text-[14px] sm:text-[16px] w-full lg:w-[524px]">
                  Your audience deserves explanations that make sense the first time. Use the chatbot now and elevate every STEM conversation you have.
                </p>
              </div>
            </div>
            <Cta className="flex items-center justify-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" text="Start Conversation" />
          </div>
          <div className="bg-[#f9fcff] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[448px] overflow-clip relative rounded-[20px] lg:rounded-[23.709px] shrink-0 w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[473px] lg:w-[473px] order-1 lg:order-2">
            <img alt="STEM Translation Chatbot Preview" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={imgChatbotPreview} />
          </div>
        </div>

        {/* Footer Section */}
        <div id="support" className="bg-white min-h-[600px] sm:min-h-[650px] lg:h-[711px] overflow-clip relative shrink-0 w-full">
          {/* Background */}
          <div className="absolute h-full sm:h-[1054.795px] left-0 top-0 sm:top-[-319.66px] w-full sm:w-[1582px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <img alt="" className="absolute max-w-none object-cover w-full h-full" src={imgBackground} />
              <div className="absolute bg-[rgba(255,255,255,0.92)] inset-0" />
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="absolute bottom-0 font-medium min-h-[56px] leading-normal left-0 not-italic text-[12px] sm:text-[14px] lg:text-[16px] text-white w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-8 lg:px-[80px] py-3 sm:py-0 gap-2 sm:gap-0" style={{ backgroundImage: "linear-gradient(174.624deg, rgb(56, 178, 192) 10.008%, rgb(29, 130, 226) 11.794%, rgb(25, 123, 231) 30.533%, rgb(36, 142, 217) 69.262%, rgb(60, 186, 186) 116.28%)" }}>
            <p className="text-center sm:text-left">Copyright 2025 - STEM Translation Co.</p>
            <p className="text-center sm:text-right">Terms of Service | Privacy Policy</p>
          </div>

          {/* Footer Links */}
          <div className="absolute flex flex-col sm:flex-row items-center sm:items-start justify-between left-4 sm:left-8 lg:left-[100px] right-4 sm:right-8 lg:right-auto bottom-[80px] sm:bottom-auto sm:top-[515.34px] lg:w-[1240px] gap-6 sm:gap-0">
            <div className="flex flex-col gap-[12px] items-center sm:items-start relative shrink-0">
              <div className="h-[30px] sm:h-[35.606px] relative shrink-0 w-[90px] sm:w-[105px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={imgLogo} />
              </div>
              <div className="flex gap-3 sm:gap-[16px] items-center relative shrink-0">
                <img alt="Facebook" className="h-[28px] sm:h-[33px] shrink-0 w-[28px] sm:w-[32px] cursor-pointer hover:opacity-80 transition-opacity" src={imgFacebook} />
                <img alt="LinkedIn" className="h-[28px] sm:h-[33px] shrink-0 w-[28px] sm:w-[32px] cursor-pointer hover:opacity-80 transition-opacity" src={imgLinkedin} />
                <img alt="Instagram" className="h-[28px] sm:h-[33px] shrink-0 w-[28px] sm:w-[32px] cursor-pointer hover:opacity-80 transition-opacity" src={imgInstagram} />
                <img alt="TikTok" className="h-[28px] sm:h-[32px] shrink-0 w-[28px] sm:w-[32px] cursor-pointer hover:opacity-80 transition-opacity" src={imgTiktok} />
                <img alt="YouTube" className="h-[28px] sm:h-[32px] shrink-0 w-[28px] sm:w-[32px] cursor-pointer hover:opacity-80 transition-opacity" src={imgYoutube} />
              </div>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end font-medium gap-4 sm:gap-6 lg:gap-[46px] items-center leading-normal not-italic relative shrink-0 text-[#252525] text-[14px] sm:text-[16px] text-center">
              <a href="#features" className="relative shrink-0 hover:text-[#197be7] transition-colors cursor-pointer">Features</a>
              <a href="#pricing" className="relative shrink-0 hover:text-[#197be7] transition-colors cursor-pointer">Pricing Plan</a>
              <a href="#faqs" className="relative shrink-0 hover:text-[#197be7] transition-colors cursor-pointer">FAQs</a>
              <a href="#support" className="relative shrink-0 hover:text-[#197be7] transition-colors cursor-pointer">Support</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="relative sm:absolute flex flex-col gap-4 sm:gap-[18px] items-center sm:items-start justify-center px-4 sm:px-0 sm:left-8 lg:left-[100px] pt-8 sm:pt-0 sm:top-[159.22px] w-full sm:w-auto lg:w-[966px]">
            <div className="font-medium leading-tight sm:leading-[0] min-h-px min-w-px not-italic relative text-[#333] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] w-full text-center sm:text-left">
              <p className="mb-0 sm:leading-[68px]">Don&apos;t miss any Updates.</p>
              <p className="sm:leading-[68px]">Subscribe our Newsletters.</p>
            </div>
            <div className="flex flex-col gap-[16px] items-center sm:items-start relative shrink-0 w-full sm:w-[335px]">
              <div className="flex flex-col items-start relative shrink-0 w-full max-w-[335px]">
                <div className="border border-[#e7e7e7] border-solid h-[48px] overflow-clip relative rounded-[8px] shrink-0 w-full bg-white">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="absolute flex flex-col italic justify-center leading-[24px] left-[15px] overflow-hidden text-[#333] text-[14px] top-1/2 tracking-[-0.3px] translate-y-[-50%] w-[calc(100%-30px)] outline-none bg-transparent"
                  />
                </div>
              </div>
              <Cta className="flex items-center justify-center px-[20px] py-[10px] relative rounded-[10px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" text="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
