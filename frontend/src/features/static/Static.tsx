import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Static(): JSX.Element {   

  const users = useSelector((state: RootState) => state.static.usersList);

//    console.log(users);

  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя пользователя:</th>
            <th scope="col">Счёт:</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>1111</td>
              <td>2222</td>
            </tr>
        </tbody>
      </table>
  )
}

export default Static;
