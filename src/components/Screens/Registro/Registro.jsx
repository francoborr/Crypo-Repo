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
      <section className="m-5">
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
