import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setMonedasConTodasTransacciones
} from "../../../../../app/slices/monedasSlice";
import { useState } from "react";
import TableRecomendationsItemRow from "./TableRecomendationsItemRow";


const TableRecomendations = () => {

  const dispatchMonedasConTodasTransacciones = useDispatch();
  const [monedasUltimaTransaccion, setMonedasUltimaTransaccion] = useState([]);
  


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
    dispatchMonedasConTodasTransacciones(setMonedasConTodasTransacciones(monedasCompradas))
  },[transacciones])



  
  useEffect(()=>{
   const monedasUltimaTransaccionAux = monedasConSusTransacciones.map((monedaTran)=>{       
        return {moneda : monedaTran.moneda, transaccion:monedaTran.transacciones[monedaTran.transacciones.length-1]}
    })
    setMonedasUltimaTransaccion(monedasUltimaTransaccionAux)
    console.log("pepito",monedasUltimaTransaccionAux)
  },[monedasConSusTransacciones])  



  return(
    <table>
      <thead>
      <tr>
      <th>Moneda</th>
      <th>Precio comprado</th>
      <th>Precio Actual</th>
      <th>Recomendacion</th>

     </tr>
      </thead>
      <tbody>
        {monedasUltimaTransaccion.map((monedaTransaccion)=>{
        <TableRecomendationsItemRow monedaTransaccion={monedaTransaccion}/>
      //console.log("entre", monedaTransaccion)
        })}
      </tbody>
      
      </table>

  )

  


}
export default TableRecomendations