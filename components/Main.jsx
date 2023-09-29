import Link from "next/link";
import React from "react";

import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pt-9">
        <div>
          <br />
          <br />

          <p className="uppercase text-sm tracking-widest text-gray-600 pt-10">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi! I'm <span className="text-[#a39f66]">Karan Punjabi</span>
          </h1>
          <h2 className="py-4 text-gray-700">Software Developer</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-justify">
            I'm a seasoned{" "}
            <span className="text-[#bd7b3e]">Software Developer</span> with four
            years of academic experience. I specialize in Java (Core, AWT,
            Swing, Spring Boot, JDBC), and I'm well-versed in Data Structures
            and Algorithms. I'm also skilled in databases like MongoDb,
            PostgreSQL, MySQL, and Oracle PL/SQL. In{" "}
            <span className="text-[#bd7b3e]">Full Stack Web Development</span>,
            I excel with React, Angular, Next.js, Node.js, Tailwind, RESTful
            APIs, PHP, JSPs, Servlets, AJAX, and JQuery. My dedication to
            quality ensures effective solutions in the dynamic field of software
            development.
          </p>

          <button className="p-4 bg-gradient-to-r from-[#1e6cd1] to-[#a7b1db]">
            <a href="./KaranPunjabi.pdf" target="_blank">
              Download Resume
            </a>
          </button>
          <br />
          <br />
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration">
              <Link
                aria-label="Linkedin Profile"
                href="https://www.linkedin.com/in/punjabikaran/"
                target="_blank"
              >
                <AiOutlineLinkedin />
              </Link>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration">
              <Link
                aria-label="Github"
                href="https://github.com/Karan1223"
                target="_blank"
              >
                <AiFillGithub />
              </Link>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration">
              <Link
                aria-label="Mail"
                href="mailto:kpkaranpunjabi1223@gmail.com"
                target="_blank"
              >
                <AiOutlineMail />
              </Link>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration">
              <Link
                aria-label="Instagram"
                href="https://www.instagram.com/karanpunjabi_/?next=%2F"
                target="_blank"
              >
                <AiOutlineInstagram />
              </Link>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in-duration">
              <Link
                aria-label="Leet Code"
                href="https://leetcode.com/Karanpunjabi/"
                target="_blank"
              >
                <SiLeetcode />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
