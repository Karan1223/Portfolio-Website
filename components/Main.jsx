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
                    As a <span className='text-[#bd7b3e]'> Software Developer</span>, I have around 3+ years of academic experience.
                    My primary areas of expertise are in software development using Java Core, Java AWT, Java Swing, JDBC, Data
                    Structures, Algorithms, MySQL, and Oracle PL/SQL, as well as <span className='text-[#ceae21]'>Full Stack Web Development</span> using React, Next.js, Node.js, MongoDB, Tailwind RESTful
                    APIs, PHP, JSPs, Servlets, AJAX, JQuery, and manymore technologies.
                </p>
                <button className='p-4 bg-gradient-to-r from-[#1e6cd1] to-[#a7b1db]'>
                <a  href='./Karan-Punjabi.pdf' target='_blank'>
                  Download Resume
                </a>
                </button><br/>
                <br/>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
  

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link  href="https://www.linkedin.com/in/punjabikaran/">
                  <AiOutlineLinkedin/>
                </Link>
                </div>

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link href="https://github.com/Karan1223">
                  <AiFillGithub/>
                </Link>
                </div>

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link href="mailto:kpkaranpunjabi1223@gmail.com">
                <AiOutlineMail/>
                </Link>
                </div>

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link href="https://www.instagram.com/karanpunjabi_/?next=%2F">
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