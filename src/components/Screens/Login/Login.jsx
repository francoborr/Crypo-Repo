import Button from "../../UI/Button/Button";
import LoginForm from "./LoginForm";
import Title from "../../UI/Title";
import React, { useState } from "react";
import Registro from "../Registro/Registro";
import { useDispatch, useSelector } from "react-redux";
import { setShowRegistration } from "../../../app/slices/showRegistrationSlice";
const Login = () => {
  const showRegistration = useSelector(
    (state) => state.showRegistration.showRegistration
  );
  const dispachShowRegistration = useDispatch();

  const login = (
    <div className="card">
      <Title title="Login" />
      <section className="card-body">
        <LoginForm />
        {
          <Button
            onHandleClick={() => {
              dispachShowRegistration(setShowRegistration(!showRegistration));
            }}
            cta="Registrarse"
            classColor={"btn-primary"}
          ></Button>
        }
      </section>
    </div>
  );

  return (
    <>
      <section className="d-flex flex-md justify-content-center login ">
        <div>{showRegistration ? <Registro /> : login}</div>
      </section>
    </>
  );
};

export default Login;
