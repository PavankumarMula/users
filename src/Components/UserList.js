import React from "react";
import './UserList.css';
const UserList = (props)=>{
    return <ul>
        {props.users.map((user)=>{
            return <li className="cardshape" key={user.id}> {user.name} {user.age} (Years Old) </li>
        })}
    </ul>
}
export default UserList;