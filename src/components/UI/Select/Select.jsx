import SelectOption from "./SelectOption";
//import { useRef } from "react";
import { useRef } from "react";

const Select = ({ elements, setSelect, className }) => {
  const optionSelected = useRef();
  const handleChange = () => {        
    setSelect(optionSelected.current.value);
  };

  return (
    <select className={className} onChange={handleChange} ref={optionSelected}>
      <option value={0}>Seleccionar</option>
      <SelectOption elements={elements}></SelectOption>
    </select>
  );
};

export default Select;
