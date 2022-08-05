import Button from "../../UI/Button/Button";
import LoginForm from "./LoginForm";
import Title from "../../UI/Title";

import { useNavigate } from 'react-router-dom'  
import { useSelector } from "react-redux";

import { useEffect } from "react";
const Login = () => {

  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate('/dashboard/')
    }
  }, [user, navigate])

  const onHandleClick = ()=>{
    navigate('/registro/')
  }


 return (
  <section className="d-flex flex-md justify-content-center login ">
    <div className="card p-3 mx-auto m-5 shadow-lg bg-white ">
      <Title className="text-center m-2 font-weight-bolder" title="Login" />
      <hr />
      <section className="card-body">
        <LoginForm />
        {
          <Button
            onHandleClick={onHandleClick}
            cta="Registrarse"
            classColor={`mt-4 w-100 bg-dark ${"btn-primary"}`}
          ></Button>
        }
      </section>
    </div>
    </section>
  );

 
};

export default Login;
