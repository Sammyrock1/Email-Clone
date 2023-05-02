import React,{useState} from "react";
import ListArrays from "../layout/Listarray copy";
import ListArrays2 from "../layout/Listarray copy 2";
import ListArray from "../layout/Listarray";
import Inbox from "../layout//Inbox";

const InboxMs = ()=>{
    const [isactive, setActive] = useState('primary');
    const [isAppear, setAppear] = useState("");
    
    const toggleActive = (props) =>{
        setActive(props);
    } 
    const toggleAppear = (props)=>{
        setAppear(props)
    }
    return (
        <div>
                <Inbox toggleActive = {toggleActive} isactive = {isactive}/>
                {isactive === 'primary' && <ListArray 
                toggleAppear={toggleAppear} isAppear={isAppear}/>}
                {isactive === "promotion" && <ListArrays/>}
                {isactive === "social" && <ListArrays2/>}
            </div>
    )
}
export default InboxMs;