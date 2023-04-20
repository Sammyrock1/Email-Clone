import React from "react";
import InboxIcon from '@mui/icons-material/Inbox';
import Tag from '@mui/icons-material/LocalOffer';
import GroupIcon from '@mui/icons-material/Group';
import  Styles from "../layout/index.module.scss"

const Inbox = ({toggleActive, isactive}) =>{
    
    return (
        <div className={Styles.EmailViewWrapper}>
        <div onClick={()=> toggleActive("primary")} className={`${ Styles.primaryViewWrapper } ${isactive === "primary" ? `${Styles.activeTab}` : ""}`}>
        <InboxIcon fontSize="small"/>
            <p>Primary</p>
        </div>
        <div onClick={() => toggleActive("promotion")} className={`${Styles.promotionViewWrapper} ${isactive === "promotion" ? `${Styles.activeTab}` : ""}`}>
        <Tag fontSize="small"/>
        <p>Promotions</p>
        </div>
        <div onClick={() => toggleActive("social")} className={`${Styles.socialViewWrapper} ${isactive === "social" ? `${Styles.activeTab}` : ""}`}>
            <GroupIcon fontSize="small"/>
            <p>Social</p>
        </div>
    </div>
    )
}
export default Inbox;