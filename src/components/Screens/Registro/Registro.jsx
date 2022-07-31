import RegistroForm from "./RegistroForm/RegistroForm";
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setShowRegistration } from "../../../app/slices/showRegistrationSlice";

const Registro = ({ onRegisterUser }) => {
  const showRegistration = useSelector(
    (state) => state.showRegistration.showRegistration
  );
  const dispachShowRegistration = useDispatch();

  return (
    <>
      <section className="d-flex flex-md justify-content-center login">
        <div className="card">
          <Title title="Registro" />
          <RegistroForm onRegisterUser={onRegisterUser} />
          <Button
            cta="Volver"
            classColor={"btn-primary"}
            onHandleClick={() => {
              dispachShowRegistration(setShowRegistration(!showRegistration));
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Registro;
