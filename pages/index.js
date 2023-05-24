import Head from "next/head";

import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


function Home()
{
    return(
        <div>
            <Head>
                <title>Karan Punjabi | Software Developer</title>
                <meta name="description" content="Portfolio Website for Karan"/>
                <meta name="author" content="Karan Punjabi"/>
                <link rel="icon" href="/kplogo.png"/>   
          
            </Head>
        <Navbar/>
        <Main/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
         
        </div>
    )
}

export default Home