import TableItemRow from "./TableItemRow";

const Table = ({ transacciones }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Moneda</th>
          <th scope="col">CompraVenta</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio Original</th>
        </tr>
      </thead>
      <tbody>
        {transacciones.map((transaccion) => (
          <TableItemRow transaccion={transaccion} />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
