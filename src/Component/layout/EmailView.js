import styled from "@emotion/styled";
import React, { useState } from "react";
import Icons from './Icons';
import InboxMs from "../Buttons/inboxMs";
import Styles from "../layout/index.module.scss";
import SideIconsBarButton from "../Buttons/SideIconsBarButton";
import StarredClick from "../Buttons/starredIcon";



const EmailView = ()=>{
    const [isdisplay,setDisplay] = useState(SideIconsBarButton);

    const ListButton = () =>{
        const ListResult = SideIconsBarButton.map((ListArray) =>{
            if(isdisplay === ListArray){
                return(
                <StarredClick/>
                )
            }
            else{
                return(
                alert("HELLO")
                )
            }
        })
        setDisplay(ListResult);
    }
    
    

    return(
        <Wrapper>
            <Icons />
            <InboxMs className={Styles.BottomBar}
            ListButton ={() => ListButton()}/>
        </Wrapper>
    )
}
export default EmailView;
const Wrapper = styled.div`
position: relative;
background-color: white;
border-radius: 10px;`



    