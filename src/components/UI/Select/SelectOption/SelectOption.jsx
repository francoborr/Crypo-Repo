const SelectOption = ({elements})=>{
    return (
        elements.map(element => <option value={element.id} key={element.id}>{element.nombre}</option>)
    )
}


export default SelectOption;