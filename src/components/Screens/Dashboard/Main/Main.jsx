import NewTransaction from "./NewTransaction";
import Table from "./Table";
import MontoFinal from "./MontoFinal";
import Chart from "./Chart";

const Main = () => {
  return (
    <>
      <div className="d-flex justify-content-around">
        <Chart></Chart>
        <MontoFinal></MontoFinal>
        <NewTransaction></NewTransaction>
      </div>
      <Table></Table>
    </>
  );
};

export default Main;
