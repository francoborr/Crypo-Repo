
const TableItemRow = ({ transaccion }) => { 
  return (
    <tr  className={`table-${transaccion.tipooperacion === "Compra" ? "success" : "danger"
      }`}
    >
      <td>{transaccion.tipooperacion}</td>
      <td>{transaccion.moneda}</td>
      <td>{transaccion.cantidad}</td>
      <td>{transaccion.valorActual}</td>
    </tr>
  );
};

export default TableItemRow;
