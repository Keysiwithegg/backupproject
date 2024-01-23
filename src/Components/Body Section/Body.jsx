import React from 'react'
import './body.css'

// Import the insection components ----->
import Top from './TopSection/Top'
import Bottom from './BottomSection/Bottom'

const Body = () => {
  return (
    <div className='body'> 
      <Top/>
      <Bottom/>
    </div>
  )
}

export default Body