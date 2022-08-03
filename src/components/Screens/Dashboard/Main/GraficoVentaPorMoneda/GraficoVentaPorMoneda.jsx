import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setVentaPorMoneda } from "../../../../../app/slices/monedasSlice";
import Title from "../../../../UI/Title";


const GraficoVentaPorMoneda = () => {
    const dispatchVentaPorMoneda = useDispatch();

  const transacciones = useSelector(
    (state) => state.transacciones.transacciones
  );
//   const compras = useSelector((state) => state.transacciones.cantidadCompras);
//   const ventas = useSelector((state) => state.transacciones.cantidadVentas);

const monedas = useSelector((state)=> state.monedas.monedas)
const ventasPorMoneda = useSelector((state)=> state.monedas.ventasPorMoneda);


  useEffect(() => {
    const ventasPorMonedaAux = monedas.map((mon)=>{
        const {id} = mon;        
        const transaccionesAux = transacciones.filter(tran=> tran.moneda == id && tran.tipo_operacion==2)            
        const ventaPesos = transaccionesAux.reduce((a, b) => {
            let aux =a + Number(b.valor_actual) * Number(b.cantidad)
            return Number(aux);
          }, 0);        
        return {moneda:mon, total:ventaPesos}
    })    
    dispatchVentaPorMoneda(setVentaPorMoneda(ventasPorMonedaAux))
    
  }, [transacciones]);

  const obj = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {        
        categories: ventasPorMoneda.map(moneda=>moneda.moneda.nombre)
      },
    },
    series: [
      {
        name: "Total",
        data: ventasPorMoneda.map(moneda=> moneda.total)
      },
    ],
  };

  return (
    <>
        <Title title={'Ventas por moneda'}></Title>
            <Chart
        options={obj.options}
        series={obj.series}
        type="bar"
        width={500}
        height={320}
        />
    </>
  );
};
export default GraficoVentaPorMoneda;
