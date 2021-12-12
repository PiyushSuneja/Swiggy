import React from "react";
import {useState,useEffect} from 'react';
import Exlusive from "../Exlusive/Exlusive";
import '../Mainbox/maibox.css';
import Row from '../Row/Row';
export default function Mainbox(){
    const [data, setData] = useState([]);
    useEffect(() => {
          fetch("http://cdn.adpushup.com/reactTask.json").then((response)=>{
             response.json().then((result)=>{
              setData(result);
             })
          })
    }, []);
    
    return(
         <>
         <div className="mainbox">
        
                  {
                data.map((value,index)=>{
                    return  <div id={value.category}> <Row  key={index} category={value.category} data={value.restaurantList}/></div>
                })
                    }
             <div id="only on swiggy"><Exlusive/></div>
             </div>
        </>
    )
}