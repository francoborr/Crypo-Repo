import TableItemRow from "./TableItemRow";
import {
  setTransacciones,
  setTransaccionesDescripcion,
} from "../../../../../app/slices/transaccionesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTransacciones } from "../../../../../services/crypto";

// 0: {id: 1, usuarios_id: 3, tipo_operacion: 1, moneda: 7, cantidad: 20, …}

const Table = () => {
  const user = useSelector((state) => state.user.user);
  const transacciones = useSelector(
    (state) => state.transacciones.transacciones
  );
  const monedas = useSelector((state) => state.monedas.monedas);
  const transaccionesDescripcion = useSelector(
    (state) => state.transacciones.transaccionesDescripcion
  );

  const dispatchTransacciones = useDispatch();
  const dispatchTransaccionesDescripcion = useDispatch();

  useEffect(() => {
    try {
      (async () => {
        const { transacciones } = await getTransacciones(user.id, user.apiKey);
        dispatchTransacciones(setTransacciones(transacciones));
      })();
    } catch (error) {
      alert.error("Ha ocurrido un error al cargar transacciones", error);
    }
  }, []);

  useEffect(() => {
    
    const transaccionesAux = transacciones.map((transaccion) => {
      const monedaAux = monedas.filter(
        (moneda) => moneda.id == transaccion.moneda
      );
      const [moneda] = monedaAux;

      const nombre = moneda != undefined ? moneda.nombre : "cargando";
      return {
        id: transaccion.id,
        tipo_operacion: transaccion.tipo_operacion == 1 ? "Compra" : "Venta",
        moneda: nombre,
        cantidad: transaccion.cantidad,
        valor_actual: transaccion.valor_actual,
      };
    });

    dispatchTransaccionesDescripcion(
      setTransaccionesDescripcion(transaccionesAux)
    );
    
  }, [monedas, transacciones]);

  return (
    <table className="w-100 text-center table-sm table-bordered table-hover ">
      <thead className="text-uppercase text-white text-lg bg-dark">
        <tr className="">
          <th scope="col">Tipo Operación</th>
          <th scope="col">Moneda</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Valor del momento</th>
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
