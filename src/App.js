import React,{ useState } from 'react';
import './App.css';
import User from './Components/User'
import UserList from './Components/UserList';

function App() {
  const[addusers,setaddusers]=useState([])
  const getAddedUsersHandler=(username,userage)=>{
    setaddusers(prevstate=>{
      return [...prevstate,{name:username,age:userage,id:Math.random().toString()}]
    })
  }
  console.log(addusers);
  return (
    <div className="App">
     <User onAdduser={getAddedUsersHandler}/>
    <UserList users={addusers} />
    </div>
  );
}

export default App;
