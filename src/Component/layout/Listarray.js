import React from "react";
import messages  from "./messagesBox/Messages";
// import Styles from '../Styles/index.module.css';
import Styles from '../layout/index.module.scss';


const ListArray = ({toggleAppear}) =>{
    return (
        
        <div className={Styles.MessagesListWrapper}>
            {messages.map((ListItems) =>(
            <div className={Styles.list}
            onMouseOver={() =>toggleAppear("moreIcon")}>
                 <div className={Styles.moreIcon}>
         {ListItems.MoreVertIcon}
         </div>
            <div className={Styles.MessageChecked}>
            {ListItems.CheckBox}
            </div>
            <div className={Styles.MessageStar}>
            {ListItems.Stars}
            </div>
            <div className={Styles.MessageText}>
            {ListItems.Text}
            </div>
         <div className={Styles.MessageOnly}>
         <span>{ListItems.Title}</span>
          &nbsp; -&nbsp;
         <span>{ListItems.MessagesText}</span>
         </div>
         <div className={Styles.Icons}>
            <span>
            {ListItems.Archive}
            </span>
            <span>
            {ListItems.Delete}
            </span>
            <span>
            {ListItems.Draft}
            </span>
            <span>
            {ListItems.Time}
            </span>
            
            </div>
         <div className={Styles.MessageDate}>
         {ListItems.Date}
         </div>
            </div>
    ))}
        </div>   
    )
            }
export default ListArray;