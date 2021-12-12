import React from "react";
import '../Row/row.css';
import {useState,useEffect} from 'react';
import Card from "../Card/Card";
import { Button } from "react-bootstrap";
export default function Row({category,data}){
  const [carddata, setCarddata] = useState([

  ]);
    const [visible, setVisible] = useState(5);
    const [remaining, setRemaining] = useState();
     useEffect(()=>{
    setCarddata(data);  
    setRemaining(data.length-5);
   },[]);
  
   function loadmore(){
        setVisible(visible + 5);
        if(remaining>5){
        setRemaining(remaining-5);
        }
   }
  
    
    return(
        <>
        <div><h1 style={{textAlign:"center"}}>{category}</h1>
          </div>
        <div className="row">
         <div className="wrapper">
         {carddata.slice(0,visible).map((values,index)=>{
            return <Card key={index} values={values}/>
          })} 
           { visible<carddata.length &&
          <Button className="button" onClick={loadmore}>+{remaining} MORE</Button>}
         </div>
        </div>
          
        </>)
}