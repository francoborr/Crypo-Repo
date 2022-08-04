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
      <div className='container'>
       <div className='row'>
        <div className="d-flex justify-content-around">
            <MontoFinal></MontoFinal>
            <div className="card p-4 m-4 rounded-lg align-self-start shadow-lg rounded">
              <TableRecomendations></TableRecomendations>
          </div>    
          <NewTransaction></NewTransaction>          
        </div>  
        </div> 
      </div>

        <div className="d-flex justify-content-around">
            {/* <Chart></Chart>         */}
          <div className="card p-2 m-1 rounded-lg align-self-start shadow-lg rounded">
            <GraficoVentaPorMoneda></GraficoVentaPorMoneda>
          </div>          

          <div className="card p-2 m-1 rounded-lg align-self-start shadow-lg rounded">
            <GraficoCompraPorMoneda></GraficoCompraPorMoneda>
          </div>
          <div className="card p-2 m-1 rounded-lg align-self-start shadow-lg rounded">
              <GraficoParaUnaMoneda></GraficoParaUnaMoneda>
            </div>
          <div>

          </div>
        </div>
        <div className='container'>
          <div className='row p-4'>
            <Table ></Table>
          </div>
        </div>
    </>
  );
};

export default Main;
