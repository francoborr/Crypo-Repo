import SelectOption from "./SelectOption"

const Select = ({elements}) =>{
    return(
        <select >
            <SelectOption elements={elements}></SelectOption>
        </select>
    )
}

export default Select;