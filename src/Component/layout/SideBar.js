import React from "react";
import Compose from "../Buttons/ComposeButton"
import styled from "@emotion/styled";
import {SideIconsBarButton} from "../Buttons/SideIconsBarButton";
import AddIcon from '@mui/icons-material/Add'


const SideBar = ()=>{
    return(
        <Wrapper>
            <ComposeWrapper>
                <Compose/>
            </ComposeWrapper>
            <SideIconWrapper>
            { SideIconsBarButton.map((items)=>(
                    <SideIconsButton>{items.Icons}{items.Text}</SideIconsButton>
            ))}
            </SideIconWrapper>
            <LabelWrapper>
                <p>Labels</p>
                <IconWrapper>
                <AddIcon/>
                </IconWrapper>
            </LabelWrapper>

        </Wrapper>
    )
}
export default SideBar;
const IconWrapper = styled.div`
:hover{
    background-color: lightgray;
    border-radius: 40px;
    padding: 5px;
    Opacity: 1;
}`
const ComposeWrapper = styled.div`
background-color: #c2e7ff;
cursor: pointer;
border-radius: 10px;
margin-top: 15px;
margin-right: 90px;
margin-left: 10px;
transition:  background 100ms ease-in,width 100ms ease-out;
::after, :hover{
    background-color: #c2e7ff;
    box-shadow: 0 1px 1px 0 rgba(65,69,73,0.3),
0 1px 3px 1px rgba(65,69,73,15) ;
border: transparent;}`

const Wrapper = styled.div`
background-color: #f7fcf9;`
const SideIconsButton = styled.div`
display: grid;
grid-template-columns: 40px 50px;
padding-left: 30px;
cursor: pointer;
padding-top: 10px;
font-size: 15px;

:hover{
    background-color: lightgray;
    border-radius: 10px 40px 40px 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: 600;
    font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif";
}`
const SideIconWrapper= styled.div`
margin-top: 20px;
margin-right: 20px;
`
const LabelWrapper = styled.div`
display: flex;
justify-content: space-between;
 align-items: center;
 max-width: 206px;
 margin-left: 30px;


 p{
     font-size: 18px;
     font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
     font-weight: 500;
     Opacity: 1;
    }`

     

