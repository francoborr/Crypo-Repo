import { useDispatch } from "react-redux";
const TableItemRow = ({ transaccion }) => {
  const dispatch = useDispatch();
  return (
    <tr
      className={` table-${
        transaccion.tipo_operacion === "Compra" ? "success" : "danger"
      }`}
    >
      <td>{transaccion.tipo_operacion}</td>
      <td>{transaccion.moneda}</td>
      <td>{transaccion.cantidad}</td>
      <td>{transaccion.valor_actual}</td>
    </tr>
  );
};

export default TableItemRow;
