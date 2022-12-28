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
        border-radius : 20px;
        background-color : white;
        display : flex;
        flex-direction : row;
        align-content: center;
        align-items: center;
        color : black;
        font-size : 1rem;
        margin : 0 0 1rem 0;
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
        // background-color : #fe2a5c;
        background-color : lightgrey;
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
            <DetailBox style={{flexDirection:'column'}} onClick={toggle}>
                <ProfileImageContainer>
                    <ProfileImage 
                        style={{width:'50vw'}} 
                        src={ user.user.img ? user.user.img : defUserImg} 
                    />
                </ProfileImageContainer>

                <span style={{fontSize:'1.3rem'}}>
                    {user.user.name}
                </span>
                <span style={{fontSize:'1rem', fontWeight:'500', color:'#829db5'}}>
                    {user.user.city}, {user.user.age} y.o
                </span>

                <div style={{
                    backgroundColor:'#183980',
                    color : 'white',
                    borderRadius : '20px',
                    width : '92.4%',
                    display : 'flex',
                    flexDirection : 'column',
                    padding:'2rem 1rem',
                    marginTop:'1rem'
                }}>
                    <span style={{textAlign:'left', fontSize:'1.2rem'}}>{user.user.job}</span>
                    <span style={{textAlign:'left', fontSize:'0.9rem'}}>{user.user.company}</span>

                    <hr style={{width:'100%', height:'1px', margin:'2rem 0', backgroundColor:'lightgrey', border:'none'}} />

                    <div style={{padding:'0.25rem', display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'cneter'}}>
                        <span style={{color:'#8091b9', fontWeight:'400'}} >Gender</span>
                        <span style={{fontWeight:'500'}}>{user.user.gender}</span>
                    </div>

                    <div style={{padding:'0.25rem', display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'cneter'}}>
                        <span style={{color:'#8091b9', fontWeight:'400'}} >Age</span>
                        <span style={{fontWeight:'500'}}>{user.user.age}</span>
                    </div>

                    <div style={{padding:'0.25rem', display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'cneter'}}>
                        <span style={{color:'#8091b9', fontWeight:'400'}} >Address</span>
                        <span style={{fontWeight:'500'}}>{user.user.city}</span>
                    </div>

                    <div style={{padding:'0.25rem', display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'cneter'}}>
                        <span style={{color:'#8091b9', fontWeight:'400'}} >Email</span>
                        <span style={{fontWeight:'500'}}>{user.user.email}</span>
                    </div>

                    <div style={{padding:'2rem 0.25rem', display:'flex', flexDirection:'row', justifyContent:'space-around', alignContent:'cneter'}}>
                        <buttton style={{
                            backgroundColor:'#f9b313', 
                            color:'white', 
                            border:'none',
                            padding : '0.5rem 1.5rem',
                            width : '5rem'
                        }}>EDIT</buttton>
                        <buttton style={{
                            backgroundColor:'#f9b313', 
                            color:'white', 
                            border:'none',
                            padding : '0.5rem 1.5rem',
                            width : '5rem'
                        }}>DELETE</buttton>
                    </div>
                </div>
                
            </DetailBox>
            :
            <DetailBox onClick={toggle}>
                <ProfileImageContainer>
                    <ProfileImage src={ user.user.img ? user.user.img : defUserImg} />
                </ProfileImageContainer>
                
                <InfoBox>
                    <span style={{color:'gray', fontSize:'0.75rem'}}>
                        {user.user.company}
                    </span>
                    <span style={{paddingBottom:'0.2rem',color:'black', fontWeight:'900'}}>
                        {user.user.name}
                    </span>
                    <span style={{color:'black', fontSize:'0.8rem', fontWeight:'500'}}>
                        {user.user.email}
                    </span>
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