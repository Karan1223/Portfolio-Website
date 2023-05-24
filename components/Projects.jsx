import React from 'react'
import Image from 'next/image'
import RedditS4 from '../public/assets/Projects/RedditS4.png'
import BigData from '../public/assets/Projects/BigData.png'
import CustomerMS from '../public/assets/Projects/CMS.png'
import EzRecipe from '../public/assets/Projects/EzRecipe.png'
import Java from '../public/assets/Projects/JavaStaffMS.png'
import Node from '../public/assets/Projects/NodeProject.png'
import RedditS2 from '../public/assets/Projects/RedditS2.png'
import Link from 'next/link'
import ProjectItems from './ProjectItems'
import HMS from '../public/assets/Projects/HMS.png'
import Product from '../public/assets/Projects/ProductRS.jpg'
import ML from '../public/assets/Projects/ML.jpg'
import ShopLenses from '../public/assets/Projects/ShopLenses.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItems 
            title="NodeJs App to manipulate ShipWreck Data." 
            img={Node} url="https://silly-teal-elk.cyclic.app/api/profile/Step3data"
            description="NodeJS Express Mongo" 
            />
            

            <ProjectItems 
            title="Reddit Search using Pushshift API" img={RedditS4} url="https://github.com/Karan1223/Reddit-Search-"
            description="HTML, CSS, JavaScript, Bootstrap, XML, XSLT, JQuery, AJAX, Pushshift API."    
            />
            
            <ProjectItems 
            title="ShopLenses" img={ShopLenses} url="https://github.com/Karan1223/PHP-MYSQL-Product-Review-System"
            description="HTML, CSS, PHP, MYSQL."    
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
            title="Higher Study prediction model.(Machine Learning)" img={ML} 
            url="https://github.com/Karan1223/ML-HighSchoolPrediction-Model"
            description="Python, Matplotlib, Seaborn, Pandas, Numpy, Scikit-Learn."
            />
            
            <ProjectItems 
            title="Staff Management System." img={Java} url="https://github.com/Karan1223/JDBC-CRUD-Projects"
            description="Core Java, JDBC, Java Swing, Java Awt, Oracle RDBMS."    
            />
            
            <ProjectItems 
            title="Customer Management System." img={CustomerMS} url="https://github.com/Karan1223/Customer-Management-System-CSharp"
             description="C#, SQL Server, .NET."   
            />
             
            <ProjectItems 
            title="EzRecipe" img={EzRecipe} url="https://github.com/Karan1223/Ez-Recipe"
            description="SWIFT, Core Data. IOS Mobile App."   
            />
            </div>
        </div>

    </div>
  )
}

export default Projects