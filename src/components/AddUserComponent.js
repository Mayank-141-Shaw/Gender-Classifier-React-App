import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import defUserImg from '../assets/default-user.png'

function AddUserComponent() {

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/')
  }




  const background = {
    width : 'inherit',  
    textAlign : 'center',
    backgroundColor : 'white',
    fontSize : '1rem',
    fontWeight : '600'
  }

  const addUserForm = {
    display : 'flex',
    flexDirection : 'column',
    alignContent : 'center',
    alignItems : 'center'
  }

  const inputBox = {
    width : '70%',
    border : '2px solid #808080',
    borderRadius : '5px',
    padding : '0.75rem 1.5rem',
    alignSelf : 'center',
    margin : '1rem 0'
  }

  const subDiv = {
    display : 'flex',
    width:'90%',
    padding : '0.2rem 1rem',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignContent : 'center',
    alignItems : 'center'
  }

  const subDivLabel = {
    textAlign : 'left',
  }

  const subInputs = {
    border : 'none',
    width: '50vw',
    textAlign : 'right',
    outline : 'none',
    padding : '0.5rem',
  }

  const submitBtn = {
    backgroundColor:'#f9b313', 
    color:'white', 
    border:'none',
    padding : '0.5rem 1.5rem',
    width : '40vw',
    margin : '2rem 0'
  }



  return (
    <div style={background}>

      <form style={addUserForm} onSubmit={handleSubmit}>
        
        <label for='profileImg'>
          <img 
            style={{
              width:'50vw',
              borderRadius:'50%',
              boxShadow:'0 0 20px 1px #f0f0f0',
              margin:'2rem 0'
            }}
            src={inputs.profileImg || defUserImg}
          />
          <input
            style={{visibility : 'hidden', width:0, height:0}}
            id="profileImg"
            name="profileImg"
            type={'file'}
            value={inputs.profileImg}
            onChange={handleChange}
          />
        </label>

        <input 
          type="text" 
          name="username" 
          id='username'
          placeholder='Fullname'
          style={inputBox}
          value={inputs.username || ""} 
          onChange={handleChange}
        />

        <hr style={{width:'99vw'}}/>

        <div style={subDiv}>
          <label style={subDivLabel}>Age</label>
          <input 
            type="number" 
            name="age" 
            placeholder={'Enter age'}
            style={subInputs}
            value={inputs.age || ""} 
            onChange={handleChange}
          />
        </div>

        <hr style={{width:'99vw'}}/>

        <div style={subDiv}>
          <label style={subDivLabel}>Gender</label>
          <input 
            type="text" 
            name="gender" 
            placeholder={'Enter gender'}
            style={subInputs}
            value={inputs.gender || ""} 
            onChange={handleChange}
          />
        </div>

        <hr style={{width:'99vw'}}/>

        <div style={subDiv}>
          <label style={subDivLabel}>City</label>
          <input 
            type="text" 
            name="city" 
            placeholder={'Enter city'}
            style={subInputs}
            value={inputs.city || ""} 
            onChange={handleChange}
          />
        </div>

        <hr style={{width:'99vw'}}/>

        <div style={subDiv}>
          <label style={subDivLabel}>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder={'Enter email'}
            style={subInputs}
            value={inputs.email || ""} 
            onChange={handleChange}
          />
        </div>

        <hr style={{width:'99vw'}}/>
        
        <div style={subDiv}>
          <label style={subDivLabel}>Job Role</label>
          <input 
            type="text" 
            name="job" 
            placeholder={'Enter job role'}
            style={subInputs}
            value={inputs.job || ""} 
            onChange={handleChange}
          />
        </div>

        <hr style={{width:'99vw'}}/>

        <div style={subDiv}>
          <label style={subDivLabel}>Company</label>
          <input 
            type="text" 
            name="company" 
            placeholder={'Enter company'}
            style={subInputs}
            value={inputs.company || ""} 
            onChange={handleChange}
          />
        </div>

        <hr style={{width:'99vw'}}/>

        <input style={submitBtn} type="submit" />
      </form>
      
    </div>
  )
}

export default AddUserComponent