import { useState } from 'react';
import './User.css'
import ErrorModal from './ErrorModal';
const User = (props) => {
  const[enteredName,setenteredName]=useState('');
  const[enteredAge,setenteredAge]=useState('');
  const [Error,setError]=useState();
    const formHandler= event =>{
      event.preventDefault();
      if(enteredName.trim().length===0 || enteredAge.trim().length===0){
        setError({title:"Invalid Input",
                  message:"Please Enter Non Empty Values" 
      })
        return;
      }
      if(+enteredAge<1) {
        setError({title:"Invalid Input",
                  message:"Please Enter Non Negative Number Values" 
      })
        return;
      }
      props.onAdduser(enteredName,enteredAge);
      setenteredName('');
      setenteredAge('');
    }
    const nameHandler=event=>{
      setenteredName(event.target.value);
    }
    const ageHandler=event =>{
      setenteredAge(event.target.value);
    }
    const errorHandler=()=>{
      setError(null);
    }
  return (
    <div>
      <form className='form' onSubmit={formHandler}>
        <div className='input-container'>
        <label className='label' htmlFor='name' >Name</label>
        <input id='name' type='text' onChange={nameHandler} value={enteredName} className='input'></input>
        <label className='label' htmlFor='age'>Age</label>
        <input id='age' type='number'onChange={ageHandler} value={enteredAge} className='input'></input>
        <div>
        <button type='submit' className='submit'>Add User</button>
        </div>
        </div>
      </form>
      {Error &&<ErrorModal title={Error.title} message={Error.message} onOkay={errorHandler}></ErrorModal>}
    </div>
  );
};
export default User;
