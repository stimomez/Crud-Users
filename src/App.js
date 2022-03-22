
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';


function App() {
    const urlApis = 'https://users-crud1.herokuapp.com/users/';
    const[ users, setUsers ] = useState([]);
    const[ userSelected, setUserSelected ] = useState(null);
    const[ add, setAdd ] = useState(false)

    useEffect(() => {
      getUsers()
    },[])
    const getUsers = () =>{
      axios.get(urlApis)
      .then(res => setUsers(res.data))
    }
    const addUsers = (data) => {
      axios.post(urlApis,data)
      .then(()=> {
        setAdd(false)
        getUsers()})
    }
    const selectUser = (user) =>{
      setUserSelected(user)
      setAdd(true)
    }
    const updateUser = (userSelect,user) =>{
      setAdd(true)
      axios.put(`${urlApis}${userSelect.id}/`,user)
      .then(()=> {
      setUserSelected(null) 
      getUsers()
      setAdd(false)})
    }
    const removeUser = (id) => {
      console.log(id)
      axios.delete(`${urlApis}${id}/`)
      .then(()=> getUsers())
    }
    const changeAdd = value => setAdd(value);
    
  return (
    <div className="App">
       { add === false &&
      <div className="title">
          <b>Users</b>
          </div>
          }
          
                { add === true && 
                  
                 <UsersForm addUsers={addUsers} 
                 userSelected={userSelected}
                 updateUser={updateUser} 
                 changeAdd={changeAdd}
                />
                }
                { add === false &&
                <button className='button-add' onClick={()=>setAdd(!add)}>
                  Add User
                </button>
                }
               { add === false &&  
               <UsersList users={users}
                selectUser={selectUser} 
                removeUser={removeUser} />
              }
    </div>
  );
}


export default App;
