import Login from "../Screens/Login/Login";
import { Route, Routes } from 'react-router-dom'
import Dashboard from "../Screens/Dashboard/Dashboard";
import PrivateRoute from '../Screens/PrivateRoute'


import "bootstrap-css-only";
import Registro from "../Screens/Registro/Registro";
import { useSelector } from "react-redux";

function App() {
  const userLogged = useSelector((state) => state.user.user);

  return (
    <div className="App bg-light w-100 h-100 ">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route
          path='/dashboard'
          element={
            <PrivateRoute user={userLogged}>
              <Dashboard/>
            </PrivateRoute>
          }
        />        
      </Routes>
      
    </div>
  );
}

export default App;
