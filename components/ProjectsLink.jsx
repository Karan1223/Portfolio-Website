import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProjectLink = ({title, img, url, description, demo}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-sl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={img} alt="/"/>
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h6 className='text-2xl text-white tracking-wider text-center'>
           {title}
        </h6>
        <p className='pb-4 pt-2 text-white text-center'>{description}</p>
        <Link href={url} target='_blank'>
            <p className='text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Frontend</p>
        </Link><br/>
        <Link href={demo} target='_blank'>
            <p className='text-center py-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Backend</p>
        </Link>
    </div>
</div>
  )
}

export default ProjectLink