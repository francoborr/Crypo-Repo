import NewTransaction from "./NewTransaction";
import Table from "./Table";
import MontoFinal from "./MontoFinal";
const Main = () => {
  return (
    <>
      <div className="d-flex justify-content-around h-25">
        <MontoFinal></MontoFinal>
        <NewTransaction></NewTransaction>
      </div>
      <Table></Table>
    </>
  );
};

export default Main;
