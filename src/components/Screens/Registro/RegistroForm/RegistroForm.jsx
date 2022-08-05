import Select from "../../../UI/Select";
import { useEffect, useRef } from "react";
import { getDepartamentos } from "../../../../services/crypto";
import { getCiudad } from "../../../../services/crypto";
import { registro } from "../../../../services/crypto";
import Button from "../../../UI/Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDepartamentos, setCiudades } from "../../../../app/slices/locationSlice";
import { setLoginUser} from "../../../../app/slices/userSlice"
import { setShowRegistration } from "../../../../app/slices/showRegistrationSlice";

const RegistroForm = () => {
  const inputUserName = useRef();
  const inpuUserPass = useRef();
  const dispatch = useDispatch();    
  const [deptoSel, setDeptoSel] = useState(0);
  const [ciudadSel, setCiudadSel] = useState(0);
  const departamentos = useSelector(
    (state) => state.location.departamentos
  );
  const  ciudades = useSelector(state => state.location.ciudades)

  useEffect(() => {
    try {
      (async () => {
        const { departamentos } = await getDepartamentos();
        dispatch(setDepartamentos(departamentos));        
      })();
    } catch (error) {
      alert("Ha ocurrido un error", error);
    }
  }, []);





  useEffect(() => {
    try {
      (async () => {
        const { ciudades } = await getCiudad(deptoSel);
        dispatch(setCiudades(ciudades));        
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
        dispatch(setLoginUser({ apiKey: apiKey, id: id }))
        dispatch(setShowRegistration(false))

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
