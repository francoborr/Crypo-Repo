const TableRecomendationsItemRow = ({monedaTransaccion, action}) => {    
  return (
<tr className="table">
    
  <td>{monedaTransaccion.moneda.nombre}</td>
  <td>{monedaTransaccion.transaccion.valorActual}</td>
  <td>{monedaTransaccion.moneda.cotizacion}</td>
  <td>{action}</td>

</tr>
  )
}
export default TableRecomendationsItemRow