import React from "react"
// import style from "./List.module.sass"
import UserItem from "../List/UserItem/UserItem"

function List(props) {
    return props.listItemUsers.map( (u) =>
        <div key={u.id} className={"List"}>
            <UserItem user={u}/>
        </div>)
}

export default List;