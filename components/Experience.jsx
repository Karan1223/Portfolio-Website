import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='w-full'>
    <div className='max-w-[1240px] m-auto md:grid'>
        <div className='col-sapn-2 text-justify'>
            <p className='uppercase text-xl tracking-widest text-[#5b4e4e]'>Experience</p>
            <h2 className='py-2'>Full-Stack Developer</h2>
            <h3 className='py-2'>BuyerFolio. Internship.</h3>
            <h4 className='py-2'>May 2023 - August 2023</h4>
            <div className='list-disc list-inside'>
            <p className='py-2 text-gray-600'>
            During my internship at BuyerFolio, I had the privilege of delving into a rich spectrum of 
            technologies, each contributing to a multifaceted learning journey. The exposure to <span className='text-[#bd7b3e]'>Angular, 
            Node.js, Express, MongoDB,</span> HTML/CSS, and JavaScript proved to be an invaluable experience. 
            My responsibilities extended beyond theoretical knowledge, as I became proficient in creating 
            seamless and user-friendly interfaces that combined aesthetic appeal with practical functionality.
            </p>

            <p className='py-2 text-gray-600'>
            A significant facet of my role involved optimizing database schemas, a task that not only 
            sharpened my skills in efficient data retrieval but also underscored the importance of a 
            well-structured foundation. Collaborating within a multidisciplinary team enriched my 
            understanding of teamwork dynamics and effective communication. Debugging, testing, and 
            problem-solving became second nature, as I navigated through complexities to ensure smooth and 
            error-free functionalities.
            </p>
            <p className='py-2 text-gray-600'>
            Importantly, my internship kindled an ardent passion for full-stack development. The dynamic 
            environment fostered adaptability and innovation, and I learned to deliver high-quality software 
            solutions within stipulated timelines. This immersive experience not only expanded my technical 
            horizons but also nurtured a proactive attitude toward continuous learning. In reflection, my time 
            at BuyerFolio has equipped me with a holistic skill set, shaping me into a versatile developer 
            prepared for the evolving challenges of the industry.
            At last we won prize for <span className='font-bold'>best project at Humber Capstone Expo 2023</span>.
            </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Experience