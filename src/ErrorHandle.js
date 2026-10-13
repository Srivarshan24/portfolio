import React, { useState } from 'react'

function ErrorHandle({data}) {
    console.log(data)
    const [value,setValue]=useState({
        name:"",
        email:"",
        mobile:""
    })
    const [error,setError]=useState({
        nameError:"",
        emailError:"",
        mobileError:""
    })
        
    
    function change(event){
        setValue({
            ...value,
            [event.target.name]:event.target.value
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        if(value.name==""){
            setError({
                ...error,
                nameError:"field is required"
            })
        }
        else if(value.name.length<3){
            alert("name should be more than 3 letters")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="Name" placeholder='Name' name="name" onChange={change}/><br/>
            <span style={{color:"red"}}>{error.nameError}</span><br/>
            <input type="email" placeholder='email' name="email" onChange={change}/><br/>
            <input type="number" placeholder='mobile' name="mobile" onChange={change}/>  <br/>
            <button type='submit'>submit</button> 
        </form> 
    </div>
  )
}

export default ErrorHandle