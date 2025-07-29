import React from 'react';
import { Button } from './Button';

interface FooterProps {
  onGetMatched?: () => void;
  buttonText?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  onGetMatched,
  buttonText = "Get Matched!"
}) => {
  const handleGetMatched = () => {
    if (onGetMatched) {
      onGetMatched();
    } else {
      // Default behavior - could navigate to next step
      console.log('Get Matched clicked');
    }
  };

  return (
    <footer className="flex w-[428px] flex-col justify-center items-center gap-[34px] absolute h-[116px] bg-white left-0 top-[816px] max-md:w-full max-sm:w-full">
      <div className="absolute w-[396px] left-4 top-0 max-md:w-[calc(100%_-_32px)] max-md:left-4 max-sm:w-[calc(100%_-_32px)]">
        <Button onClick={handleGetMatched}>
          {buttonText}
        </Button>
      </div>
      <div className="flex w-[428px] flex-col items-start absolute h-[34px] left-0 top-[82px] max-md:w-full max-sm:w-full">
        <div className="flex flex-col items-start relative">
          <div className="flex w-[430px] h-[34px] flex-col justify-end items-center relative pb-2">
            <div 
              className="w-[154px] h-[5px] shrink-0 backdrop-blur-2xl relative bg-black rounded-[100px]"
              role="presentation"
              aria-label="Home indicator"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
