import React from 'react'

function Navbar() {
  return (
    <>
        <header style={{
            display : 'flex',
            flexDirection : 'row',
            backgroundColor : 'lightblue',
            justifyContent : 'center',
            alignItems : 'center',
            fontSize : '1.5rem',
            position : 'fixed',
            top : '0',
            width : '100%',
            margin : 'auto auto 1.5rem auto'
        }}>
            PROFILER    
        </header>
    </>
  )
}

export default Navbar