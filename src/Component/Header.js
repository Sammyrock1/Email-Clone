import React from "react"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Logo from "./Images/GmailPhoto.png"
// import Logo from "./images/Gmail.png"
import styled from "@emotion/styled";



const Header = ()=>{
    return(
        <Wrapper>
            <LogoWrapper>
                <Menu>
                    <MenuIcon/>
                </Menu>
                <LogoPhoto>
                <img src={Logo} alt="GmailPhotos"/>
                </LogoPhoto>
            </LogoWrapper>
            <SearchWrapper>
                <SearchIcon/>
                <InputWrapper>
                <input placeholder="Search mail" type="text"/>
                </InputWrapper>
                <ExpandMoreIcon/>
            </SearchWrapper>
            <AccountWrapper>
                <HelpOutlineIcon/>
                <SettingsIcon/>
                <AppsIcon/>
                <AccountCircleIcon/>
            </AccountWrapper>
        </Wrapper>
    )
}
export default Header;

const Wrapper = styled.div`
display : grid;
grid-template-columns : 270px auto 170px;
border-bottom: 1px solid transparent;
background-color: #f7fcf9;
align-items: center;`

const LogoWrapper = styled.div`
align-items: center;
display: grid;
grid-template-columns : 30px 50px;
height: 45px;
margin-left: 30px;`

const InputWrapper = styled.div`
width: 90%;
input{
    width: 100%;
    border: none;
    background: none;
    margin-left: 20px;
    font-size: 20px;
    :focus{
        outline: none;
    }
}`

const SearchWrapper = styled.div`
max-width : 65%;
display: flex;
align-items : center;
background-color: #eaf1fb;;
color: #5f6368;
border-radius: 9px;
padding: 15px;
transition:  background 100ms ease-in,width 100ms ease-out;
::after, :hover{
    background-color: #f1f3f4;
    box-shadow: 0 1px 1px 0 rgba(65,69,73,0.3),
0 1px 3px 1px rgba(65,69,73,15) ;
border: transparent;
}
`
const Menu = styled.div`

align-items: center;
color: #5f6368;
:hover{
    background-color: lightgray;
    border-radius: 40px;
    padding: 5px;
    Opacity: 0.5;
}`

const LogoPhoto = styled.div`
 height: 60px;
 margin-left: 10px;`

 const AccountWrapper = styled.div`
 display: grid;
 grid-template-columns: 10px 10px 10px 50px;
 margin-left: 50px;
 grid-gap: 20px;
 color: #5f6368;`

