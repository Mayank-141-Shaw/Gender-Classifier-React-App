import React, { useState } from 'react'
import styled from 'styled-components';

function DetailsComponent() {

    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen)
    }

    const DetailBox = styled.div`
        width : auto;
        height : fit-content;
        border-radius : 10px;
        background-color : pink;
        margin : 0% 5% 5% 5%;
    `;

  return (
    <>
        {
            isOpen ? 
            <DetailBox onClick={toggle}>Open</DetailBox>
            :
            <DetailBox onClick={toggle}>Closed</DetailBox>
        }
    </>
  )
}

export default DetailsComponent