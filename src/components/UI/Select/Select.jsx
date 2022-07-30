import SelectOption from "./SelectOption"
//import { useRef } from "react";
import {useRef } from "react";

const Select = ({elements, setSelect}) =>{
    const optionSelected = useRef();
    const handleChange =()=>{
        //setDeptoSel(departamentoSeleccionado);
        console.log("Seleccionado ", optionSelected.current.value);
        setSelect(optionSelected.current.value);

    }


    return(
        <select onChange={handleChange} ref={optionSelected}> 
        <option value={0}>Seleccionar</option>           
            <SelectOption elements={elements}></SelectOption>
            
        </select>
    )
}

export default Select;