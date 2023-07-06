import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import Card from '../../Components/Card'
import Explore from '../../Components/Explore'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <div>
      
      <Explore />

    </div>
  )
}
