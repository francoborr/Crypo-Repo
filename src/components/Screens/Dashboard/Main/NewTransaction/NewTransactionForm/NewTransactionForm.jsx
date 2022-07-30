import Select from "../../../../../UI/Select";
import Button from "../../../../../UI/Button/Button";
import { useEffect, useState, useRef} from "react";
import { getMonedas,postTransaccion } from "../../../../../../services/crypto";
import { useSelector, useDispatch } from "react-redux";
import { setMonedas } from "../../../../../../app/slices/monedasSlice";


const NewTransactionForm = ()=>{

    const userLogged = useSelector(state => state.user.user);
    const {apiKey, id} = userLogged;
    const monedasSelect = useSelector(state => state.monedas.monedas)
    const dispatchMonedas = useDispatch();
    const [idmonedaSel, setIdMonedaSel] = useState(0);
    const [monedaSeleccionada, setMonedaSeleccionada]=useState(null)
    const cantidad = useRef();
    const compraVenta = [{id:1,nombre:"Comprar"}, {id:2,nombre:"Vender"}]
    const [selCompraVenta, setSelCompraVenta] = useState(0);
    
    
    useEffect(()=>{
        try{
            (async()=>{
                const {monedas} = await getMonedas(apiKey);
                console.log("monedas ",monedas)
                dispatchMonedas(setMonedas(monedas));
            })()
        }catch(error){
            alert("Ha ocurrido un error", error);
        }

    },[])
    useEffect(()=>{
       const monedaAux = monedasSelect.filter(moneda => moneda.id==idmonedaSel)
       
       const [moneda] = monedaAux
       console.log("Moneda sel", moneda) 
    
       if(moneda != undefined && moneda.id!=0){
        setMonedaSeleccionada(moneda)
        console.log("Monedaaaaa" , moneda, monedaSeleccionada)
       }

    },[idmonedaSel])



    const onHandleNewTransaction= async e=>{
        e.preventDefault();
        
        console.log("nueva transaccion",id, idmonedaSel, cantidad.current.value)
        if(cantidad != 0 && idmonedaSel != 0 && selCompraVenta!=0){
            try{
                await postTransaccion(apiKey, id,selCompraVenta, idmonedaSel, cantidad.current.value,monedaSeleccionada.cotizacion);
            }catch(error){
                console.log("Ha ocurrido un error", error)
            }
        }
    }

    return(
        <>
       <form>     
      <br/>
        <Select elements={compraVenta} setSelect={setSelCompraVenta} />
        <Select elements={monedasSelect} setSelect={setIdMonedaSel} />
        {monedaSeleccionada?(<p>Precio: {monedaSeleccionada.cotizacion}</p>):(<p></p>)}      
      <br/>
      <label>Cantidad</label>
      <br />
      <input type="number" id="cantidad" ref={cantidad} />
      <Button cta="Comprar"  onHandleClick={onHandleNewTransaction}></Button>
    </form>
        </>
    )
}

export default NewTransactionForm;