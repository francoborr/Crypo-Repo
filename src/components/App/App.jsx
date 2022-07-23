// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Login from '../Screens/Login/Login';
import Dashboard from '../Screens/Dashboard/Dashboard';

import 'bootstrap-css-only'
import Registro from '../Screens/Registro/Registro';

function App() {
  const [userLogged, setUserLogged] = useState(null);
  const onLoginUser = user => {
    setUserLogged(user)
  }


  return (
    <div className="App">
        <Registro></Registro>
        {!userLogged? (
          <Login onLoginUser={onLoginUser}/>) : 
          (<Dashboard user= {userLogged}></Dashboard>)}      
    </div>
  );
}

export default App;
