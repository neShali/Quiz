import React, { useEffect, useReducer } from 'react';
import * as api from './apiStatic'
import reducerStatic, { initialState } from './reducerStatic';

function Static(): JSX.Element {   
  const [state, dispatch] = useReducer(reducerStatic, initialState);

  useEffect(() => {
   api.loadStaticUsers().then((loadStaticUsers) => 
     dispatch({ type: 'static/loadStaticUsers', payload: loadStaticUsers }));
   }, []);
      
   const users = state.usersList;

   console.log(users);
   

  return (
    <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {}
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
         
        </tbody>
      </table>
  )
}

export default Static;


