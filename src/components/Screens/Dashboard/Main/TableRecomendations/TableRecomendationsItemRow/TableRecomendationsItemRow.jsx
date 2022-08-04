const TableRecomendationsItemRow = ({monedaTransaccion, action}) => {    
  return (
<tr className="table">
    
  <td>{monedaTransaccion.moneda.nombre}</td>
  <td>{monedaTransaccion.transaccion.valor_actual}</td>
  <td>{monedaTransaccion.moneda.cotizacion}</td>
  <td>{action}</td>

</tr>
  )
}
export default TableRecomendationsItemRow