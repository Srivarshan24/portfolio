import React, { useState } from 'react'
import './ModelBox.css';
 function ModelBox() {
    const [Model,setModel]=useState(false)
    return (
    <center>
    <>
    <div>ModelBox</div>
    {Model ? <div className='Model'>
      <span>Are you sure, Do you want to continue?</span>
      <br/>
      <button  onClick={()=>setModel(false)} className='confirm'>OK</button>
      </div> : ""
    }
    <div>
    <button onClick={()=>setModel(true)} className='confirm'>confirm</button>
    </div></><center/>
    <div className='overlay'>
      <div className='popup'>
        <button className='xButton'>x</button>
        <img className='img' src={"C:\Users\sriva\react\mern\src\Asset\mern img.jpeg"} width={"100px"} height={"100px"}/>
        <h>Secure all your devices</h>
        <p>Ensure your mobile phone, Laptop and other<br></br> devices are protected online</p>
        <button className='previous'>Purchase premium</button>
      </div>
    </div>
    </center>
  )
}
export default ModelBox