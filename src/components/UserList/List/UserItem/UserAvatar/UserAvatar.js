import React from "react"
import style from "./UserAvatar.module.sass"

function UserAvatar(props) {
    return (
        <div
            className={style.userAvatar} style={{backgroundImage: `url(${props.userAvatar})`}}
        >
        </div>
    )
}

export default UserAvatar;