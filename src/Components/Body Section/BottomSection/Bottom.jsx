import React,{useState} from 'react'
import './bottom.css'

import Chart from "react-apexcharts"

import img from '../../../Assets/laptop.jpg'

const Bottom = () => {

  const [state, setState] = useState ({
    options: {
      colors: ['#01565B', '#5ABA8A'],
      chart :{
        id: 'basic-bar',
        toolbar:{
          show: true,
        },
      },

      xaxis:{
        categories:['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
      }


    },

    series: [
      {
        name: 'Updates', 
        data: [25, 33, 13, 89, 34, 20, 30]
      },
      {
        name: 'New Tasks', 
        data: [70, 47, 72, 45, 12, 59, 38]
      }
    ]
  })
 

  return (
    <div className='bottom flex'>
      <div className = "graphDiv">
        <span className="title"> All Activities (Graphical View) </span>

        <Chart
        options={state.options}
        series={state.series}
        type='area'
        width='500'
        />
      </div>

      <div className="scheduleDiv">
        <span className="title">Upcoming Schedule</span>

        <div className="singleTask flex">
          <div className="imgDiv flex">
            <img src={img} alt="Task Image" />
          </div>
          <div className="taskInfo">
            <span className="task">Desk Time Redesign</span>
            <span className="span status">Working On</span>
          </div>
          <span classname="time">09:30 AM</span>
        </div>
      </div>

    </div>
  )
}

export default Bottom