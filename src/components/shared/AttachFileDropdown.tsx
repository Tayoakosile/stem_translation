'use client';

type AttachFileDropdownProps = {
  showAttachDropdown: boolean;
}

const AttachFileDropdown = ({ showAttachDropdown }: AttachFileDropdownProps) => {
  return (
    <div
      className={`absolute bg-white flex flex-col gap-[8px] items-start px-[16px] py-[12px] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(183,183,183,0.25)] w-[140px] z-50 origin-top transition-all duration-200 ease-out right-3 sm:right-4 bottom-0 ${
        showAttachDropdown
          ? 'opacity-100 scale-y-100 translate-y-[calc(100%+8px)]'
          : 'opacity-0 scale-y-0 translate-y-0 pointer-events-none'
      }`}
    >
      <p className="font-medium leading-normal min-w-full not-italic text-[#333] text-[16px] cursor-pointer hover:text-blue-1 transition-colors py-[4px]">
        PDF
      </p>
      <div className="h-px relative shrink-0 w-full bg-[#e5e5e5]" />
      <p className="font-medium leading-normal min-w-full not-italic text-[#333] text-[16px] cursor-pointer hover:text-blue-1 transition-colors py-[4px]">
        Image
      </p>
    </div>
  )
}

export default AttachFileDropdown;
