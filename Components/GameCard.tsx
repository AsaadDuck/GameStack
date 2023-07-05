
import React from 'react';

const ProfileCard = () => {
  return (
    <div
      className='flex flex-col items-center justify-center h-full '
    >
      <div className='p-10  rounded-lg w-1/2'>
     
        <div className='text-center mt-4'>
        <p className='font-bold text-lg'>Super Mario Ultimate</p>
          <p className='text-xl'>nendindo</p>  
          <p className='text-xl'>Adventure</p>  
          <hr className='border-[#E43F5A] m-4' />
          <p className='font-bold text-lg'>Metactiric score:</p>
          <p className='text-xl'>100</p>
          <hr className='border-[#E43F5A]  m-4' />
          <p className='font-bold text-lg'>Playtime:</p>
          <p className='text-xl'>100 Hours</p>
          <hr className='border-[#E43F5A]  m-4' />
          <p className='font-bold text-lg'>Platforms:</p>
          <div className='flex justify-center mt-4 ' > <img   src="/images/xbox.png" alt="xbox" /> <img   src="/images/switch.png" alt="switch" /> <img className="filter grayscale"  src="/images/PC.png" alt="PC" /> <img className="filter grayscale"  src="/images/PS.png" alt="playStation" /></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;