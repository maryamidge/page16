import React from 'react';

interface DialogProps {
  message?: string;
}

export const Dialog: React.FC<DialogProps> = ({ 
  message = "You've made the first stitch. Now let's weave your profile so the right founders can find you." 
}) => {
  return (
    <section 
      className="absolute left-[59px] top-[120px] max-md:left-[calc(50%_-_154.5px)] max-sm:w-[calc(100%_-_40px)] max-sm:left-5"
      role="dialog"
      aria-label="Profile creation guidance"
    >
      {/* Main dialog box */}
      <div className="relative bg-white rounded-2xl shadow-lg p-6 w-[309px] max-sm:w-full">
        <p 
          className="flex w-[275px] h-[171px] flex-col justify-center shrink-0 text-[#0A3149] text-[20px] font-[590] leading-[26px] tracking-[-0.27px] max-sm:w-full max-sm:text-lg max-sm:leading-6" 
          style={{ 
            fontFamily: '"SF Pro"',
            fontFeatureSettings: "'liga' off, 'clig' off"
          }}
        >
          {message}
        </p>
        
        {/* Speech bubble pointer */}
        <div className="absolute bottom-[-12px] left-[40px]">
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-white drop-shadow-md"></div>
        </div>
      </div>
    </section>
  );
};
