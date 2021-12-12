import React from 'react';
import '../Exlusive/exlusive.css';
import {useState,useEffect} from 'react';
import Card from '../Card/Card';
export default function Exlusive(){
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
           <div><h1 style={{textAlign:"center"}}>Only On Swiggy</h1></div>
             <div className='main'>
                 <div className='wrapper'>
              {data.map((list)=>{
                 return list.restaurantList.map((lists)=>{
                        return <div className={lists.isExlusive?"show":"hid"}> <Card values={lists}/></div>
                            
                  })
              })}
              
          </div>
          </div>

        </>
    )
}