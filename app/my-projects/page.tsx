"use client"
import React from 'react'
import { motion } from "framer-motion";
import store from "@/public/store.png"
import social from "@/public/socialapp.png"
import land from "@/public/landwind.png"
import movie from "@/public/Movie.png"
import yummy from "@/public/yummy.png"
import fokiry from "@/public/fokiry.png"
import Image from 'next/image'
import Link from 'next/link';

const page = () => {
  return <>
    <div style={{ backgroundImage: "url(/main-bg.webp)" }} className="flex items-center w-full h-full bg-cover bg-right md:bg-center py-28">
      <div className='grid grid-cols-12 gap-5 w-full md:w-[80%] md:mx-auto pt-20 overflow-hidden px-5 md:px-0'>
        <motion.div 
          className='col-span-12 md:col-span-6 border border-white px-3 py-5 rounded-md relative group'
          initial={{ x: '-200%' }} 
          animate={{ x: 0 }}
          exit={{ x: '-200%' }} 
          transition={{ type: 'spring', stiffness: 100 , delay: .7 }} 
        >
          <h1 className='text-white font-bold text-2xl text-center'>E-ecommerce</h1>
          <div className='flex flex-col md:flex-row gap-5 mt-4'>
            <Image 
              src={store} 
              className='rounded-lg w-[100%]' 
              alt="E-ecommerce" 
            />
          </div>
          <div className='px-3 py-5 flex flex-col absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white rounded-md border border-white '>
            <span className=' bg-clip-text text-black font-bold text-center text-3xl'>Tools</span>
            <span>
              <ul className='list-disc pl-5 space-y-2'>
                <li><span>React.js</span></li>
                <li><span>React Context API</span></li>
                <li><span>Tan Stack Query</span></li>
                <li><span>Tailwindcss</span></li>
                <li><span>JS</span></li>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
              </ul>
              <Link target='_blank' href={`https://e-ecommerce-mi90h41at-hasans-projects-49ba3bd6.vercel.app/`} className='bg-black text-center text-white border-black border rounded-md block w-[50%] mx-auto py-2 hover:bg-white hover:text-black duration-500 transition-colors '>Visit</Link>
            </span>
          </div>
        </motion.div>
        <motion.div 
          className='col-span-12 md:col-span-6 border border-white px-3 py-5 rounded-md relative group'
          initial={{ x: '200%' }} 
          animate={{ x: 0 }} 
          exit={{ x: '200%' }} 
          transition={{ type: 'spring', stiffness: 100 , delay: .7 }}
        >
          <h1 className='text-white font-bold text-2xl text-center'>social media app</h1>
          <div className='flex flex-col md:flex-row gap-5 mt-4'>
            <Image 
              src={social} 
              className='rounded-lg w-[100%]' 
              alt="social app" 
            />
          </div>
          <div className='px-3 py-5 flex flex-col absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white rounded-md border border-white '>
            <span className=' bg-clip-text text-black font-bold text-center text-3xl'>Tools</span>
            <span>
              <ul className='list-disc pl-5 space-y-2'>
                <li><span>Next.js</span></li>
                <li><span>mui material</span></li>
                <li><span>Redux Toolkit</span></li>
                <li><span>Type script</span></li>
                <li><span>RWD</span></li>
              </ul>
              <Link  target='_blank'  href={`https://social-app-theta-beryl.vercel.app/`} className='bg-black text-center text-white border-black border rounded-md block w-[50%] mx-auto py-2 hover:bg-white hover:text-black duration-500 transition-colors '>Visit</Link>
            </span>
          </div>
        </motion.div>
        <motion.div 
          className='col-span-12 md:col-span-6 border border-white px-3 py-5 rounded-md relative group'
          initial={{ x: '-200%' }} 
          animate={{ x: 0 }}
          exit={{ x: '-200%' }} 
          transition={{ type: 'spring', stiffness: 100 , delay: .7 }} 
        >
          <h1 className='text-white font-bold text-2xl text-center'>Land Wind Page</h1>
          <div className='flex flex-col md:flex-row gap-5 mt-4'>
            <Image 
              src={land} 
              className='rounded-lg w-[100%]' 
              alt="social app" 
            />
          </div>
          <div className='px-3 py-5 flex flex-col absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white rounded-md border border-white '>
            <span className=' bg-clip-text text-black font-bold text-center text-3xl'>Tools</span>
            <span>
              <ul className='list-disc pl-5 space-y-2'>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>Tailwindcss</span></li>
                <li><span>Java Script</span></li>
                <li><span>RWD</span></li>
              </ul>
              <Link  target='_blank'  href={`https://hassan-yasser.github.io/LandWind/src/JS,HTML/index.html`} className='bg-black text-center text-white border-black border rounded-md block w-[50%] mx-auto py-2 hover:bg-white hover:text-black duration-500 transition-colors '>Visit</Link>
            </span>
          </div>
        </motion.div>
        <motion.div 
          className='col-span-12 md:col-span-6 border border-white px-3 py-5 rounded-md relative group'
          initial={{ x: '200%' }} 
          animate={{ x: 0 }} 
          exit={{ x: '200%' }} 
          transition={{ type: 'spring', stiffness: 100 , delay: .7 }}
        >
          <h1 className='text-white font-bold text-2xl text-center'>Movies</h1>
          <div className='flex flex-col md:flex-row gap-5 mt-4'>
            <Image 
              src={movie} 
              className='rounded-lg w-[100%]' 
              alt="social app" 
            />
          </div>
          <div className='px-3 py-5 flex flex-col absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white rounded-md border border-white '>
            <span className=' bg-clip-text text-black font-bold text-center text-3xl'>Tools</span>
            <span>
              <ul className='list-disc pl-5 space-y-2'>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>Java script</span></li>
                <li><span>BootStrap</span></li>
                <li><span>Jquery</span></li>
                <li><span>RWD</span></li>
              </ul>
              <Link  target='_blank'  href={`https://hassan-yasser.github.io/movie-Website/Hasan.html`} className='bg-black text-center text-white border-black border rounded-md block w-[50%] mx-auto py-2 hover:bg-white hover:text-black duration-500 transition-colors '>Visit</Link>
            </span>
          </div>
        </motion.div>
        <motion.div 
          className='col-span-12 md:col-span-6 border border-white px-3 py-5 rounded-md relative group'
          initial={{ x: '-200%' }} 
          animate={{ x: 0 }} 
          exit={{ x: '-200%' }} 
          transition={{ type: 'spring', stiffness: 100 , delay: .7 }}
        >
          <h1 className='text-white font-bold text-2xl text-center'>Fokiry</h1>
          <div className='flex flex-col md:flex-row gap-5 mt-4'>
            <Image 
              src={fokiry} 
              className='rounded-lg w-[100%]' 
              alt="social app" 
            />
          </div>
          <div className='px-3 py-5 flex flex-col absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white rounded-md border border-white '>
            <span className=' bg-clip-text text-black font-bold text-center text-3xl'>Tools</span>
            <span>
              <ul className='list-disc pl-5 space-y-2'>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>Java script</span></li>
                <li><span>Tailwindcss</span></li>
                <li><span>RWD</span></li>
              </ul>
              <Link  target='_blank'  href={`https://hassan-yasser.github.io/fokiry-foods/src/`} className='bg-black text-center text-white border-black border rounded-md block w-[50%] mx-auto py-2 hover:bg-white hover:text-black duration-500 transition-colors '>Visit</Link>
            </span>
          </div>
        </motion.div>
        <motion.div 
          className='col-span-12 md:col-span-6 border border-white px-3 py-5 rounded-md relative group'
          initial={{ x: '200%' }} 
          animate={{ x: 0 }} 
          exit={{ x: '200%' }} 
          transition={{ type: 'spring', stiffness: 100 , delay: .7 }}
        >
          <h1 className='text-white font-bold text-2xl text-center'>Yummy</h1>
          <div className='flex flex-col md:flex-row gap-5 mt-4'>
            <Image 
              src={yummy} 
              className='rounded-lg w-[100%]' 
              alt="social app" 
            />
          </div>
          <div className='px-3 py-5 flex flex-col absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white rounded-md border border-white '>
            <span className=' bg-clip-text text-black font-bold text-center text-3xl'>Tools</span>
            <span>
              <ul className='list-disc pl-5 space-y-2'>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>Java script</span></li>
                <li><span>BootStrap</span></li>
                <li><span>Jquery</span></li>
                <li><span>RWD</span></li>
              </ul>
              <Link  target='_blank'  href={`https://hassan-yasser.github.io/Yummy-Website/`} className='bg-black text-center text-white border-black border rounded-md block w-[50%] mx-auto py-2 hover:bg-white hover:text-black duration-500 transition-colors '>Visit</Link>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </>
}

export default page;
