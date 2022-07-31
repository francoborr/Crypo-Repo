import Title from "../../../../UI/Title";
import NewTransactionForm from "./NewTransactionForm";

const NewTransaction = () => {
  return (
    <>
      <div className="card p-4 m-4 rounded shadow-lg ">
        <Title title="Nueva transaccion" className="text-center" />
        <section className="card-body">
          <NewTransactionForm></NewTransactionForm>
        </section>
      </div>
    </>
  );
};

export default NewTransaction;
