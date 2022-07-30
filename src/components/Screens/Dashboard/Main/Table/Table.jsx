import TableItemRow from "./TableItemRow";
import {
  setTransacciones,
  setTransaccionesDescripcion,
} from "../../../../../app/slices/transaccionesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getTransacciones } from "../../../../../services/crypto";

// 0: {id: 1, usuarios_id: 3, tipo_operacion: 1, moneda: 7, cantidad: 20, …}

const Table = () => {
  const user = useSelector((state) => state.user.user);
  const dispatchTransacciones = useDispatch();
  const dispatchTransaccionesDescripcion = useDispatch();
  const transacciones = useSelector(
    (state) => state.transacciones.transacciones
  );
  const monedas = useSelector((state) => state.monedas.monedas);

  const transaccionesDescripcion = useSelector(
    (state) => state.transacciones.transaccionesDescripcion
  );

  useEffect(() => {
    try {
      (async () => {
        const { transacciones } = await getTransacciones(user.id, user.apiKey);
        dispatchTransacciones(setTransacciones(transacciones));
        const transaccionesAux = transacciones.map((transaccion) => {
          const monedaAux = monedas.filter(
            (moneda) => moneda.id == transaccion.moneda
          );
          const [moneda] = monedaAux;

          return {
            tipo_operacion:
              transaccion.tipo_operacion == 1 ? "Compra" : "Venta",
            moneda: monedaAux.nombre,
            cantidad: transaccion.cantidad,
          };
        });

        debugger;
        dispatchTransaccionesDescripcion(
          setTransaccionesDescripcion(transaccionesAux)
        );
        debugger;
        console.log("TransaccionesDesc", transaccionesDescripcion);
      })();
    } catch (error) {
      alert.error("Ha ocurrido un error al cargar transacciones", error);
    }
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tipo Operación</th>
          <th scope="col">Moneda</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {transaccionesDescripcion.map((transaccion) => (
          <TableItemRow transaccion={transaccion} />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
