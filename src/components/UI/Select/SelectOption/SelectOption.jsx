const SelectOption = ({elements})=>{
    return (
        elements.map(element => <option value={element.id}>{element.nombre}</option>)
    )
}


export default SelectOption;