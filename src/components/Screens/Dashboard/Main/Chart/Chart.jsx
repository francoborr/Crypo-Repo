import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCantidadCompras } from "../../../../../app/slices/transaccionesSlice";
import { setCantidadVentas } from "../../../../../app/slices/transaccionesSlice";

const ChartForm = () => {
  const dispachCantidadCompras = useDispatch();
  const dispachCantidadVentas = useDispatch();

  const transacciones = useSelector(
    (state) => state.transacciones.transacciones
  );
  const compras = useSelector((state) => state.transacciones.cantidadCompras);
  const ventas = useSelector((state) => state.transacciones.cantidadVentas);

  useEffect(() => {
    let compras = 0;
    let ventas = 0;
    if (transacciones.length != 0) {
      transacciones.forEach((transaccion) => {
        transaccion.tipo_operacion == 1 ? compras++ : ventas++;
      });
    }
    dispachCantidadCompras(setCantidadCompras(compras));
    dispachCantidadVentas(setCantidadVentas(ventas));
  }, [transacciones]);

  const obj = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: ["Compras", "Ventas"],
      },
    },
    series: [
      {
        name: "Portafolio",
        data: [compras, ventas],
      },
    ],
  };

  return (
    <Chart
      options={obj.options}
      series={obj.series}
      type="bar"
      width={500}
      height={320}
    />
  );
};
export default ChartForm;
