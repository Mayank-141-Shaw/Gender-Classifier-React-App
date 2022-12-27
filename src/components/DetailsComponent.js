import React, { useState } from 'react'
import styled from 'styled-components';
import {BsAlarm} from 'react-icons/bs'
import defUserImg from '../assets/default-user.png'

function DetailsComponent(user) {

    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    }

    const DetailBox = styled.div`
        width : auto;
        height : fit-content;
        border-radius : 10px;
        background-color : white;
        display : flex;
        flex-direction : row;
        align-content: center;
        align-items: center;
    `;

    const ProfileImageContainer = styled.div`
        display : flex;
        align-content : center;
        justify-content : center;
        padding : 1rem;
        flex-grow : 0;
    `;

    const ProfileImage = styled.img`
        width : 50px;
        border-radius : 50%;
    `;

    const ActionContainer = styled.div`
        display : flex;
        align-content : center;
        justify-content : center;
        padding : 1rem;
        flex-grow : 0;
    `;

    const ActionButton = styled.button`
        width : 2rem; 
        height : 2rem; 
        padding : auto;
        border-radius : 50%;
    `;

    const InfoBox = styled.div`
        font-size : 1rem; 
        display : flex; 
        flex-direction : column; 
        flex-grow : 3; 
        align-items : flex-start;
        font-family : arial;
    `;
    
  return (
    <>
        {
            isOpen ? 
            <DetailBox onClick={toggle}>Open</DetailBox>
            :
            <DetailBox onClick={toggle}>
                <ProfileImageContainer>
                    <ProfileImage src={ user.user.img ? user.user.img : defUserImg} />
                </ProfileImageContainer>
                
                <InfoBox>
                    <span style={{color:'gray', fontSize:'0.75rem'}}>{user.user.company}</span>
                    <span style={{paddingBottom:'0.2rem',color:'black', fontWeight:'900'}}>{user.user.name}</span>
                    <span style={{color:'black', fontSize:'0.8rem', fontWeight:'500'}}>{user.user.email}</span>
                </InfoBox>

                <ActionContainer>
                    <ActionButton>
                        <BsAlarm />
                    </ActionButton>
                </ActionContainer>
            </DetailBox>
        }
    </>
  )
}

export default DetailsComponent