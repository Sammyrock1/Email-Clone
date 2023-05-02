import React from "react";
import Styles from "../../layout/index.module.scss"
import ChildElemDom from "../../Buttons/childElem";




const Messagemenu = ({isactive,toggleActive}) =>{
   
    return(
    <div>
     <ChildElemDom toggleActive={toggleActive} isactive={isactive}/>
    </div>
    )
}
export default Messagemenu;
