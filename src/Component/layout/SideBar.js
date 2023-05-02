import React,{useState} from "react";
import Compose from "../Buttons/ComposeButton"
import styled from "@emotion/styled";
import AddIcon from '@mui/icons-material/Add';
import Messagemenu from "./messagesBox/messagesmenu";



const SideBar = ()=>{
    const [isactive,setActive] = useState("SideIconsButton")
    
    const toggleActive = (props) =>{
        setActive(props);
    } 

    return(
        <Wrapper>
            <ComposeWrapper>
                <Compose/>
            </ComposeWrapper>
          <Messagemenu isactive={isactive} toggleActive={toggleActive}/>
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

     

