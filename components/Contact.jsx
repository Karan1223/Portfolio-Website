import React, {useRef, useState} from 'react'
import emailjs from 'emailjs-com'
import Image from 'next/image'
import contact from '../public/assets/Profile/contact.jpg'
import {AiOutlineLinkedin, AiFillGithub, AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {

    const form = useRef();
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);

  

  function validateForm() {
    const newErrors = {};
    const name = form.current.name.value.trim();
    const phoneNumber = form.current.number.value.trim();
    const email = form.current.email.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();


   
    if (name === '') {
      newErrors.name = 'Name is required';
    }

    if (phoneNumber.length > 0 && phoneNumber.length !== 10 ) 
    {
      newErrors.phoneNumber = 'Phone Number is invalid.';
    }
  
    if (email === '') {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (subject === '') {
      newErrors.subject = 'Subject is required';
    }

    if (message === '') {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }


    function sendEmail(e){
      e.preventDefault();
  
      if (validateForm()) {
        emailjs.sendForm('service_yv9mvtl', 'template_nhhpe2f', form.current, 'XdyplZNkPAFc31NzF')
          .then((result) => {
            console.log(result.text);
            setIsPending(false);
            setSuccess(true)
          }, (error) => {
            console.log(error.text);
          });
         // changeSuccess()
  
        form.current.reset();
       
      }
    };
  return (
    <div id='contact' className='w-full p-20 pl-[55px]'>
        <div className='max-w-[1240px] m-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5b4e4e]'>Contact</p>
            <h2 className='py-4'>Get in touch.</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/* Left */}            
<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
<div className='lg:p-4 h-full'>
    <div>
        <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contact} alt=""/>
    </div>
    <div>
        <h2 className='py-2'>Karan Punjabi</h2>
        <h3 className='text-[#a39f66]'>Software Developer</h3>
        <h3 className='py-4'>I am available for part-time or full-time positions. Feel free to contact me. </h3>
        <h3>kpkaranpunjabi1223@gmail.com</h3>
        <h3>+1(905) 782-6351</h3>
    </div>

<div>
<br/>
    <h3 className='uppercase'>Connect with me.</h3>
    <div className='flex items-center justify-between py-4'>
    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link aria-label='Linkedin Profile' href="https://www.linkedin.com/in/punjabikaran/">
                  <AiOutlineLinkedin/>
                </Link>
                </div>

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link aria-label='Github' href="https://github.com/Karan1223">
                  <AiFillGithub/>
                </Link>
                </div>

                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link aria-label='Mail' href="mailto:kpkaranpunjabi1223@gmail.com">
                    <AiOutlineMail/>
                </Link>
                </div>
               
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                <Link aria-label='Instagram' href="https://www.instagram.com/karanpunjabi_/?next=%2F">
                <AiOutlineInstagram/>
                </Link>
                </div>
             </div>
            </div>
        </div>
    </div>
</div>
{/* Right */} 
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label htmlFor='firstname' className='uppercase text-sm py-2'>Name</label>
                            <input id='firstname' className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="name" />
                            {errors.name && <span className="text-red-500">{errors.name}</span>}
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor='phonenumber' className='uppercase text-sm py-2'>Phone Number</label>
                            <input id='phonenumber' className='border-2 rounded-lg p-3 flex border-gray-300' type="number" name="number"/>
                            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
                        </div>

                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='flex flex-col'>
                            <label htmlFor='email' className='uppercase text-sm py-2'>Email</label>
                            <input id='email' className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email"/>
                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='flex flex-col'>
                            <label htmlFor='subject' className='uppercase text-sm py-2'>Subject</label>
                            <input id='subject' className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject" />
                            {errors.subject && <span className="text-red-500">{errors.subject}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col py-2'>
                        <div className='flex flex-col'>
                            <label htmlFor='message' className='uppercase text-sm py-2'>Message</label>
                            <textarea id='message' className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name="message"></textarea>
                            {errors.message && <span className="text-red-500">{errors.message}</span>}
                        </div>
                    </div>
                    {!isPending && <button className='w-full p-4 text-gray-100 mt-4' name='btn'>Send Message</button>}
                    {isPending && <button className='w-full p-4 text-gray-100 mt-4' name='btn' disabled>Sending Message</button>}
                    <br/>
                    <br/>
                    {success && <p className="text-green-700">Form submitted successfully.</p>}
                   
                </form>

            </div>
        </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="/#home" scroll={false}>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration'>
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )}

export default Contact