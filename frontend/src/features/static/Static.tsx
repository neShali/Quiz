import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import "../features.css"

function Static(): JSX.Element {   

  const users = useSelector((state: RootState) => state.static.usersList.sort((a, b) => b['Points.score'] - a['Points.score']));


  return (
    <div className="table">
     <table >
     <thead style={{width: 100}}>
      <tr>
        <th>Имя игрока:</th>
        <th>Счёт:</th>
      </tr>
    </thead>
    <tbody>
     {users.map((user)=> 
      <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user['Points.score']}</td>
      </tr>
    )}
    </tbody>
    </table>
    </div>
  )
}

export default Static;
