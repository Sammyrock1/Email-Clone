import React from "react";
import styled from "@emotion/styled";
import CreateIcon from '@mui/icons-material/Create';

const ComposeButton = ()=>{
    return(
        <Wrapper>
            <CreateIcon fontSize="small"/>
            <p>Compose</p>
        </Wrapper>
    )
}
export default ComposeButton;
const Wrapper = styled.div`
display: grid;
grid-template-columns: 35px auto;
margin-left: 20px;
align-items: center;
p{
    margin-top: 15px;
    font-weight: 550;
    font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;   
}
`
