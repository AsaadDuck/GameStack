import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Belanosima:wght@400;600;700&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600&family=Noto+Sans+Arabic:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
</style> 


const Navbar = () => {

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
      const currentPath = window.location.pathname;
      setActiveLink(currentPath);
      console.log(activeLink);

    });
    console.log(activeLink);


    
  return (
    <nav className="mx-1 mb-2 sticky top-0 z-10">
    <div className="mt-2 font-Belanosima rounded-xl bg-[#1E1E1E] text-[#E43F5A] max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 text-2xl">
  
      <div className="text-6xl">
        <Link href={''}> Logo</Link>
      </div>
  
      <div className="relative mt-3 w-full lg:w-1/3 items-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-[#E43F5A]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="" className="block w-full py-3 pl-10 text-sm text-gray-900 border-[#0F0F0F] rounded-xl bg-[#0F0F0F]" placeholder="Search..." />
      </div>
  
      <div className="">
        <button className="block lg:hidden">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="#E43F5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
  
        <ul className="flex flex-wrap items-center justify-between w-full lg:w-auto hidden lg:flex">
          <li>
            <Link className={`px-7 ${activeLink === '/' ? 'text-white ' : ''}`} href={'/'}>Explore</Link>
          </li>
  
          <li>
            <Link className={`px-7 ${activeLink === '/myGame' ? 'text-white ' : ''}`} href={'/myGame'}>My Game</Link>
          </li>
  
          <li className="ml-10 mr-5">
            <div>
              <Link className={`${activeLink === '/profile' ? 'text-white ' : ''} `} href={'/profile'} >
                <AccountCircleIcon className={`${activeLink === '/profile' ? 'text-white ' : ''} text-[#E43F5A] scale-[3]`} />
              </Link>
            </div>
          </li>
  
        </ul>
      </div>
    </div>
  
    <ul className="block w-full px-4 lg:hidden">
      <li>
        <Link className={`block py-2 ${activeLink === '/' ? 'text-white ' : ''}`} href={'/'}>Explore</Link>
      </li>
  
      <li>
        <Link className={`block py-2 ${activeLink === '/myGame' ? 'text-white ' : ''}`} href={'/myGame'}>My Game</Link>
      </li>
  
      <li className="mt-4">
        <div>
          <Link className={`${activeLink === '/profile' ? 'text-white ' : ''} `} href={'/profile'} >
            <AccountCircleIcon className={`${activeLink === '/profile' ? 'text-white ' : ''} text-[#E43F5A]`} />
          </Link>
        </div>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar