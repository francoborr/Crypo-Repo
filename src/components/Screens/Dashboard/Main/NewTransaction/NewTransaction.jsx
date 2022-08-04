import Title from "../../../../UI/Title";
import NewTransactionForm from "./NewTransactionForm";

const NewTransaction = () => {
  return (
    <>
      
        <Title title="Nueva transaccion" className="text-center" />
        <hr />
        <section className="card-body">
          <NewTransactionForm></NewTransactionForm>
        </section>
      
    </>
  );
};

export default NewTransaction;
