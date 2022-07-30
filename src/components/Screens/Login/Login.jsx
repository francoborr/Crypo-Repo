import Button from "../../UI/Button/Button";
import LoginForm from "./LoginForm";
import Title from "../../UI/Title";
import React, { useState } from "react";
import Registro from "../Registro/Registro";

const Login = () => {
  const [showRegistro, setShowForm] = useState(false);

  const show = () => {
    setShowForm(!showRegistro);
  };

  return (
    <>
      <section className="d-flex flex-md justify-content-center login">
        <div className="card">
          <Title title="Login" />
          <section className="card-body">
            <LoginForm />
            {
              <Button
                onHandleClick={show}
                cta="Registrarse"
                classColor={"btn-primary"}
              ></Button>
            }
          </section>
        </div>
        <div>{!showRegistro ? <Registro /> : false}</div>
      </section>
    </>
  );
};

export default Login;
