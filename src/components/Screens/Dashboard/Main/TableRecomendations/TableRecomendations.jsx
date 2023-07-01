import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setMonedasConTodasTransacciones
} from "../../../../../app/slices/monedasSlice";
import { useState } from "react";
import TableRecomendationsItemRow from "./TableRecomendationsItemRow";
import Title from "../../../../UI/Title";


const TableRecomendations = () => {

  const dispatch = useDispatch();
  
  const [recomendacionesCompra, setRecomendacionesCompra] = useState([])
  const [recomendacionesVenta, setRecomendacionesVenta] = useState([])
  


  const monedas = useSelector((state) => state.monedas.monedas)
  const transacciones = useSelector((state) => state.transacciones.transacciones)
  const monedasConSusTransacciones = useSelector ((state)=> state.monedas.monedasConSusTransacciones)

  useEffect(()=>{    

    const trnPorMoneda = monedas.map( moneda =>{
        const transaccionesAux = transacciones.filter(tran => tran.moneda == moneda.id)
        return {moneda: moneda, transacciones:transaccionesAux}
    })

    const monedasCompradas = trnPorMoneda.filter(moneda => {
      return moneda.transacciones.length>0
    })
    dispatch(setMonedasConTodasTransacciones(monedasCompradas))

    
  },[transacciones, monedas])



  
   useEffect(()=>{
   const monedasUltimaTransaccionAux = monedasConSusTransacciones.map((monedaTran)=>{       
        return {moneda : monedaTran.moneda, transaccion:monedaTran.transacciones[monedaTran.transacciones.length-1]}
    })       
    const recomendacionesCompraAux = monedasUltimaTransaccionAux.filter(moneda => {
      return moneda.moneda.cotizacion < moneda.transaccion.valorActual && moneda.transaccion.tipoOperacion==2
    })
    const recomendacionesVentaAux = monedasUltimaTransaccionAux.filter(moneda => {
      return moneda.moneda.cotizacion > moneda.transaccion.valorActual && moneda.transaccion.tipoOperacion==1 
    })
    setRecomendacionesCompra(recomendacionesCompraAux);
    setRecomendacionesVenta(recomendacionesVentaAux);
  },[monedasConSusTransacciones])  



  return(
    <> 
    <Title title={"Recomendaciones"}></Title>
    
    <table className="w-100 text-center table-sm table-bordered table-hover ">
      <thead className="text-uppercase text-white text-lg bg-dark">
      <tr>
      <th>Moneda</th>
      <th>$ TRN</th>
      <th>$ Actual</th>
      <th>Recomendación</th>

     </tr>
      </thead>
      { <tbody>
        {recomendacionesCompra.map((monedaTransaccion)=>(
        <TableRecomendationsItemRow key={monedaTransaccion.transaccion.id} monedaTransaccion={monedaTransaccion} action="Comprar"/>      
        ))}

        {recomendacionesVenta.map((monedaTransaccion)=>(
        <TableRecomendationsItemRow key={monedaTransaccion.transaccion.id} monedaTransaccion={monedaTransaccion} action ="Vender"/>      
        ))}

      
      </tbody> }
      
      </table>
      </>

  )

  


}
export default TableRecomendations