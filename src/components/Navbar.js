import React from 'react'
import { MdHomeFilled } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav style={{
            display : 'flex',
            flexDirection : 'row',
            backgroundColor : 'lightblue',
            justifyContent : 'center',
            alignItems : 'center',
            fontSize : '1.5rem',
            position : 'sticky',
            top : '0',
            width : 'inherit',
            padding : '0.75rem 0.2rem',
        }}>
            <span style={{textAlign:'center'}}>PROFILER</span>    
        </nav>
    </>
  )
}

export default Navbar