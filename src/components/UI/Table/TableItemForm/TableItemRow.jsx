import Button from '../Button/Button'
const TableItemRow = ({ transaccion }) => {
  return (
    <tr>
      <td>{transaccion.moneda}</td>
      <td>{transaccion.fecha}</td>
      <td>{transaccion.cantidad}</td>
      <td>{transaccion.precio}</td>
      <td>
        <Button cta={'Delete'} classColor='btn-danger' />
      </td>
    </tr>
  )
}

export default TableItemRow
