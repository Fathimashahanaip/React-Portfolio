import React from 'react'
import './Quickration.css'
import ration1 from '../../../assets/quickration.png'
import ration2 from '../../../assets/ration2.png'
import ration3 from '../../../assets/raa.png'




const Quickration = () => {
  return (
    <div>
        <div className='quick-ration' id='ration'>
                <div className="ration_head">
                    <h1>QUICK-RATION</h1>
                    </div>
                    <div className="ration-overview">
                        <u>
                        <h2>Project Overview</h2></u>
                        <p>
                        The E-Ration Shop website is an online platform designed to digitize the ration distribution system. 
                        It enables users to check the ration availability and make orders for their ration.
                        
                        </p>
                        <p>
                        The Indian Government distributes food for the poor people who have valid ration cards .
                         this manual system faces problems that clients want to wait in a long queue for or their turn, which is time-consuming. 
This web application “Quick Ration” will help customers to order available items online and do payments online. The shopper will approve or reject these items on the basis of availability of products. then inform customers whether the items are packed or not. if it is approved customer will collect the product when the scheduled time.

                            </p>                        
                    </div>
                    <div className="ration-key">
                        <u>
                        <h2>Key Features</h2></u>
                        
                            <li>Seller can Manage products and  view payments </li>
                            <li>Customer can Order Products,and Pay the bill</li>
                            <li>Multiple customers can place an order at the same time.                            </li>
                            <li>This is very easy to use for customers and sellers.      </li>
                        
                    </div>
                    <div className="ration-tech">
                        <u>
                        <h2> Technologies Used</h2></u>
                        
                            <li>FrondEnd:HTML, CSS, JavaScript, Python-Django</li><br/>
                            <li>BackEnd:MySQL</li>
                        
                      
                    </div>
                    <div>
                        <h2></h2>
                    </div>

                    <div className="ration-imgh2">
                        <u>
                        <h2>Images</h2></u>
                    </div>
                    <div className="ration-img">
                       
                       
                        <div className="ration-img1">
                            <img src={ration2} alt=""width={350} height={150}/>
                            </div>
                            <div className="ration-img1">
                                <img src={ration1} alt=""width={350} height={150} />
        
                            </div>
                            <div className="ration-img1">
                                <img src={ration3} alt=""width={350} height={150} />
        
                            </div>
        
                        
                      
                    </div>


                    <div className='rlink'>
                        
                        <div className='rlink-git'>   <h4>GitHub :</h4>  </div>
                         <div className='rlink-git'> <a href="https://github.com/Fathimashahanaip/Mini_Project">https://github.com/Fathimashahanaip/Mini_Project</a>
                         </div> 
                         </div>
        
        
        
                    </div>
        
        
    </div>
  )
}

export default Quickration