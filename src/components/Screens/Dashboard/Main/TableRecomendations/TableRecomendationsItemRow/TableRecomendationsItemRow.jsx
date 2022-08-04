const TableRecomendationsItemRow = ({monedaTransaccion}) => {
  debugger
  console.log("transaccion en item row", monedaTransaccion)
  return (
<tr className="table">
    
  <td>{monedaTransaccion.moneda.nombre}</td>
  <td>{monedaTransaccion.transaccion.valor_actual}</td>
  <td>{monedaTransaccion.moneda.precio_actual}</td>
  <td>Comprar</td>

</tr>
  )
}
export default TableRecomendationsItemRow