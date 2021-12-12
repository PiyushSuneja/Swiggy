import React from "react";
import { Button } from "react-bootstrap";
import '../Card/card.css';
export default function Card({values}){
    return(
        <>
        <div className="card">
            <img className="image" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format" alt="loading"></img>
            <div>{values.name}</div>
            <div className="food_lists">
            {  values.food_types.map((list,index)=>{
                return <div key={index} style={{margin:"4px",fontSize:"10px",height:"20px"}}>{list}</div>
              
            })}
            </div>
            
            <div className="bottom">
                <span>{values.ratings}</span>
                <span>{values.delivery_time}</span>
                <span  style={{marginLeft:"12px"}}>{values.price_for_two} For Two</span>
            </div>
            <Button className="hidd">Quick View</Button>
        </div>
        </>
    )
}