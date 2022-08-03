import NewTransaction from "./NewTransaction";
import Table from "./Table";
import MontoFinal from "./MontoFinal";
import Chart from "./Chart";
import GraficoCompraPorMoneda from "./GraficoCompraPorMoneda";

const Main = () => {
  return (
    <>
      <div className="d-flex justify-content-around">
        <Chart></Chart> 
        <MontoFinal></MontoFinal>

        <div className="card">
          <GraficoCompraPorMoneda></GraficoCompraPorMoneda>
        </div>


        <NewTransaction></NewTransaction>
      </div>
      <Table></Table>
    </>
  );
};

export default Main;
