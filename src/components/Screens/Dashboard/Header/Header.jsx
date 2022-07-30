import React from 'react'
import './Header.css'
import logo from './logo.svg'
import Button from '../../../UI/Button/Button'
import { useDispatch } from 'react-redux'
import { setLogoutUser } from '../../../../app/slices/userSlice'

const Header = () => {
    const dispatch = useDispatch()  

    const onHandleLogout=()=>{
        dispatch(setLogoutUser())

    }


  return (
    <header className='App-header'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>  
            <div>      
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
            />
            Obligatorio Crypto
            </div> 
          <div>
            <Button cta={"Logout"} onHandleClick={onHandleLogout}></Button>
          
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header