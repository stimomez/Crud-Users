import React, { useEffect, useState } from 'react';


const UsersForm = ({addUsers, userSelected, updateUser, changeAdd}) => {
    
    
    const [ tickets, setTickets ] = useState({
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        birthday:''
        
    })
    useEffect(()=>{
        if (userSelected) {
            
            setTickets({
                firstName: userSelected.first_name,
                lastName: userSelected.last_name,
                email: userSelected.email,
                password: userSelected.password,
                birthday:userSelected.birthday   
            })
        } 
        
    },[userSelected])
    const handleInputChange = (event) =>{
    
        setTickets({...tickets,
        [event.target.name] : event.target.value})
    }
    const reset = () =>{
        setTickets({
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            birthday:''
        })
    }
    const submit = (event) => {
        event.preventDefault();
        const data = {
            first_name: tickets.firstName,
            last_name: tickets.lastName,
            email: tickets.email,
            password: tickets.password,
            birthday: tickets.birthday
        }

        if (userSelected) {
            updateUser(userSelected, data)
            reset()
        } else {
           
            addUsers(data)
            reset()
        }
        
        
    }
 
   

    return (
        <div className='container-form'>
            <h2> New Users</h2>
            <form  onSubmit={submit} >
                <div className='input-name'>
                <label htmlFor="firstName"><i className="fa-solid fa-user"></i></label>
                <input
                id='firstName'
                 type="text"
                 name='firstName'
                 placeholder='Enter your name'
                  onChange={handleInputChange}
                  value={tickets.firstName}
                  required={true}
                 />
                 <input
                 type="text"
                 name='lastName'
                 placeholder='Enter your Last Name'
                 onChange={handleInputChange}
                 value={tickets.lastName}
                  />
                  </div>
                 <div className='input-form'>
                     <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                 <input
                 id='email'
                 type="email"
                 name='email'
                 placeholder='Enter your email'
                 onChange={handleInputChange}
                 value={tickets.email}
                 required={true}
                 />
                 </div>
                <div className='input-form'>
                <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                <input
                id='password'
                 type="password"
                 name='password'
                 placeholder='Enter your password'
                 onChange={handleInputChange}
                 value={tickets.password}
                 required={true}
                 />
                </div>
                <div className='input-form'>
                <label htmlFor="date"><i className="fa-solid fa-cake-candles"></i></label>
                <input
                 id='date'
                 type="date"
                 name='birthday'
                 onChange={handleInputChange}
                 value={tickets.birthday}
                 required={true}
                  />
                </div>

                 <button className='button-submit'>Submit</button>
                               <button 
                                    className='button-cancel'
                                    onClick={()=>{
                                        reset()
                                        changeAdd(false)
                                      } }
                                      type='button'>
                                      Cancel
                                 </button>
                </form>
                
        </div>
    );
};

export default UsersForm;