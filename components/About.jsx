import Image from "next/image";
import React from "react";
import ME from "../public/assets/Profile/IMG_4096.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-sapn-2 text-justify">
          <p className="uppercase text-xl tracking-widest text-[#5b4e4e]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            With over 3 years of academic experience, I've honed my skills as a
            Full Stack Software Developer, proficient in crafting Web and
            Desktop Applications using Java, JavaScript, Python, and C#. Holding
            a bachelor's degree in science. I Also did Post-Graduate Diploma
            from Humber College in Toronto, specializing in information
            technology solutions.
          </p>

          <p className="py-2 text-gray-600">
            My expertise lies in web development, where I thrive in React.js,
            Angular, NextJS, Node.js, and the intricacies of RESTful APIs, PHP,
            JSPs, Servlets, AJAX, JQuery, XML, and JSON. On the software
            development front, I'm adept in Java Core, Java AWT, Java Swing,
            Spring Boot, JDBC, and have a strong foundation in Data Structures
            and Algorithms, MySQL, and Oracle PL/SQL. I find joy in tackling
            Data Structures and Algorithms challenges on LeetCode during my free
            time, constantly refining my problem-solving skills. Beyond that, I
            delve into creating machine learning models, always eager to take on
            new responsibilities.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex itrems-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={ME} alt="Profile Pic" />
        </div>
      </div>
    </div>
  );
};

export default About;
