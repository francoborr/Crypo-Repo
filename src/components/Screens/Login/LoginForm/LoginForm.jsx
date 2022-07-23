import Button from "../../../UI/Button/Button";
import { useRef } from "react";
import { login } from "../../../../services/crypto";

const LoginForm = ({onLoginUser}) => {
    const inputUserName = useRef();
    const inputPassword = useRef();

    const onHandleLogin = async e =>{
        e.preventDefault();
        const userName = inputUserName.current.value;
        const password = inputPassword.current.value;

        if(userName !== '' && password !== ''){
            try{
                const {apiKey, id} = await login(userName, password)
                const user = {apiKey: apiKey, id : id}
                onLoginUser(user)
            }catch (error){
                alert("Ha ocurrido un error ", error);
            }
        }else{
            alert("Complete los campos")
        }

    }


    return(        
    <>
      <form>
        <label>Username</label>
        <br />
        <input className='form-control' type='text' ref={inputUserName}/>
        <br />
        <label>Password</label>
        <br />
        <input className='form-control' type='password' ref={inputPassword} />
        <br />
        <br />
        <Button
          cta='Login'
          classColor={'btn-primary'}
           onHandleClick={onHandleLogin}
        />
      </form>
    </>

    )
}


export default LoginForm;