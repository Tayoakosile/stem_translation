'use client';
import Image from 'next/image';

type ChatFooterProps = {
  showAttachDropdown: boolean;
  setShowAttachDropdown: (show: boolean) => void;
}

const ChatFooter = ({ showAttachDropdown, setShowAttachDropdown }: ChatFooterProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="border border-white-2 w-full" />
      <div className="flex gap-2 items-center justify-between">
        <div className="py-[8px] px-3 rounded-[8px] flex gap-1 items-center justify-center bg-white-3 cursor-pointer hover:bg-gray-100 transition-colors">
          <p className="font-medium text-[14px] leading-[16px] tracking-0 text-black-1">Short Response</p>
          <Image src="/images/chevron-down.svg" alt="arrow down icon" width={16} height={16} className='w-[16px] h-[16px] object-cover'/>
        </div>
        
        <div
          className="py-[6px] px-3 rounded-[8px] flex gap-1 items-center justify-center bg-white-3 cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => setShowAttachDropdown(!showAttachDropdown)}
        > 
          <Image alt="Attachment Icon" className="w-[20px] h-[20px] object-contain" src="/images/attachment-icon.svg" width={20} height={20} />
          <p className="font-medium text-[14px] leading-[16px] tracking-0 text-black-1">Attach File</p>
        </div>
      </div>
    </div>
  )
}

export default ChatFooter;
