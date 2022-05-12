import React, { useEffect,useState } from 'react';
import api from './services/api';

interface IUser{
  name: string;
  email?:string;  
}


function App() {
  const [users,setUsers] = useState<IUser[]>([])

  useEffect(()=>{
    api.get<IUser[]>('/users').then(response=>{
      setUsers(response.data)
    });
  },[]);
  return (
    <table>
      <thead>
      <tr>
          <th>Nome</th>
          <th>Email</th>
      </tr>
      </thead>
      <tbody>
      {
        users.map((user,index)=>
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
        )
      }
      </tbody>                  
    </table>
  );
}

export default App;