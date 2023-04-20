
import styled from "@emotion/styled";
import Calendar from "../CalendarImage/calendar.png";
import Contact from "../ContactImage/contacts.png";
import Task from "../TasksImage/tasks.png";
import Keep from "../KeepImage/Keep.png";
import AddIcon from '@mui/icons-material/Add';
import NavigateNext from '@mui/icons-material/NavigateNext';
import React from "react";

const SideIcons = ()=>{
    return(
        <Wrapper>
            <img src={Calendar} alt="calendar" style={{ width: "20px"}}/>
            <img src={Keep} alt="keep" style={{ width: "20px"}}/>  
            <img src={Task} alt="Task" style={{ width: "20px"}}/>
            <img src={Contact} alt="contact" style={{ width: "20px"}}/>
            <IconAdd>
                <ChildElem>
                <AddIcon/>
                </ChildElem>
            </IconAdd>
            <NavigateNext/>
        </Wrapper>
    )
}
export default SideIcons;
const Wrapper = styled.div`
background-color: #f7fcf9;
display: grid;
grid-template-rows: 50px 50px 50px 50px 450px;
margin-top: 20px;
margin-right: auto;
margin-bottom: auto;
margin-left: auto;`
const IconAdd = styled.div`
border-top: 1px solid lightgray;
display: grid;

margin-bottom: 20px;`
const ChildElem = styled.div`
margin-top: 40px;`
