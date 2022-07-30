import Select from "../../../UI/Select";
import { useEffect, useRef } from "react";
import { getDepartamentos } from "../../../../services/crypto";
import { getCiudades } from "../../../../services/crypto";
import { getCiudad } from "../../../../services/crypto";
import { registro } from "../../../../services/crypto";
import Button from "../../../UI/Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDepartamentos } from "../../../../app/slices/deptoSlice";

const RegistroForm = () =>{  
  const inputUserName = useRef();
  const inpuUserPass = useRef();
  const dispatchDepartamentos = useDispatch();

  //let departamentos;
  // const departamentoId = useRef();
  // const ciudadId = useRef();
  //const [departamentos, setDepartamentos] = useState([]);  
  const [ciudades, setCiudades] = useState([]);  
  const [deptoSel, setDeptoSel] = useState(0); 
  const [ciudadSel, setCiudadSel] = useState(0);
  const departamentos = useSelector(state => state.departamentos.departamentos);

  useEffect(()=>{
    try{
        (async()=>{
            const {departamentos} = await getDepartamentos();
             //setDepartamentos(departamentos)
             dispatchDepartamentos(setDepartamentos(departamentos));
             
            console.log("Dentro ", departamentos)            
        })()
    }catch(error){
        alert("Ha ocurrido un error", error);
    }
  },[])




  useEffect(()=>{  
    try{
      (async()=>{                 
          const {ciudades} = await getCiudad(deptoSel);
          setCiudades(ciudades) 
          console.log("Ciudades ", deptoSel, ciudades )         
          
      })()
    }catch(error){
      alert("Ha ocurrido un error", error);
  }

  }, [deptoSel])



  

  const onHandleRegistro = async e =>{
    e.preventDefault();
    const userName = inputUserName.current.value;
    const password = inpuUserPass.current.value;
    const departamentoId = deptoSel;
    const ciudadId = ciudadSel;

    if(userName !== undefined && password !== undefined  
      // && departamentoId !== undefined && ciudadId !== undefined
      ){
        try{
          const {apiKey, id} = await registro(userName, password, departamentoId, ciudadId);
          
        }catch(error){
          alert("Ha ocurrido un  error")
        }
        }else{
          alert("No pueden existir campos vacios")
      }
  }

  return(
<>
    <form>
      <label>Username</label>
      <br/>
      <input className='form-control' type='text' ref={inputUserName} /> 
      <br/>
      <label>Password</label>
      <br/>
      <input className='form-control' type='password' ref={inpuUserPass}  /> 
      <br/>
       <Select elements={departamentos} setSelect={setDeptoSel} />
      <br/>
       <Select elements={ciudades} setSelect={setCiudadSel} /> 
      <Button cta="Registrar" classColor={"btn-primary"} onHandleClick={onHandleRegistro}></Button>
    </form>
</>

  )
}

export default RegistroForm;