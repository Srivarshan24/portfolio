import React, { useState } from "react";
import'./Accordian.css';

 const Accordian = () =>{

      //const[open,setopen]=useState(false)
      const[open,setopen]=useState(null)

      function expand(){
        setopen(!open)
      }
      const accor =[
        {id:1,tilte:"ACCORDION 1",para:"it is very juseful"},
        
      ]
      function handleId(id){
        console.log(id)
        
        setopen(open === id?null:id)
      }


      return(
        <>
             {
                accor.map((res) =>{
                    return(
                        <> 
                            {/* <p className="head" onClick={()=> setopen(!open)}> {res.tilte}</p>
                            {open ? <p>{res.para}</p> :""} */}
                            <p className="head" onClick={()=>handleId(res.id)}> {res.tilte}</p>
                            {open == res.id ? <p>{res.para}</p> :""}


                        </>
                    )
                })
             }



        </>
      )
 }
 export default Accordian;