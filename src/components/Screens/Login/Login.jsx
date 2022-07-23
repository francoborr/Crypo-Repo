import Button from "../../UI/Button/Button";
import LoginForm from "./LoginForm";
import Title from "../../UI/Title";

const Login = ({onLoginUser, onRegisterUser}) =>{
    return(
        <>
            <section className='d-flex flex-md justify-content-center login'>
                <div className='card'>
                    <Title title="Login" /> 
                    <section className='card-body'>
                        <LoginForm onLoginUser={onLoginUser} />
                        <Button onRegisterUser={onRegisterUser} cta="Registrar" classColor={"btn-primary"}></Button>
                    </section>
                </div>
            </section>
        </>
        )
}

export default Login;