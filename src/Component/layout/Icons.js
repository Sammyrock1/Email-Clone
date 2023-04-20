import React from "react";
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox } from "@mui/material";
import NavigateIcon from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Styles from './index.module.scss';

const Icons = () => { 
    return (
    <div className={Styles.Iconslist}>
            <div className={Styles.IconsButton}>
                <div  className={Styles.Both}>
                    <div className={Styles.Checkbutton}>
                      <Checkbox fontSize="small"/>
                    </div>
                    <divs className={Styles.Checkbuttons}>
                    <ArrowDropDown/>
                    </divs>
                </div>
                <div className={Styles.IconWrapper}>
                <RefreshIcon fontSize="small"/>
                </div>
                <div className={Styles.IconWrapper}>
                <MoreVertIcon/>
                </div>
            </div>
             <div className={Styles.SideIconsWrapper}>
                   <NavigateIcon/>
                   <NavigateNext/>
                   <KeyboardIcon fontSize="small"/>
                   <ArrowDropDown/>
             </div>
            </div> 
            )
}
export default Icons;