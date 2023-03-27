
import styled from "@emotion/styled";
import Calendar from "../CalendarImage/calendar.png";
import Contact from "../ContactImage/contacts.png";
import Task from "../TasksImage/tasks.png";
import Keep from "../KeepImage/Keep.png"
import React from "react";
const SideIcons = ()=>{
    return(
        <Wrapper>
            <img src={Calendar} alt="calendar" fontSize="small"/> 
            <img src={Contact} alt="contact" fontSize="small"/>  
            <img src={Keep} alt="keep"/>
            <img src={Task} alt="Task" fontSize="small"/>
        </Wrapper>
    )
}
export default SideIcons;
const Wrapper = styled.div`
background-color: #f7fcf9;`