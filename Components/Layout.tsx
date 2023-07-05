import Footer from './Footer'
import Navbar from './Navbar'
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className='max-h-screen h-screen '>
        <Navbar   />
            {children}
        <Footer />  
    </div>
  )
}

export default Layout