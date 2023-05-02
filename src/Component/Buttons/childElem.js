import React, { useState } from "react";
import SideIconsBarButton from "./SideIconsBarButton";
import Styles from "../layout/index.module.scss";
import NavItems from "./inboxtr";


const ChildElemDom = ()=> {
    const [list,setList] = useState(SideIconsBarButton)
    


const handleClick = (text)=>{
    const result =  list.map((item) =>{
if(item.Text === text){
    return {
        ...item,
        isactive:  true
    }

}else{
    return {
        ...item,
        isactive:false
    }
}
    }
    )
    setList(result)
}

    return(
        <div className={Styles.SideIconWrapper}>
         { list.map((item)=>(
           <NavItems 
           key={item.Text}
           handleClick = {() => handleClick(item.Text)}
           item={item} />

        
    ))}
    </div>
    )
}
export default ChildElemDom;