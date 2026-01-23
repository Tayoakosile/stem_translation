'use client';
import Image from 'next/image';

const targetAudienceData = [
  {
    title: "Myself",
    icon: "/images/user-icon.svg",
  },
  {
    title: "Researcher",
    icon: "/images/books-icon.svg",
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
  },
]

const TargetAudience = () => {
  return (
    <div className="flex flex-col gap-7">
      <p className="font-medium text-[20px] leading-[100%] tracking-0 text-black-2 text-center w-full">
        Who is your Target Audience?
      </p>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {targetAudienceData.map((item, index) => (
          <button key={index} className="py-3 px-4 flex gap-2 items-center justify-center rounded-[8px] border border-white-1 cursor-pointer hover:border-blue-1 hover:bg-blue-50/30 transition-all">
              <Image alt="target audience icon" className="w-[24px] h-[24px] object-contain" src={item.icon} width={24} height={24} />
            <p className="font-medium text-[16px] leading-[20px] tracking-0 text-black-1">{item.title}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TargetAudience;
