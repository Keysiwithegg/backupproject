import React from 'react'
import './sidebar.css'

// Import Images --------------->
import azerux from '../../Assets/azerux.jpg'

// Importerd Icons ------------>
import {AiOutlinePieChart} from 'react-icons/ai'
import {BsCalendarDateFill} from 'react-icons/bs'
import {BsFolderSymlinkFill } from 'react-icons/bs'
import {FiBatteryCharging } from 'react-icons/fi'
import {BsChatDotsFill } from 'react-icons/bs'
import {GiComputerFan } from 'react-icons/gi'
import {GiSettingsKnobs } from 'react-icons/gi'



const Sidebar = () => {
  return (
    <div className='sideBar'> 

      <div className='logoDiv flex'>
        <img src={azerux} alt="Logo Image"/> 
      </div>

      <div className="menu">
        <ul className="navItem">

          <li className="navList">
          <AiOutlinePieChart className="icon"/>
          </li>

          <li className="navList">
          <BsCalendarDateFill className="icon"/>
          </li>

          <li className="navList">
          <BsFolderSymlinkFill  className="icon"/>
          </li>

          <li className="navList">
          <FiBatteryCharging  className="icon"/>
          </li>

          <li className="navList">
          <BsChatDotsFill  className="icon"/>
          </li>

          <li className="navList">
          <GiComputerFan  className="icon"/>
          </li>

          <li className="navList">
          <GiSettingsKnobs  className="icon"/>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar
