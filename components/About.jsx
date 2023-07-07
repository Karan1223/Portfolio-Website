import Image from 'next/image'
import React from 'react'
import ME from '../public/assets/Profile/IMG_4096.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-sapn-2 text-justify'>
                <p className='uppercase text-xl tracking-widest text-[#5b4e4e]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                    I have about 3+ years of academic experience as a Full Stack Software Developer with Web and Desktop Applications in Java, JavaScript, and C#. 
                    I have a bachelor's degree in science, and I'm currently enrolled at Humber College in Toronto to study information technology solutions.
                </p>
                <p className='py-2 text-gray-600'>
                    My key competencies are in web development using React.js, Node.js, RESTful APIs, PHP, JSPs, Servlets, AJAX,
                    JQuery, XML, and JSON, as well as software development utilizing Java Core, Java AWT, Java Swing, JDBC,
                    Data Structures, Algorithms, MySQL, and Oracle PL/SQL. I enjoy completing Data Structures and Algorithms tasks
                    on LeetCode whenever I have some free time to sharpen my problem-solving abilities.
                    Additionally, I enjoy creating machine learning models and am constantly seeking to accept responsibility.
                </p>
                
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex itrems-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={ME} alt="Profile Pic" />
            </div>
        </div>
    </div>
  )
}

export default About