"use client";
import { useState } from 'react';
import Image from 'next/image';
import NavBar from './Navbar';


import TargetAudience from '../shared/TargetAudience';
import Chatbox, { ChatboxProps } from '../shared/Chatbox';

type HeroSectionProps = ChatboxProps;



const HeroSection = ({ chatMessage, setChatMessage, handleKeyPress, handleChatSubmit, showAttachDropdown, setShowAttachDropdown }: HeroSectionProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
  return (
    <div className="min-h-screen relative w-full pt-[43px] pb-[73px] px-5 flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden z-index-0">
          <Image alt="background image" className="w-full h-full object-cover" src="/images/background.png" width={100} height={100} />
          <div className="absolute bg-[rgba(255,255,255,0.92)] inset-0" />  
        </div>

        {/* Nav Bar */}
        <NavBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          
        />

      {/* Main Section  */}
      <div className="relative w-full flex-1">
        {/* Hero Content */}
        <HeroContent />
        <div className='w-full max-w-[794px] mx-auto flex flex-col gap-[18px] mt-[169px]'>
          {/* Target Audience */}
          <TargetAudience />
          {/* Chatbox */}
          <Chatbox chatMessage={chatMessage} setChatMessage={setChatMessage} handleKeyPress={handleKeyPress} handleChatSubmit={handleChatSubmit} showAttachDropdown={showAttachDropdown} setShowAttachDropdown={setShowAttachDropdown} />
        </div>
      </div>
    </div>
  )
}

const topics = [
 "Science",
 "Technology",
 "Engineering",
 "Mathematics",
]

const HeroContent = () => {
  return (  
    <div className="flex flex-col gap-5 mt-[98px] w-full max-w-[796px] mx-auto">
      <div className="flex flex-col gap-[3px] w-full">
        <div className="flex gap-[10px] items-center justify-center py-[2px] px-[6px]">
          {topics.map((topic) => (
            <>
              <p className="font-medium text-[16px] leading-[16px] tracking-0 text-blue-1 text-center">{topic}</p>
              <Image alt="" className="hidden last-of-type:hidden sm:block shrink-0 w-[4px] h-[4px]" src="/images/dot.svg" width={100} height={100} />
            </>
          ))}
        </div>
        <p className="font-medium text-[28px] leading-[100%] lg:text-[48px] tracking-0 text-black-2 text-center">
          Turn Complex STEM Topics Into Stories People Remember
        </p>
      </div>
      <p className="font-normal text-[16px] leading-[32px] text-black-2 text-center w-full">
        This AI chatbot analyzes your target audience, your STEM topic, and how humans learn best—then crafts tailored explanations, analogies, and narratives that make science stick.
      </p>
    </div>
  )
}

export default HeroSection
