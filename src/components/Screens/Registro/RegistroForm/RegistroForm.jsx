import Select from "../../../UI/Select";
import { useEffect, useRef } from "react";
import { getDepartamentos } from "../../../../services/crypto";
import { getCiudades } from "../../../../services/crypto";
import { registro } from "../../../../services/crypto";
import Button from "../../../UI/Button/Button";
import { useState } from "react";

const RegistroForm = ({onRegistroUser}) =>{
  const inputUserName = useRef();
  const inpuUserPass = useRef();
  //let departamentos;
  // const departamentoId = useRef();
  // const ciudadId = useRef();
  const [departamentos, setDepartamentos] = useState([]);  
  const [ciudades, setCiudades] = useState([]);
  useEffect(()=>{
    try{
        (async()=>{
            const {departamentos} = await getDepartamentos();
             setDepartamentos(departamentos)
            console.log("Dentro ", departamentos)
        })()
    }catch(error){
        alert("Ha ocurrido un error", error);
    }
  },[])

  
  // (async () => {
  //   const { apiKey } = await login('crypto', 'crypto');
  //   const { monedas } = await getCoins(apiKey);
  //   console.log(monedas);
  // })();

  // async () => {   
  //  await getDepartamentos();
  // }

  useEffect((departamentoId)=>{

  }, [departamentos])



  

  const onHandleRegistro = async e =>{
    e.preventDefault();
    const userName = inputUserName.current.value;
    const password = inpuUserPass.current.value;
    // const departamentoId = departamentoId.current.value;
    // const ciudadId = ciudadId.current.value;

    if(userName !== undefined && password !== undefined  
      // && departamentoId !== undefined && ciudadId !== undefined
      ){
        try{
          const {apiKey, id} = await registro(userName, password);
          
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
      <input className='form-control' type='password' ref={inpuUserPass} /> 
      <br/>
       <Select elements={departamentos}  />
      <br/>
      {/* <Select elements={getCiudades} /> */}
      <Button cta="Registrar" classColor={"btn-primary"}></Button>
    </form>
</>

  )
}

export default RegistroForm;