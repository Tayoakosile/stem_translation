'use client';
import HeroSection from '@/components/Landing/HeroSection';
import FeaturesSection from '@/components/Landing/FeaturesSection';
import PersonalizedSupportSection from '@/components/Landing/PersonalizedSupportSection';
import Faqs from '@/components/Landing/Faqs';
import GetStartedSection from '@/components/Landing/GetStartedSection';
import Footer from '@/components/Landing/Footer';
import CopyrightBar from '@/components/Landing/CopyrightBar';
import ExpandedChat from '@/components/Chat/ExpandedChat';
import { useStemChat } from '@/hooks/useStemChat';

const StemLandingPage = () => {
  const { ui, session, handleChatSubmit, handleKeyPress } = useStemChat();
  return (
    <div className="bg-white relative w-full min-h-screen overflow-hidden max-w-[1600px] mx-auto flex flex-col">
        <HeroSection
          chatMessage={ui.chatMessage}
          setChatMessage={ui.setChatMessage}
          handleKeyPress={handleKeyPress}
          handleChatSubmit={handleChatSubmit}
          showAttachDropdown={ui.showAttachDropdown}
          setShowAttachDropdown={ui.setShowAttachDropdown}
        />
        <FeaturesSection />
        <PersonalizedSupportSection />
        <Faqs />
        <GetStartedSection />
        <Footer />
        <CopyrightBar />

        {/* Chat Side Panel */}
        <ExpandedChat
          open={ui.chatOpen}
          onClose={() => ui.setChatOpen(false)}
          messages={session.chatState.messages}
          chatMessage={ui.chatMessage}
          setChatMessage={ui.setChatMessage}
          handleKeyPress={handleKeyPress}
          handleChatSubmit={handleChatSubmit}
          showAttachDropdown={ui.showAttachDropdown}
          setShowAttachDropdown={ui.setShowAttachDropdown}
          isLoading={session.chatState.isLoading}
        />
    </div>
  );
}

export default StemLandingPage;