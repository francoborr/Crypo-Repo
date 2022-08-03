import { useSelector, useDispatch } from "react-redux";
import Select from "../../../../UI/Select";
import Chart from "react-apexcharts";
import { setTransaccionesPorMoneda } from "../../../../../app/slices/monedasSlice";
import { useEffect, useState } from "react";

const GraficoParaUnaMoneda= ()=>{
    const monedasSelect = useSelector((state) => state.monedas.monedas);
    const transacciones = useSelector(
        (state) => state.transacciones.transacciones
      );


    const dispatchTransaccionesPorMoneda = useDispatch();
    const TransaccionesPorMoneda = useSelector((state)=> state.monedas.transaccionesPorMoneda)
    const [idMdaSeleccionada, setIdMdaSeleccionada] = useState();

    const setIdMonedaSelAux = (id) => {
        const TransaccionesPorMonedaAux = transacciones.filter(tran => tran.moneda == id)
        console.log("tranPorMoneda", TransaccionesPorMonedaAux)  
        dispatchTransaccionesPorMoneda(setTransaccionesPorMoneda(TransaccionesPorMonedaAux))      
        console.log("tran por mda", TransaccionesPorMoneda)
        setIdMdaSeleccionada(id);
    };

    useEffect(() => {
      setIdMonedaSelAux(idMdaSeleccionada)
    }, [transacciones]);


    


      const obj = {
        options: {
          chart: {
            id: "apexchart-example",
          },
          xaxis: {        
            categories: TransaccionesPorMoneda.map(tran => tran.id)//ventasPorMoneda.map(moneda=>moneda.moneda.nombre)
          },
        },
        series: [
          {
            name: "Total",
            data: TransaccionesPorMoneda.map(tran => tran.valor_actual)//ventasPorMoneda.map(moneda=> moneda.total)
          },
        ],
      };      


    return(
        <>
        <Select
        className="mb-3 align-self-start"
        elements={monedasSelect}
        setSelect={setIdMonedaSelAux}
      />

      <Chart
      options={obj.options}
      series={obj.series}
      type="bar"
      width={500}
      height={320}
      />      

        </>

    )
}

export default GraficoParaUnaMoneda;