import Title from "../../../../UI/Title"
import NewTransactionForm from "./NewTransactionForm";


const NewTransaction =()=>{
    return(
        <> 
            <section className='d-flex flex-md justify-content-center login'>
            <div className='card'>
                <Title title="Nueva transaccion" /> 
                <section className='card-body'>
                    <NewTransactionForm></NewTransactionForm>                    
                </section>
            </div>
        </section>
    </>
    )
}


export default NewTransaction
