import React from 'react'
import './account.css'

import {BiChevronRight, BiEdit} from 'react-icons/bi'
import {BsThreeDots} from 'react-icons/bs'


import user from '../../Assets/azerux.jpg'

const Account = () => {
  return (
    <div className='account'> 
    <div className="icons flex">
      <BiChevronRight className="icon"/>
      <BsThreeDots className="icon"/>
    </div>

    <div className="accountDetails">
      <div className="imageDiv">
        <img src={user} alt="account user image" />
        <span className="name">Cleo Alcanzo</span>
        <span className="position">Student</span>
        <button className="btn flex">
          <BiEdit classname="icon"/>
          Edit Profile
        </button>
      </div>

      <div className="hoursDiv">
        <span className="title">Working Hours</span>
        <div className="hoursCard flex">

          <div className="right bg">
            <span>Work Starts</span>
            <h6>8:00 am</h6>
          </div>

          <div className="left noBg">
            <span>Work Ends</span>
            <h6>5:00 pm</h6>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Account