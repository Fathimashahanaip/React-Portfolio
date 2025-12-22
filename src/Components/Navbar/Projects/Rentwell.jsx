import React from 'react'
import rent1 from '../../../assets/Rentwell.png'
import rent2 from '../../../assets/rentwell1.png'
import rent3 from '../../../assets/rent.png'


import './Rentwell.css'

const Rentwell = () => {
  return (
    <div className='rent-well' id='rent'>
        <div className="rent-well_head">
            <h1>RENT-WELL</h1>
            </div>
            <div className="rent-overview">
                <u>
                <h2>Project Overview</h2></u>
                <p>
                The Online Rental Management System is a web-based platform designed to simplify dress rentals.The owner
                 can sell the product and The customers can rent the Product and make payment through the website.
                </p>
                
            </div>
            <div className="rent-key">
                <u>
                <h2>Key Features</h2></u>
                
                    <li>Upload product, Delete Product, and proceed to purchase(Owner)</li><br></br>
                    <li>View Products, Search Products, Add to Cart, and Payment(Customer)</li>
                
            </div>
            <div className="rent-tech">
                <u>
                <h2> Technologies Used</h2></u>
                
                    <li>FrondEnd:Python-Flask</li><br/>
                    <li>BackEnd:MySQL</li>
                
              
            </div>
            <div>
                <h2></h2>
            </div>

            <div className="imgh2">
                <u>
                <h2>Images</h2></u>
            </div>
            <div className="img">
               
               
                <div className="img1">
                    <img src={rent1} alt=""width={350} height={150}/>
                    </div>
                    <div className="img1">
                        <img src={rent2} alt=""width={350} height={150} />

                    </div>
                   <div className="img1">
                        <img src={rent3} alt=""width={350} height={150}/>

                    </div> 

                
              
            </div>


            <div className='link'>
                
           <div className='link-git'>   <h4>GitHub :</h4>  </div>
            <div className='link-git'> <a href="https://github.com/Fathimashahanaip/s4_project/tree/main">https://github.com/Fathimashahanaip/s4_project/tree/main</a>
            </div> 
            </div>


            </div>


   
  )
}

export default Rentwell