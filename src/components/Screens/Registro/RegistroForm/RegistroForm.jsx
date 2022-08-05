import Select from "../../../UI/Select";
import { useEffect, useRef } from "react";
import { getDepartamentos } from "../../../../services/crypto";
import { getCiudad } from "../../../../services/crypto";
import { registro } from "../../../../services/crypto";
import Button from "../../../UI/Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDepartamentos } from "../../../../app/slices/deptoSlice";
import { setLoginUser} from "../../../../app/slices/userSlice"
import { setShowRegistration } from "../../../../app/slices/showRegistrationSlice";

const RegistroForm = () => {
  const inputUserName = useRef();
  const inpuUserPass = useRef();
  const dispatchDepartamentos = useDispatch();
  const dispatchUsuario = useDispatch();
  const dispachShowRegistration = useDispatch();

  const [ciudades, setCiudades] = useState([]);
  const [deptoSel, setDeptoSel] = useState(0);
  const [ciudadSel, setCiudadSel] = useState(0);
  const departamentos = useSelector(
    (state) => state.departamentos.departamentos
  );

  useEffect(() => {
    try {
      (async () => {
        const { departamentos } = await getDepartamentos();
        dispatchDepartamentos(setDepartamentos(departamentos));        
      })();
    } catch (error) {
      alert("Ha ocurrido un error", error);
    }
  }, []);

  useEffect(() => {
    try {
      (async () => {
        const { ciudades } = await getCiudad(deptoSel);
        setCiudades(ciudades);        
      })();
    } catch (error) {
      alert("Ha ocurrido un error", error);
    }
  }, [deptoSel]);

  const onHandleRegistro = async (e) => {
    e.preventDefault();
    const userName = inputUserName.current.value;
    const password = inpuUserPass.current.value;
    const departamentoId = deptoSel;
    const ciudadId = ciudadSel;

    if (
      userName !== undefined &&
      password !== undefined &&
      departamentoId !== 0 &&
      ciudadId !== 0
    ) {
      try {
        const { apiKey, id } = await registro(
          userName,
          password,
          departamentoId,
          ciudadId
        );
        alert("Éxito al registrar usuario")
        dispatchUsuario(setLoginUser({ apiKey: apiKey, id: id }))
        dispachShowRegistration(setShowRegistration(false))

      } catch (error) {        
        alert(error.message);
      }
    } else {
      alert("No pueden existir campos vacios");
    }
  };

  return (
    <>
      <form className="">
        <label className="mt-2 font-weight-bold">Username</label>
        <br />
        <input className=" form-control" type="text" ref={inputUserName} />
        <br />
        <label className="mt-2 font-weight-bold">Password</label>
        <br />
        <input className="form-control" type="password" ref={inpuUserPass} />
        <br />
        <Select
          className="mb-3"
          elements={departamentos}
          setSelect={setDeptoSel}
        />
        <br />
        <Select className="mb-1" elements={ciudades} setSelect={setCiudadSel} />
        <br></br>
        <Button
          cta="Registrar"
          classColor={"btn-primary"}
          className="w-100 mt-3 mb-3"
          onHandleClick={onHandleRegistro}
        ></Button>
      </form>
    </>
  );
};

export default RegistroForm;
