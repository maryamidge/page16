import React from 'react';
import { StatusBar } from '@/components/StatusBar';
import { Dialog } from '@/components/Dialog';
import { CharacterImage } from '@/components/CharacterImage';
import { Footer } from '@/components/Footer';

const Index = () => {
  const handleGetMatched = () => {
    // Handle the get matched action
    alert('Starting the matching process! This would typically navigate to the next step.');
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=SF+Pro:wght@400;590&family=Poppins:wght@600;700&display=swap"
      />
      <main className="w-[428px] h-[932px] relative overflow-hidden bg-white mx-auto my-0 max-md:w-full max-md:max-w-[428px] max-md:h-screen max-md:min-h-[932px] max-sm:w-full max-sm:h-screen max-sm:min-h-[932px]">
        <h1 className="sr-only">Create Profile - Get Matched with Founders</h1>
        
        <StatusBar />
        
        <Dialog message="You've made the first stitch. Now let's weave your profile so the right founders can find you." />
        
        <CharacterImage 
          src="https://api.builder.io/api/v1/image/assets/TEMP/a3527624c8fb7e08d2a85433323a4999bc8e6a9b?width=397"
          alt="Friendly character illustration encouraging profile creation"
        />
        
        <Footer 
          onGetMatched={handleGetMatched}
          buttonText="Get Matched!"
        />
      </main>
    </>
  );
};

export default Index;
