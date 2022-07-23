import RegistroForm from "./RegistroForm/RegistroForm";
import Title from "../../UI/Title/Title";

const Registro = ({onRegisterUser}) => {
  return(
    <>
      <section className='d-flex flex-md justify-content-center login'>
        
        <div className='card'>
            <Title title='Registro'/>
            <RegistroForm onRegisterUser={onRegisterUser}/>
        </div>
        </section>
    </>
  )
}

export default Registro;