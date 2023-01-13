import React, {useState, useEffect} from 'react'
import NavbarA from '../components/NavBar/NavBarA'
import UsersCard from '../components/UsersCard/UsersCard';
import { getUsersRoute } from '../utils/APIRoutes';
import axios from "axios" 
const Chat = () => {
  const [users, setUsers] = useState([])
  const [values, setValues] = useState({
    username:"",
    
    avatarImage:"",
    
});

 useEffect(()=>{
  const getUsers = async () =>{
      
    const {data} = await axios.get(getUsersRoute);
    
    

    if(data){ 
      
      setUsers(data.userData)
        
    }
  }
  getUsers();
 },[])
    
 

  
  return (
    <>
      <NavbarA />

      <section className='pt-20 flex justify-center gap-10 flex-wrap'>
      {
          users.map ((user) =>(
            <UsersCard key={user.username} image={user.avatarImage} name={user.username} />
            
          ))
        }
        
      </section>
    </>
  )
}

export default Chat