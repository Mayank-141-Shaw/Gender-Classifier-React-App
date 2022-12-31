import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { TiUserAdd } from 'react-icons/ti'
import DetailsComponent from './DetailsComponent';
import Navbar from './Navbar';

function HomeComponent() {

  const AddUserButton = styled.div`
    position : fixed;
    bottom : 0px;
    right : 10px;
    display: flex;
    flex-direction:row;
    align-items : center;

  `;
  
  const Background = styled.div`
    width : inherit;
    padding : 1rem;
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
              fontSize:'3rem'
            }} >

            <TiUserAdd 
              style={{
                textAlign:'center',
                color:'white',
                backgroundColor:'orange',
                borderRadius:'50%',
                padding:'1rem'
              }} 
              size={'1em'}
            />

          </NavLink>
        </AddUserButton>

      </Background>

    </>
  )
}

export default HomeComponent