import React, {Component} from "react"
import UserList from "../../components/UserList/UserList"

class MainPage extends Component{
    render() {
        return(
            <div className={"MainPage"}>
                <UserList/>
            </div>
        )
    }
}

export default MainPage;