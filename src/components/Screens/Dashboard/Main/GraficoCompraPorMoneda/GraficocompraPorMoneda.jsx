import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCompraPorMoneda } from "../../../../../app/slices/monedasSlice";
import Title from "../../../../UI/Title";


const GraficoCompraPorMoneda = () => {
    const dispatchCompraPorMoneda = useDispatch();

  const transacciones = useSelector(
    (state) => state.transacciones.transacciones
  );
//   const compras = useSelector((state) => state.transacciones.cantidadCompras);
//   const ventas = useSelector((state) => state.transacciones.cantidadVentas);

const monedas = useSelector((state)=> state.monedas.monedas)
const comprasPorMoneda = useSelector((state)=> state.monedas.comprasPorMoneda);


  useEffect(() => {
    const ComprasPorMonedaAux = monedas.map((mon)=>{
        const {id} = mon;        
        const transaccionesAux = transacciones.filter(tran=> tran.moneda == id && tran.tipo_operacion==1)            
        const comprasPesos = transaccionesAux.reduce((a, b) => {
            let aux =a + Number(b.valor_actual) * Number(b.cantidad)
            return Number(aux);
          }, 0);        
        return {moneda:mon, total:comprasPesos}
    })    
    dispatchCompraPorMoneda(setCompraPorMoneda(ComprasPorMonedaAux))
    console.log(ComprasPorMonedaAux)
  }, [transacciones]);

  // const obj = {
  //   options: {
  //     chart: {
  //       id: "apexchart-example",
  //     },
  //     xaxis: {        
  //       categories: comprasPorMoneda.map(moneda=>moneda.moneda.nombre)
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Total",
  //       data: comprasPorMoneda.map(moneda=> moneda.total)
  //     },
  //   ],
  // };

  
    const obj = {
      series: comprasPorMoneda.map(moneda=> moneda.total),
      options: {
        chart: {
          height: 350,
          type: 'pie'
        },
        labels: comprasPorMoneda.map(moneda=>moneda.moneda.nombre),
        legend: {
          position: 'bottom'
        }
      }
    }
  

  return (
    <>
        <Title title={'Compras por moneda'}></Title>
            <Chart
        options={obj.options}
        series={obj.series}
        type="pie"
        width={500}
        height={320}
        />
    </>
  );
};
export default GraficoCompraPorMoneda;
