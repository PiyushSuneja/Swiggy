import React,{useState} from "react";
import '../Sidebar/sidebar.css';
import { Link } from "react-scroll";
import { Button } from 'react-bootstrap';
export default function Sidebar({tosidebar}){
   const [show, setShow] = useState(true);
    tosidebar(show);
     function showallhandler(){
         if(show===false){
             setShow(true);
         }else{
             setShow(false);
         }
     }

    return(
        <>
        <div className="sidebar">
            <div className="buttons">
           <Button><Link to="popular brands" activeClass="active" spy={true} smooth={true} onClick={()=>setShow(true)}>Popular Brands</Link></Button>
           <Button><Link to="offers near you" spy={true} smooth={true} onClick={()=>setShow(true)}>Offers Near You</Link></Button>
           <Button><Link to="Express delivery" spy={true} smooth={true} onClick={()=>setShow(true)}>Express Delivery</Link></Button>
           <Button><Link to="Gourmet" spy={true} smooth={true} onClick={()=>setShow(true)}>Gourmet</Link></Button>
           <Button><Link to="only on swiggy" spy={true} smooth={true} onClick={()=>setShow(true)}>Only On Swiggy</Link></Button>
           <Button><Link to="SEE ALL" spy={true} smooth={true} onClick={showallhandler}>SEE ALL</Link></Button>
            
            </div>
        </div>
        </>
    )
}