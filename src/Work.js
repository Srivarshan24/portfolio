import {React,useEffect,useState} from 'react'
import './Work.css';

const Work=()=> {
    const [theme,setTheme]=useState(0)
    const [change,setChange]=useState(0)
    const [count,setCount]=useState(0)
    const rng={
        padding:"10px",
        width:"20%",
        borderRadius:"20px",
        backgroundColor: "green",
        color:"white",
        border:"none",
        margin:"5px",
        cursor:"pointer"
    }
    function inc(){
   
        setTheme(!theme)
     }
     
    return(
        <div className="top" style ={{backgroundColor: theme ? "white" : "black" , height: "100vh"}}>
           
         <span style={{cursor:"pointer"}} onClick={inc}>{theme ? "🔆":"🌙"}</span><br/><br></br>
         <h1>Number genrater:{change}</h1>
        <button style={rng} onClick={()=>setChange(Math.floor(Math.random()* 66465))}>Show</button>
        <h1>Character counter:{count}</h1>
        <input className="tail" onChange={()=>setCount(count+1)}  placeholder="Enter your char"/>
        

        </div>
    )
}
export default Work

