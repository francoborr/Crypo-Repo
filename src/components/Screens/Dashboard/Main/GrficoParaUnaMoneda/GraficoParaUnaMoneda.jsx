import { useSelector, useDispatch } from "react-redux";
import Select from "../../../../UI/Select";
import Chart from "react-apexcharts";
import { setTransaccionesPorMoneda } from "../../../../../app/slices/monedasSlice";
import { useEffect, useState } from "react";
import Title from "../../../../UI/Title";

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
        dispatchTransaccionesPorMoneda(setTransaccionesPorMoneda(TransaccionesPorMonedaAux))              
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
        <div>
          <Title title={"Gráfico para una Moneda"}></Title>
        <Select
        className="mb-3 align-self-start"
        elements={monedasSelect}
        setSelect={setIdMonedaSelAux}
      />     
      {TransaccionesPorMoneda.length>0? <Chart
      options={obj.options}
      series={obj.series}
      type="bar"
      width={500}
      height={320}
      /> : <p>No hay datos</p>}
          
      </div>
        </>

    )
}

export default GraficoParaUnaMoneda;