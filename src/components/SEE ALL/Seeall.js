import React from 'react';
import '../SEE ALL/seeall.css';
import { useState,useEffect } from 'react';
import Card from '../Card/Card';
export default function Seeall(){
    const [dataall, setDataall] = useState([]);
    useEffect(() => {
        fetch("http://cdn.adpushup.com/reactTask.json").then((response)=>{
           response.json().then((result)=>{
            setDataall(result);
           })
        })
  }, []);
    return(
        <>
        <div className='seeall'>
            <div className='wrapper'>
        
            {dataall.map((result)=>{
               return result.restaurantList.map((list)=>{
                  return <Card values={list}/>
                })
            })}
            </div>
        </div>
           
        </>
    )
}