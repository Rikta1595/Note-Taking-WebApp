import React, { useState } from 'react'
import plusicon from '../../assets/plus.png'
import './Sidebar.css';

export default function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"]
  const [listOpen, setListOpen] = useState(false)

  return (
    <div className='sidebar'>
      <img src={plusicon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar-list ${listOpen ? "sidebar-list_active" : ""}`}>
        {
          colors.map((item, index) => 
            <li key={index} className='sidebar-list_item' style={{backgroundColor: item}} onClick={()=>props.addNote(item)}></li>
          )
        }
      </ul>
    </div>
  )
}
