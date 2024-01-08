import React from 'react'
import './Sidebar.css'
import { BarChart2, Framer, Home, LogOut, MessageSquare, PieChart } from 'feather-icons-react/build/IconComponents'




function Sidebar() {
    return (
        <>

            <div className='sidebar'>

                <div className='profile'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s" alt="" />
                    <h3>ARJUN</h3>
                    <h4>arjun@gmail.com</h4>
                </div>

                <ul className='menu-links'>

                    <li>
                       <div className='icon'><Home/></div>
                       <p> Dashboard</p>
                    </li>

                    <li>
                       <div className='icon'> <BarChart2/></div>
                        <p>Perks</p>
                    </li>

                    <li>
                        <div className='icon'><Framer/></div>
                       <p> Addons</p>
                    </li>

                    <li>
                        <div className='icon'><PieChart/></div>
                        <p>FAQ</p>
                    </li>

                    <li>
                        <div className='icon'><MessageSquare/></div>
                        <p>Support</p>
                    </li>

                </ul>


                <div className='logout'>
                    <h3>Logout</h3>
                    <span><LogOut/></span>
                </div>
               

            </div>


        </>
    )
}

export default Sidebar