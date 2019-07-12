import React from "react"
// import style from "./List.module.sass"
import UserItem from "../List/UserItem/UserItem"

const List = (props) => {
    return (
        <div className={"List"}>
            <UserItem
                onClicked={props.onClicked}
                listItemName={props.listItemName[0]}/>
            <UserItem
                onClicked={props.onClicked}
                listItemName={props.listItemName[1]}/>
            <UserItem
                onClicked={props.onClicked}
                listItemName={props.listItemName[2]}/>
            <UserItem
                onClicked={props.onClicked}
                listItemName={props.listItemName[3]}/>
            <UserItem
                onClicked={props.onClicked}
                listItemName={props.listItemName[4]}/>
        </div>
    )
};

export default List;