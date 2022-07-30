import Button from "../../UI/Button/Button";
import LoginForm from "./LoginForm";
import Title from "../../UI/Title";

const Login = () =>{
    return(
        <>
            <section className='d-flex flex-md justify-content-center login'>
                <div className='card'>
                    <Title title="Login" /> 
                    <section className='card-body'>
                        <LoginForm/>
                        {/* <Button onHandleClick={onRegisterUser} cta="Registrar" classColor={"btn-primary"}></Button> */}
                    </section>
                </div>
            </section>
        </>
        )
}

export default Login;