import {React,useEffect,useState} from 'react'

const Counter=()=> {
    const [count,setCount]=useState(0)
    const btn={
        padding:"10px",
        borderRadius:"10px",
        backgroundColor: " blue",
        color:"white",
        border:"none",
        margin:"5px",
        cursor:"pointer"
    }
    //without dependeies
    useEffect(()=>{
        document.title="counter";
    },[])
    //with dependeies
    useEffect(()=>{
        document.title=count
    },[count])
    // useEffect(()=>{
    //     setCount(42)
    // })
    function timeout(){
        setTimeout(
            ()=>{
                console.log("test")
            },1000
        )
    }
    function interval(){
        setInterval(
            ()=>{
                console.log("intervel test")
            },1000
        )
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Count:{count}</h1>
        <button style={btn} onClick={()=>setCount(count+1)}>INCREMENT</button>
        <button style={btn} onClick={()=>setCount(count-1)}>DECREMENT</button>
        <button style={btn} onClick={()=>setCount(0)}>RESET</button><br></br>
        <button style={btn} onClick={timeout}>TIMEOUT</button>
        <button style={btn} onClick={interval}>INTERVAL</button>
    </div>
  )
}

export default Counter