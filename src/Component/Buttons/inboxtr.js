import React  from "react";
import Styles from "../layout/index.module.scss"

const NavItems = ({item, handleClick})=>{
    
    const classtr = item.isactive ? Styles.SideactiveTab: 
    ""

    return(
        <div  
        className={`${ Styles.SideIconsButton } ${classtr}`}
        onClick={handleClick}
       >
        {item.Icons}
        {item.Text}
    </div>
    )
}
export default NavItems;