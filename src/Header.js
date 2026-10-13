import {React,useState} from "react";
function Header()
{
    const [status,setStatus]=useState("");
    const ctime = new Date().toLocaleTimeString();
    console.log(ctime)
    if(ctime >= "15:51:00"&& status != "grey"){
        console.log("system is offline");
        setStatus("grey");
    }
    return(
        
        <div style={{width:"100%",height:"100vh",backgroundColor:status}}>
            heater react
        {status}
        <button disabled={status == "grey" ? true:false}>test</button>

        </div>
    )
}
export default Header
