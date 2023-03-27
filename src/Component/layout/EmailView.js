import styled from "@emotion/styled";
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox } from "@mui/material";
import React from "react";
import NavigateIcon from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InboxIcon from '@mui/icons-material/Inbox';
import Tag from '@mui/icons-material/LocalOffer';
import GroupIcon from '@mui/icons-material/Group';
import {Messages}  from "./Messages";

const EmailView = ()=>{
    return(
        <Wrapper>
            <IconsButtonWrapper>
            <IconsButton>
                <Both>
                    <Checkbutton>
                      <Checkbox fontSize="small"/>
                    </Checkbutton>
                    <Checkbuttons>
                    <ArrowDropDown/>
                    </Checkbuttons>
                </Both>
                <IconWrapper>
                <RefreshIcon fontSize="small"/>
                </IconWrapper>
                <IconWrapper>
                <MoreVertIcon/>
                </IconWrapper>
            </IconsButton>
             <SideIconsWrapper spacing={3}>
                   <NavigateIcon/>
                   <NavigateNext/>
                   <KeyboardIcon fontSize="small"/>
                   <ArrowDropDown/>
             </SideIconsWrapper>
            </IconsButtonWrapper> 
            <BottomBar>
            <EmailViewWrapper>
                <PrimaryEmailView>
                <InboxIcon fontSize="small"/>
                    <p>Primary</p>
                </PrimaryEmailView>
                <PromotionEmailView>
                <Tag fontSize="small"/>
                <p>Promotions</p>
                </PromotionEmailView>
                <SocialEmailView>
                    <GroupIcon fontSize="small"/>
                    <p>Social</p>
                </SocialEmailView>
            </EmailViewWrapper>
            <MessagesListWrapper>
            {Messages.map((MessagesView)=>(
                    <MessagesViewList>{MessagesView.CheckBox} {MessagesView.Stars} {MessagesView.Text}</MessagesViewList>
                ))}
            
            </MessagesListWrapper>
            </BottomBar>

        </Wrapper>
    )
}
export default EmailView;
const BottomBar = styled.div`
height: 100vh;
Overflow: auto;`
const Wrapper = styled.div`
background-color: white;
border-radius: 10px;`
const Both = styled.div`
display: grid;
grid-template-columns: 40px 20px;
align-items: center;`
const MessagesViewList = styled.div`
border-bottom: 1px solid lightgray;
display: grid;
grid-template-columns: 60px 40px auto;
align-items: center;
font-weight: 700;
font-size: .875rem;
transition:  background 100ms ease-in,width 100ms ease-out;
:hover{
    background-color: transparent;
    border: 1px solid lightgray;
    box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    position: relative;
}`
const MessagesListWrapper = styled.div`
background-color: white;
font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;`
const IconWrapper = styled.div`
:hover{
    background-color: lightgray;
    border-radius: 40px;
    padding: 5px;
    Opacity: 0.5;
}`
const IconsButton = styled.div`
display: grid;
grid-template-columns: 70px 40px 40px;
align-items: center;`
const IconsButtonWrapper = styled.div`
grid-template-columns: 90% 10%;
display: grid;
align-items: center;
margin-top: 10px;
margin-left: 10px;
border-bottom: 1px solid lightgray;`

const SideIconsWrapper = styled.div`
spacing: 
diplay: grid;
grid-template-columns: 50px 90px 80px;`

const Checkbutton = styled.div`
:hover{
    background-color: lightgray;
    border-radius: 5px;
    Opacity: 0.5;
}`
const EmailViewWrapper = styled.div`
position: relative;
margin-top: 20px;
display: grid;
grid-template-columns: 200px 200px 200px;
border-bottom: 1px solid lightgray;
cursor: pointer;`
const PrimaryEmailView = styled.div`
display: grid;
grid-template-columns: 20px 20px;
align-items: center;
padding-left: 20px;
padding-right: 35px;
font-weight: 200;
:active{
    background-color: lightgray;
    border-bottom: 2px solid blue;
    color: blue;
    Opacity: 0.;
}
:hover{
    background-color: lightgray;
    Opacity: 0.;
}
p{
    padding-left: 20px;
    padding-right: 90px;
}`
const PromotionEmailView = styled.div`
display: grid;
grid-template-columns: 20px 20px;
align-items: center;
padding-left: 35px;
padding-right: 35px;
font-weight: 200;
:active{
    background-color: lightgray;
    border-bottom: 2px solid blue;
    color: blue;
    Opacity: 0.;
}
:hover{
    background-color: lightgray;
    Opacity: 0.;
}
p{
    padding-left: 20px;
    padding-right: 90px;
}`
const SocialEmailView = styled.div`
display: grid;
grid-template-columns: 20px 20px;
align-items: center;
padding-left: 35px;
padding-right: 35px;
font-weight: 200;
:active{
    background-color: lightgray;
    border-bottom: 2px solid blue;
    color: blue;
    Opacity: 0.;
}
:hover{
    background-color: lightgray;
    Opacity: 0.;
}
p{
    padding-left: 20px;
    padding-right: 90px;
}`
const Checkbuttons = styled.div`
border-radius: 5px;
:hover{
    background-color: lightgray;
    Opacity: 0.5;
}`

    