import NewTransaction from "./NewTransaction";
import Table from "./Table";
import MontoFinal from "./MontoFinal";
import Chart from "./Chart";
import GraficoCompraPorMoneda from "./GraficoCompraPorMoneda";
import GraficoVentaPorMoneda from "./GraficoVentaPorMoneda/GraficoVentaPorMoneda";
import GraficoParaUnaMoneda from "./GrficoParaUnaMoneda"
import TableRecomendations from "./TableRecomendations/TableRecomendations";

const Main = () => {

    //Transacciones
    //monedas
    //transacciones por moneda






  return (
    <>
      <div className="d-flex justify-content-around">
          <NewTransaction></NewTransaction>
          <GraficoParaUnaMoneda></GraficoParaUnaMoneda>
          <MontoFinal></MontoFinal>
      </div>    
      <div className="d-flex justify-content-around">
          {/* <Chart></Chart>         */}
        <div className="card p-4 m-4 rounded-lg align-self-start shadow-lg rounded">
          <GraficoVentaPorMoneda></GraficoVentaPorMoneda>
        </div>          

        <div className="card p-4 m-4 rounded-lg align-self-start shadow-lg rounded">
          <GraficoCompraPorMoneda></GraficoCompraPorMoneda>
        </div>
        <div>
        <TableRecomendations></TableRecomendations>
        </div>
      </div>

      <Table></Table>
    </>
  );
};

export default Main;
