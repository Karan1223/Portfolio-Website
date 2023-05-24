import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import navLogo from '../public/kplogo.png'
import {AiOutlineLinkedin, AiOutlineMenu, AiOutlineClose, AiFillGithub, AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
const Navbar = () => {

  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg] = useState('#ecf0f3')


  const handleNav = () =>
  {
    setNav(!nav);
  };

 
  useEffect(()=>{
    const handleShadow = () => {
      if(window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  },[]);


  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 shadow-xl z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Image src={navLogo} alt="Logo" width='60' height='50'/>
      <div>
        <ul className='hidden md:flex'>
          <Link href='/#home' scroll={false}>
            <li className='ml-10 text-sm uppercase hove:border-b'>Home</li>
          </Link>
          <Link href='/#about' scroll={false}>
            <li className='ml-10 text-sm uppercase hove:border-b'>About</li>
          </Link>  
          <Link href='/#skills' scroll={false}>
            <li className='ml-10 text-sm uppercase hove:border-b'>Skills</li>
          </Link>  
          <Link href='/#projects' scroll={false}>
            <li className='ml-10 text-sm uppercase hove:border-b'>Projects</li>
          </Link>
          <Link href='/#contact' scroll={false}>
            <li className='ml-10 text-sm uppercase hove:border-b'>Contact</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={25}/>
        </div>
      </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'mdfixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
        <div>
          <div className='flex w-full items-center justify-between'>
          <Image src={navLogo} alt="Logo" width='60' height='50'/>
          <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
            <AiOutlineClose/>
          </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together.</p>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <Link href='/#home' scroll={false}>
              <li  onClick={()=> setNav(false)} className='py-4 text-sm'>
                Home
              </li>
            </Link>
            <Link href='/#about' scroll={false}>
              <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                About
              </li>
            </Link><Link href='/#skills' scroll={false}>
              <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                Skills
              </li>
            </Link><Link href='/#projects' scroll={false}>
              <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                Projects
              </li>
            </Link><Link href='/#contact' scroll={false}>
              <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                Contact
              </li>
            </Link>
          </ul>
          <div className="flex flex-col">
            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-duration'>
              <Link  href="https://www.linkedin.com/in/punjabikaran/">
                <AiOutlineLinkedin/>
              </Link>
              </div>

              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-duration'>
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
      </div>
    </div>
  );
};

export default Navbar