import React, { Component } from 'react';
import UserItem from '../UserItem';



/*class UserList extends Component {extends Component {
    constructor(props){
        super(props);
        this.state = {
            users:dbUsers.map(u=>({...u, isSelected: false})),
        };
    }*/
const UserList = (props) => {
    const {users, setUsers} = props;
    const mapUser = (user, index)=>{
    const selectUsersHandler = ()=>{
        const newUsers = [...users];
        newUsers[index].isSelected = !newUsers[index].isSelected;
        setUsers(newUsers);
    };
    return(
        <UserItem key={user.id} user={user} onSelectUsers={selectUsersHandler} isSelected={user.isSelected} />
    );
    };
    return <ul> {users.map(mapUser)} </ul>
  };

export default UserList