import Link from 'next/link'
import React from 'react'

import {AiOutlineLinkedin, AiFillGithub, AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'

const Main = () => {
  return (
    
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pt-9'>
            <div>
            <br/>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET'S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi! I'm <span className='text-[#a39f66]'>Karan Punjabi</span>
                </h1>
                <h2 className='py-4 text-gray-700'> 
                    Software Developer
                </h2>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto text-justify'>
                As a <span className='text-[#bd7b3e]'> Software Developer</span>, I have gained substantial academic experience over the course of four years. 
                My expertise encompasses a wide range of software development areas, including Java Core, Java AWT, Java Swing, JDBC, Data Structures, Algorithms, MySQL, and Oracle PL/SQL. 
                Moreover, I possess comprehensive knowledge of <span className='text-[#bd7b3e]'>Full Stack Web Development</span> utilizing technologies such as React, Next.js, Node.js, MongoDB, Tailwind, RESTful APIs, PHP, JSPs, Servlets, AJAX, and JQuery, among others.
                    
                </p>
                <button className='p-4 bg-gradient-to-r from-[#1e6cd1] to-[#a7b1db]'>
                <a  href='./KaranPunjabi.pdf' target='_blank'>
                  Download Resume
                </a>
                </button><br/>
                <br/>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
  

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link aria-label='Linkedin Profile' href="https://www.linkedin.com/in/punjabikaran/"
                target='_blank'>
                  <AiOutlineLinkedin/>
                </Link>
                </div>

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link aria-label='Github' href="https://github.com/Karan1223" target='_blank'>
                  <AiFillGithub/>
                </Link>
                </div>

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link aria-label='Mail' href="mailto:kpkaranpunjabi1223@gmail.com" target='_blank'>
                <AiOutlineMail/>
                </Link>
                </div>

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link aria-label='Instagram' href="https://www.instagram.com/karanpunjabi_/?next=%2F" target='_blank'>
                <AiOutlineInstagram/>
                </Link>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main