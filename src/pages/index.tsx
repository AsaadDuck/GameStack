import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Head } from 'next/document'
import  Navbar  from '../../Components/Navbar'
import Card from '../../Components/Card'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      
      <Card />

    </div>
  )
}
