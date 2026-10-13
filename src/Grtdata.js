import { React, useState ,useEffect} from 'react';
import axios from 'axios'
//auto function run useeffect
const Grtdata=()=> {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/c/b6bd-750d-4730-b430")
        .then((res)=>{setData(res.data)})
    },[])
    console.log(data)
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>ID  </th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            {data.map((i)=>{
                return(
                    <>
                        <tbody>
                            <tr>
                                <th>{i.id}</th>
                                 <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{i.name}</th>
                                  <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{i.email}</th>
                            </tr>
                        </tbody>
                    </>
                )
            })}
        </table>
    </>
    
  )
}
 
export default Grtdata