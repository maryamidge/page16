import React from 'react';

interface DialogProps {
  message?: string;
}

export const Dialog: React.FC<DialogProps> = ({ 
  message = "You've made the first stitch. Now let's weave your profile so the right founders can find you." 
}) => {
  return (
    <section 
      className="flex w-[309px] h-[184px] flex-col justify-center items-center shrink-0 absolute left-[59px] top-[157px] max-md:left-[calc(50%_-_154.5px)] max-sm:w-[calc(100%_-_40px)] max-sm:left-5"
      role="dialog"
      aria-label="Profile creation guidance"
    >
      <div className="flex w-[309px] flex-col justify-end items-center relative right-[-0.025px] shadow-[0_3.525px_36.425px_0_rgba(0,0,0,0.25)] max-sm:w-full">
        <div className="flex h-[184px] justify-center items-center self-stretch absolute w-[309px] rounded-[9.4px] left-0 top-0 max-sm:w-full">
          <div className="flex w-[309px] h-[184px] justify-center items-center absolute left-0 top-0 max-sm:w-full">
            <div className="w-[309px] h-[251px] shrink-0 backdrop-blur-[29.374998092651367px] absolute left-0 top-0 max-sm:w-full" />
          </div>
        </div>
        <div className="w-[59px] h-3 absolute left-[126px] top-[184px]">
          <div className="w-[34px] h-[9px] shrink-0 absolute left-3 top-0">
            <div className="flex w-[34px] h-[9px] justify-center items-center absolute left-0 top-0">
              <div className="w-[34px] h-[9px] shrink-0 backdrop-blur-[25px] absolute left-0 top-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[182px] justify-center items-center shrink-0 self-stretch relative rounded-[9.4px]">
        <div className="flex w-[307px] h-[182px] justify-center items-center relative pt-[5px] pb-1.5 px-4 max-sm:w-[calc(100%_-_32px)]">
          <p className="w-[275px] h-[171px] shrink-0 text-[#0A3149] text-xl font-[590] leading-[26px] tracking-[-0.27px] absolute left-4 top-[5px] max-sm:w-[calc(100%_-_32px)] max-sm:text-lg max-sm:leading-6">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
};
