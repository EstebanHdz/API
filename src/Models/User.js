import React ,  {Component} from  'react'
import axios from 'axios';

import MainView from '../Views/Main.js';


class User extends Component{

    constructor(props){
        console.log(props);
        super(props);
        this.initialState = {
            usersData:null,
        };

        this.state = this.initialState;
    }

    async fetchUsers(number){

        await axios.get(`https://randomuser.me/api?results=`+number)
        .then(res => {
            this.setState(
                {usersData:res.data.results}
            );
            console.log(this.state.usersData);
        })
    }

    getUsers = (number) =>{
        this.fetchUsers(number);
        return this.usersData;
    }

    render(){
        return(
            <MainView getUsers={this.getUsers} usersData={this.state.usersData}></MainView>
        );
    }

}


export default  User