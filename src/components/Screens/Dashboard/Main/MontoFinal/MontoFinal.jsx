import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMontoFinal } from "../../../../../app/slices/transaccionesSlice";

const MontoFinal = () => {
  const dispatchMontoFinal = useDispatch();
  const transacciones = useSelector(
    (state) => state.transacciones.transacciones
  );
  const montoFinal = useSelector((state) => state.transacciones.montoFinal);

  // cantidad: 10
  // id: 886
  // moneda: 4
  // tipo_operacion: 2
  // usuarios_id: 650
  // valor_actual: 100

  useEffect(() => {
    let montoFinalAux = 0;
    if (transacciones.length != 0) {
      montoFinalAux = transacciones.reduce((a, b) => {
        let aux =
          b.tipo_operacion == 1
            ? a + Number(b.valor_actual) * Number(b.cantidad)
            : a - Number(b.valor_actual) * Number(b.cantidad);
        return Number(aux);
      }, 0);
    }
    dispatchMontoFinal(setMontoFinal(montoFinalAux));
  }, [transacciones]);

  return (    
    <>
      <h2 className="text-center">Monto final</h2>
      <h4 className={montoFinal < 0 ? "text-danger" : "text-success"}>
        ${montoFinal}
      </h4>
    </>
    
  );
};

export default MontoFinal;
