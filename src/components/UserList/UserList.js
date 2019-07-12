import React, {Component} from "react"
import style from "./UserList.module.sass"
import SelectedItem from "../../components/UserList/SelectedItem/SelectedItem"
import List from "../../components/UserList/List/List"

import * as constants from "../../constants/constants"

class UserList extends Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            isToggleOn: false
        }
    }

    listItemName = () => {
        return constants.USERS.map((u) => u.fullName)
    };

    onClicked = () => {
        this.setState({
            isToggleOn: !this.state.isToggleOn,
        });
    };

    render() {
        return(
            <div className={style.userList}>
                <SelectedItem/>
                <List
                    onClicked={this.onClicked}
                    listItemName={this.listItemName()}/>
            </div>
        )
    }
}

export default UserList;