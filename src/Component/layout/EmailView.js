import styled from "@emotion/styled";
import React,{useState} from "react";
import ListArray from "./Listarray";
import Inbox from "./Inbox";
import Icons from './Icons'
import ListArrays from "./Listarray copy";
import ListArrays2 from "./Listarray copy 2"


const EmailView = ()=>{
    const [isactive, setActive] = useState('primary');
    const [isAppear, setAppear] = useState("");
    
    const toggleActive = (props) =>{
        setActive(props);
    } 
    const toggleAppear = (props)=>{
        setAppear(props)
    }
    

    return(
        <Wrapper>
            <Icons />
            <BottomBar>
                <Inbox toggleActive = {toggleActive} isactive = {isactive}/>
                {isactive === 'primary' && <ListArray 
                toggleAppear={toggleAppear} isAppear={isAppear}/>}
                {isactive === "promotion" && <ListArrays/>}
                {isactive === "social" && <ListArrays2/>}
            </BottomBar>
        </Wrapper>
    )
}
export default EmailView;
const BottomBar = styled.div`
height: 100vh;
Overflow: auto;`
const Wrapper = styled.div`
position: relative;
background-color: white;
border-radius: 10px;`



    