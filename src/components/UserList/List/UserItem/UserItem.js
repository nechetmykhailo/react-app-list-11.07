import React from "react"
import style from "./UserItem.module.sass"
import UserAvatar from "./UserAvatar/UserAvatar"
import UserSelect from "./UserSelect/UserSelect"

const UserItem = (props) => {
    return (
        <div onClick={ () => props.onClicked() } className={style.userItem}>
            <UserAvatar/>
            {props.listItemName}
            <UserSelect/>
        </div>
    )
};

export default UserItem;