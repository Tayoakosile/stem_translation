"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "./Navbar";
import TargetAudience from "../shared/TargetAudience";
import Chatbox, { ChatboxProps } from "../shared/Chatbox";

type HeroSectionProps = ChatboxProps;

const HeroSection = ({
  chatMessage,
  setChatMessage,
  handleKeyPress,
  handleChatSubmit,
  showAttachDropdown,
  setShowAttachDropdown,
}: HeroSectionProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative w-full pt-10.75 pb-18.25 px-5 flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden z-index-0">
        <Image
          alt="background image"
          className="w-full h-full object-cover"
          src="/images/background.png"
          width={100}
          height={100}
        />
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
        <div className="w-full max-w-198.5 mx-auto flex flex-col gap-4.5 mt-42.25">
          {/* Target Audience */}
          <TargetAudience />
          {/* Chatbox */}
          <Chatbox
            chatMessage={chatMessage}
            setChatMessage={setChatMessage}
            handleKeyPress={handleKeyPress}
            handleChatSubmit={handleChatSubmit}
            showAttachDropdown={showAttachDropdown}
            setShowAttachDropdown={setShowAttachDropdown}
          />
        </div>
      </div>
    </div>
  );
};

const topics = ["Science", "Technology", "Engineering", "Mathematics"];

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-5 mt-24.5 w-full max-w-199 mx-auto">
      <div className="flex flex-col gap-0.75 w-full">
        <div className="flex gap-2.5 items-center justify-center py-0.5 px-1.5">
          {topics.map((topic) => (
            <React.Fragment key={topic}>
              <p className="font-medium text-[16px] leading-4 tracking-0 text-blue-1 text-center">
                {topic}
              </p>
              <Image
                alt=""
                className="hidden last-of-type:hidden sm:block shrink-0 w-1 h-1"
                src="/images/dot.svg"
                width={100}
                height={100}
              />
            </React.Fragment>
          ))}
        </div>
        <p className="font-medium text-[28px] leading-[100%] lg:text-[48px] tracking-0 text-black-2 text-center">
          Turn Complex STEM Topics Into Stories People Remember
        </p>
      </div>
      <p className="font-normal text-[16px] leading-8 text-black-2 text-center w-full">
        This AI chatbot analyzes your target audience, your STEM topic, and how
        humans learn best—then crafts tailored explanations, analogies, and
        narratives that make science stick.
      </p>
    </div>
  );
};

export default HeroSection;
