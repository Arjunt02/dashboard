import React, { useState } from 'react'
import './Card.css'
import { ArrowRight, Mail, UploadCloud, User } from 'feather-icons-react/build/IconComponents'
import { Col, Row } from 'react-bootstrap'



function Card() {

  const [action, setAction] = useState("")


  return (
    <>

      <div className='heading'>
        <h2>Choose a plan that's just right for you !</h2>
        <div className='btn'>
          <button className={action === 'Monthly' ? 'btn1' : 'btn1 gray'} onClick={() => { setAction("Monthly") }}>Monthly</button>
          <button className={action === 'Annually' ? 'btn2' : 'btn2 gray'} onClick={() => { setAction("Annually") }}>Annually</button>
        </div>

      </div>

      <div className='cards'>
        <div className='card'>
          <h2>Basic</h2>
          <h2 className='price'>$ 9.99/mo</h2>
          <button>Get Started<ArrowRight /></button>
          <div className='line'></div>
          <p>what you'll get:</p>
          <p><User />Upto 25 Users</p>
          <p><UploadCloud />Upto 25gb Storage</p>
          <p><Mail />Email Support</p>
          <a href="#">EXPLORE FEATURES</a>
        </div>

        <div className='card'>
          <h2>Standard</h2>
          <h2 className='price'>$ 9.99/mo</h2>
          <button>Get Started<ArrowRight /></button>
          <div className='line'></div>
          <p>what you'll get:</p>
          <p><User />Upto 25 Users</p>
          <p><UploadCloud />Upto 25gb Storage</p>
          <p><Mail />Email Support</p>
          <a href="#">EXPLORE FEATURES</a>
        </div>

        <div className='card'>
          <h2>Premium</h2>
          <h2 className='price'>$ 9.99/mo</h2>
          <button>Get Started<ArrowRight /></button>
          <div className='line'></div>
          <p>what you'll get:</p>
          <p><User />Upto 25 Users</p>
          <p><UploadCloud />Upto 25gb Storage</p>
          <p><Mail />Email Support</p>
          <a href="#">EXPLORE FEATURES</a>
        </div>

      </div>

      <div className="last-cards">

        <div className="card2">
          <div>
            <span>Free Forever</span>
            <h1>Free Starter</h1>
            <p>The quickest and easiest way to try protocols 
              <br />with basic functionalities</p>
            <button>Get Started</button>
          </div>
          <div>
            <p>what you'll get:</p>
            <p><User />Upto 25 Users</p>
            <p><UploadCloud />Upto 25gb Storage</p>
            <p><Mail />Email Support</p>
            {/* <div>Basic of Documents,Task Flow, Voting,Accounting,Banking,Notes,Investor,
              Director and Team management included</div> */}
          </div>
        </div>


        <div className="card2">
          <div>
            <span>Let's Connect</span>
            <h1>Enterprise Plan</h1>
            <p>Effortlessly customize and fine-tune <br /> services as your needs shift,ensuring <br /> the perfect tools for success</p>
            <button>Contact Us</button>
          </div>
          <div>
            <p>what you'll get:</p>
            <div><User />More than 75 Users</div>
            <div>Customization of all other features</div>
          </div>
        </div>

      </div>



    </>
  )
}

export default Card