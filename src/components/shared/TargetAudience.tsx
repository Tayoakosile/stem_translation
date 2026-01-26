"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const targetAudienceData = [
  {
    title: "Myself",
    icon: "/images/user-icon.svg",
  },
  {
    title: "Researcher",
    icon: "/images/books-icon.svg",
    options: ["In the field", "Not in the field"],
  },
  {
    title: "Adult Learner",
    icon: "/images/nerd.svg",
  },
  {
    title: "Teacher",
    icon: "/images/board-icon.svg",
  },
  {
    title: "Students",
    icon: "/images/people-icon.svg",
    options: [
      "Elementary",
      "Middle School",
      "High School",
      "College/University",
    ],
  },
];

const TargetAudience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<Record<string, string | null>>(
    () => {
      const init: Record<string, string | null> = {};
      targetAudienceData.forEach((t) => (init[t.title] = null));
      return init;
    },
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    if (openIndex !== null) {
      document.addEventListener("mousedown", handleOutside);
      return () => document.removeEventListener("mousedown", handleOutside);
    }
  }, [openIndex]);

  function toggleDropdown(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  function handleSelect(title: string, option: string) {
    setSelected((s) => ({ ...s, [title]: option }));
    setOpenIndex(null);
  }

  return (
    <div className="flex flex-col gap-7" ref={containerRef}>
      <p className="font-medium text-[20px] leading-[100%] tracking-0 text-black-2 text-center w-full">
        Who is your Target Audience?
      </p>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {targetAudienceData.map((item, index) => (
          <div key={item.title} className="relative">
            <button
              aria-haspopup={!!item.options}
              aria-expanded={openIndex === index}
              onClick={() => (item.options ? toggleDropdown(index) : undefined)}
              className="py-3 px-4 flex gap-2 items-center justify-center rounded-lg border border-white-1 cursor-pointer hover:border-blue-1 hover:bg-blue-50/30 transition-all"
            >
              <Image
                alt={`${item.title} icon`}
                className="w-6 h-6 object-contain"
                src={item.icon}
                width={24}
                height={24}
              />
              <p className="font-medium text-[16px] leading-5 tracking-0 text-black-1">
                {item.title}
              </p>
            </button>

            {item.options && openIndex === index && (
              <div className="absolute py-2 z-50 mt-2 left-0 w-35 bg-white rounded-md shadow-lg overflow-hidden">
                {item.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(item.title, opt)}
                    className="w-full text-left py-2.5 px-2 hover:bg-gray-2 font-medium text-[14px] leading-4 tracking-0 text-black-2 cursor-pointer"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {selected[item.title] && (
              <div className="mt-2 text-sm text-gray-600 text-center w-full">
                Selected: {selected[item.title]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetAudience;
