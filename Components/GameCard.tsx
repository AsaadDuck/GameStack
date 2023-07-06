
import React from 'react';

const GameCard = ({ gameName, gameGen, gameMeta, gamePlatforms }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full '>
      <div className='p-10  rounded-lg w-1/2'>

        <div className='text-center mt-4'>
          <p className='font-bold text-lg'>{gameName}</p>
          <p className='text-xl'>{gameGen}</p>
          <hr className='border-[#E43F5A] m-4' />
          <p className='font-bold text-lg'>Metactiric score:</p>
          <p className='text-xl'>{gameMeta}</p>
          <hr className='border-[#E43F5A]  m-4' />
          <p className='font-bold text-lg'>Playtime:</p>
          <p className='text-xl'>100 Hours</p>
          <hr className='border-[#E43F5A]  m-4' />
          <p className='font-bold text-lg'>Platforms:</p>
          <div className='flex justify-center mt-4'>
            <img src="/images/xbox.png" alt="xbox" className={`filter ${gamePlatforms.includes('xbox') ? '' : 'grayscale'}`} />
            <img src="/images/switch.png" alt="switch" className={`filter ${gamePlatforms.includes('switch') ? '' : 'grayscale'}`} />
            <img src="/images/PC.png" alt="PC" className={`filter ${gamePlatforms.includes('pc') ? '' : 'grayscale'}`} />
            <img src="/images/PS.png" alt="playStation" className={`filter ${gamePlatforms.includes('playstation') ? '' : 'grayscale'}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;