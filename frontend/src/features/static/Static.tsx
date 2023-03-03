import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import "../features.css"

function Static(): JSX.Element {   

  const users = useSelector((state: RootState) => state.static.usersList);

//    console.log(users);

  return (
     <table className="table">
     <tr> 
      <td width="200" valign="top">Имя игрока:</td>
      <td width="200" valign="top">Счёт:</td>
     </tr>
     <tr className="userTable">
     {users.map((user)=> 
       <div className="usersInfo"><td>{user.name}</td><td>{user['Points.score']}</td></div>
    )}
    </tr>
    </table>
  )
}

export default Static;
