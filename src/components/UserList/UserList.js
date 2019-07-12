import React, {Component} from "react"
import style from "./UserList.module.sass"
import SelectedItem from "../../components/UserList/SelectedItem/SelectedItem"
import List from "../../components/UserList/List/List"

import constants from "../../constants/constants"

class UserList extends Component{

    constructor(props){
        super(props);
        this.state={
            users: constants,
            isToggleOn: false
        }
    }

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
                    listItemUsers={this.state.users}
                />
            </div>
        )
    }
}

export default UserList;