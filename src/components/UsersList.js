import React from 'react';


const UsersList = ({users, selectUser, removeUser}) => {
    
    return (
        
            
        <ul className='users-list' style={{listStyle:"none" }}>
            
            {
                users.map(user => (
                    <li key={user.id} className='rectangle'>
                        <h2>{user.first_name} {user.last_name}</h2>
                        <p>{user.email}</p>
                        <p>{user.birthday}</p>
                        <button className='button-edit' onClick={()=> removeUser(user.id)}><i  className="fa-solid fa-trash-can"></i></button>
                        <button className='button-delete' onClick={()=>selectUser(user)}><i className="fa-solid fa-pencil"></i></button>

                    </li>
                ))
            }
        </ul>
      
    );
};

export default UsersList;