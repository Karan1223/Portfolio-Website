import React from 'react'
import RedditS4 from '../public/assets/Projects/RedditS4.png'
import CustomerMS from '../public/assets/Projects/CMS.jpg'
import EzRecipe from '../public/assets/Projects/EzRecipe.png'
import Java from '../public/assets/Projects/JavaStaffMS.png'
import Node from '../public/assets/Projects/NodeProject.png'
import ProjectItems from './ProjectItems'
import HMS from '../public/assets/Projects/HMS.png'
import Product from '../public/assets/Projects/ProductRS.jpg'
import ML from '../public/assets/Projects/ML.jpg'
import Dl from '../public/assets/Projects/DL.png'
import ShopLenses from '../public/assets/Projects/ShopLenses.png'
import HeartAttck from '../public/assets/Projects/HeartAttack.jpg'
import Tasklist from '../public/assets/Projects/Tasklist.jpeg'
import Netflix from '../public/assets/Projects/netflix.webp'
import ProjectDemo from './ProjectsDemo'
import BI from '../public/assets/Projects/BI.webp'
import BDHS from '../public/assets/Projects/BDHS.jpeg'
import QuizApp from '../public/assets/Projects/Quiz-App.png'
import Spotify from '../public/assets/Projects/Spotify.jpeg'
import ProjectLink from './ProjectsLink'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5b4e4e]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectLink 
            title="Quiz App." 
            img={QuizApp} url="https://github.com/Karan1223/Quiz-App-Angular"
            demo="https://github.com/Karan1223/Quiz-App-Spring"
            description="Angular, Spring Boot, PostgreSQL, TypeScript, pgAdmin 4." 
            />

            <ProjectItems 
            title="Tasklist App." 
            img={Tasklist} url="https://github.com/Karan1223/Tasklist-React"
            description="React, TypeScript." 
            />

           <ProjectDemo
            title="MovieFlix." 
            img={Netflix} demo="https://moviieeflix.netlify.app/"
            url="https://github.com/Karan1223/Netflix-Clone"
            description="React, MERN Stack, Firebase, Redux." 
            />

            <ProjectDemo
            title="MovieFlix." 
            img={Netflix} demo="https://movie-flix-angular.vercel.app/"
            url="https://github.com/Karan1223/MovieFlix-Angular"
            description="Angular, MEAN Stack, Firebase, Redux." 
            />

            <ProjectDemo 
            title="ShipWreck API." 
            img={Node} demo="https://silly-teal-elk.cyclic.app/api/profile/Step3data"
            url="https://github.com/Karan1223/Node-Express-Mongo-Project"
            description="NodeJS, Express, MongoDB, RestAPI" 
            />
            
            <ProjectItems 
            title="GroveifyBondingThroughRhythms." img={Spotify} url="https://github.com/Karan1223/GroveifyBondingThroughRhythms"
            description="Angular, NodeJS, Spotify-Web-Api"
               
            />

            <ProjectItems 
            title="Reddit Search." img={RedditS4} url="https://github.com/Karan1223/Reddit-Search-"
            description="HTML, CSS, JS, Bootstrap, XML, XSLT, JQuery, AJAX, Pushshift API."    
            />
            
            <ProjectItems 
            title="ShopLenses" img={ShopLenses} url="https://github.com/Karan1223/PHP-MYSQL-Product-Review-System"
            description="HTML, CSS, PHP, MYSQL."    
            />

          <ProjectItems 
            title="HighSchool Prediction Big Data." img={BDHS} 
            url="https://github.com/Karan1223/HighSchool-Prediction-BigData"
            description="HDFS, Hive, HBase, Zeeplin Notebook."
            />

          <ProjectItems 
            title="Enhanced RNN for Time-Series Prediction." img={Dl} 
            url="https://github.com/Karan1223/Enhanced-RNN-for-Time-Series-Prediction"
            description="Python, Jupyter, RNN, Pandas, Sklearn, Numpy, Torch."
            />
           
            <ProjectItems 
            title="Road-Safety-Trends-GTA." img={BI} 
            url="https://github.com/Karan1223/Road-Safety-Trends-GTA"
            description="Tableau."
            />
            
            <ProjectItems 
            title="Higher Study prediction model." img={ML} 
            url="https://github.com/Karan1223/ML-HighSchoolPrediction-Model"
            description="Python, Matplotlib, Seaborn, Pandas, Numpy, Scikit-Learn."
            />

            <ProjectItems 
            title="Heart Attack Prediction." img={HeartAttck} 
            url="https://github.com/Karan1223/HeartAttack-Prediction-Model-BigData"
            description="R Studio, GGPLOT, DPLYR."
            />

            <ProjectItems 
            title="Staff Management System." img={Java} url="https://github.com/Karan1223/JDBC-CRUD-Projects"
            description="Core Java, JDBC, Java Swing, Java Awt, Oracle RDBMS."    
            />

          <ProjectItems 
            title="Hospital Management System." img={HMS} url="https://github.com/Karan1223/Hospital-Management-System"
            description="C#, .NET, Data Structures and Design Patterns."
            />

            <ProjectItems 
            title="Product Review System." img={Product} url="https://github.com/Karan1223/Product-Review-System-PHP-MVC"
            description="PHP, CodeIgniter 4, MVC, MySQL."
            />

             
            <ProjectItems 
            title="EzRezipe" img={EzRecipe} url="https://github.com/Karan1223/Ez-Recipe"
            description="SWIFT, Core Data. IOS Mobile App."   
            />

            <ProjectItems 
            title="Customer Management System." img={CustomerMS} url="https://github.com/Karan1223/Customer-Management-System-CSharp"
             description="C#, SQL Server, .NET."   
            />
            </div>
        </div>

    </div>
  )
}

export default Projects