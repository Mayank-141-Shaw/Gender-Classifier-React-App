import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { MdAddCircle } from 'react-icons/md'
import DetailsComponent from './DetailsComponent';
import Navbar from './Navbar';

function HomeComponent() {

  const AddUserButton = styled.div`
    position : fixed;
    bottom : 10px;
    right : 10px;
    font-size : 3rem;
  `;
  
  const Background = styled.div`
    padding : auto;
    text-align : center;
    background-color : grey;
  `;

  let users = [
    {
      'name':'Mayank Kumar Shaw',
      'job':'Full Stack ML Developer',
      'email':'mayank141shaw@gmail.com',
      'company':'Google',
      'city':'Kolkata',
      'age':'22',
      'gender':'M'
    },
    {
      'name':'Mayank Kumar Shaw',
      'job':'Full Stack ML Developer',
      'email':'mayank141shaw@gmail.com',
      'company':'Google',
      'city':'Kolkata',
      'age':'22',
      'gender':'M'
    }
  ]

  return (
    <>

      <Background>

        {
          users.map( user => <><DetailsComponent user={user}/><DetailsComponent user={user}/><DetailsComponent user={user}/><DetailsComponent user={user}/><DetailsComponent user={user}/><DetailsComponent user={user}/></> )
        }

        <AddUserButton>
          <NavLink to={"/add"} 
            style={{
              textDecoration:'none', 
              color:'blue'
            }} >

            <MdAddCircle 
              style={{
                verticalAlign:'middle'
              }} 
              size={'2em'}
            />

          </NavLink>
        </AddUserButton>

      </Background>

    </>
  )
}

export default HomeComponent