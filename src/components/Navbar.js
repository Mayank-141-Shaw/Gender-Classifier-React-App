import React from 'react'

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
            PROFILER    
        </nav>
    </>
  )
}

export default Navbar