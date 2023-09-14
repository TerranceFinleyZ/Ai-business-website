import React from 'react'
import './GetStarted.css';
import { AiOutlineInstagram } from "react-icons/ai";



function GetStarted() {
  return (
    <div className="getstarted">
      <h4>Get-Started</h4>
      <p>You have spent thousands of hours generating AI art, but you’re still the only living soul to see your creations.
         Maybe it’s time to think about selling your AI art. Start making passive income, I will show you how to start selling your AI-generated art and highlight some of the best strategy and tactics to sell your AI art succesfuly. Novice or Adroit the information I have may just be exactly what your looking for to achive your Goals.
      </p>
      <div className='card-container'>
                <div className='card'>
                    <h5>- Novice -</h5>
                    <span className='bar'></span>
                    <p className='btc'>$35 USD</p>
                    <p>- 5 Days -</p>
                    <p>- PDF -</p>
                    <p>- shares -</p>
                    <p>- Trainning -</p>
                    
                </div>
                <div className='card'>
                    <h5>- Adroit -</h5>
                    <span className='bar'></span>
                    <p className='btc'>$50 USD</p>
                    <p>- 2 Months -</p>
                    <p>- PDF -</p>
                    <p>- Sponsership -</p>
                    <p>- Buisness -</p>
                    
                </div>
                <div className='card'>
                    <h5>- Executive -</h5>
                    <span className='bar'></span>
                    <p className='btc'>Not avaluable</p> 
                    <p>- invite only -</p>
                    <p>- Members only -</p>
                    <span className='bar'></span>
                </div>
            </div>

            <p>DM me ASAP to get started</p>
            <a href="https://www.instagram.com/imperialartz3/"
            rel='noopener' target='_blank'
            >
            
            <h6><AiOutlineInstagram/></h6>
            </a>
      </div>
    
  )
}

export default GetStarted
