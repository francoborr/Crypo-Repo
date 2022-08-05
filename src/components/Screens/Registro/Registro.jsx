import RegistroForm from "./RegistroForm/RegistroForm";
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button";
import {useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'  
import { useEffect } from "react";


const Registro = ({ onRegisterUser }) => {
  const user = useSelector(state => state.user.user)
  
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate('/dashboard/')
    }
  }, [user, navigate])

  const onHandleClick = ()=>{
    navigate('/login/')
  }  


  return (
    <>
      <section className="d-flex flex-md justify-content-center login ">
        <div className="card p-4 shadow-lg rounded bg-white">
          <Title
            title="Registro"
            className="text-center font-weight-bolder pb-3"
          />
          <hr />
          <RegistroForm onRegisterUser={onRegisterUser} />
          <Button
            cta="Volver"
            className="bg-danger"
            classColor={"btn-primary"}
            onHandleClick={onHandleClick}
          />
        </div>
      </section>
    </>
  );
};

export default Registro;
