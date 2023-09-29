import React from 'react'
import Image from 'next/image';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import Express from '../public/assets/skills/express.png';
import Mongo from '../public/assets/skills/mongo.png';
import NodeJs from '../public/assets/skills/node.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Swift from '../public/assets/skills/swift.png'
import NextJS from '../public/assets/skills/nextjs.png'
import Java from '../public/assets/skills/java.png'
import Hadoop from '../public/assets/skills/hadoop.png';
import Spark from '../public/assets/skills/spark.png'
import Hive from '../public/assets/skills/hive.png'
import Python from '../public/assets/skills/python.png'
import Php from '../public/assets/skills/php.png'
import Csharp from '../public/assets/skills/c.png'
import MySql from '../public/assets/skills/mysql.png'
import TS from '../public/assets/skills/ts.png'
import SqlServer from '../public/assets/skills/sql.png'
import JQuery from '../public/assets/skills/jquery.png'
import Firebase from '../public/assets/skills/firebase.jpeg'
import rstudio from '../public/assets/skills/rstudio.svg'
import Spring from '../public/assets/skills/spring.png'
import Angular from '../public/assets/skills/angular.png'
import Tableau from '../public/assets/skills/tableau.png'
import Oracle from '../public/assets/skills/oracle.jpeg'
import Neo4j from '../public/assets/skills/neo4j.png'
import Redux from '../public/assets/skills/redux.png'
import Jupyter from '../public/assets/skills/jupyter.png'
import Gitlab from '../public/assets/skills/gitlab.png'
import JDBC from '../public/assets/skills/jdbc.png'
import Postgre from '../public/assets/skills/postgre.png'
import Handlebar from '../public/assets/skills/handlebars.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full p-20 pl-[55px]'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5b4e4e]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-6 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                        <div className='m-auto'>
                            <Image src={Java} width='64px' height='64px' alt="/"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image  src={Spring} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Spring Boot</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Csharp} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>C Sharp</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Swift} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Swift</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Python} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Python</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Javascript} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={NextJS} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NextJS</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Angular} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Angular</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Mongo} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MongoDB</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Express} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Express</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={ReactImg} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={NodeJs} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NodeJS</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Html} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Css} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Tailwind} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image  src={TS} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>TypeScript</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image  src={Php} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Php</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image  src={Handlebar} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Handlebar</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={JQuery} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JQuery</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Jupyter} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Jupyter</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={JDBC} width='55px' height='55px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JDBC</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Oracle} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Oracle</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={MySql} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MySql</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Postgre} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Postgre SQL</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={SqlServer} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Microsoft Sql Server</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Hadoop} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Hadoop</h3>
                    </div>
                </div>
                </div>    
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Spark} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Spark</h3>
                    </div>
                </div>
                </div>    
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Hive} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Hive</h3>
                    </div>
                </div>
                </div>  

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={rstudio} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>R Studio</h3>
                    </div>
                </div>
                </div>  

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Neo4j} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Neo4j</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Firebase} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Firebase</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Tableau} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tableau</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Redux} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Redux</h3>
                    </div>
                </div>
                </div>
                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Github} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Github</h3>
                    </div>
                </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 jusitfy-center items-center'>
                    <div className='m-auto'>
                        <Image src={Gitlab} width='64px' height='64px' alt="/"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Gitlab</h3>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills