import React from "react";
import SideBar from "./layout/SideBar";
import EmailView from "./layout/EmailView";
import SideIcons from "./layout/SideIcons";
import styled from "@emotion/styled";

const main = ()=>{
    return(
        <Wrapper>
            <SideBar/>
            <EmailView/>
            <SideIcons/>
        </Wrapper>
    )

}
export default main;
const Wrapper = styled.div`
display: grid;
grid-template-columns: 250px auto 50px;
`