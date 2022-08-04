import Select from "../../../../../UI/Select";
import Button from "../../../../../UI/Button/Button";
import { useEffect, useRef } from "react";
import { getMonedas, postTransaccion } from "../../../../../../services/crypto";
import { useSelector, useDispatch } from "react-redux";
import {
  setMonedas,
  setMonedaSeleccionada,
  setIdMonedaSeleccionada,
  setSelCompraVenta,
} from "../../../../../../app/slices/monedasSlice";
import { addTransaccion } from "../../../../../../app/slices/transaccionesSlice";
import { setLogoutUser } from "../../../../../../app/slices/userSlice";

const NewTransactionForm = () => {
  const userLogged = useSelector((state) => state.user.user);
  const dispatchUser = useDispatch();

  const { apiKey, id } = userLogged;
  const monedasSelect = useSelector((state) => state.monedas.monedas);
  const dispatchAddTransacciones = useDispatch();

  const dispatchMonedas = useDispatch(); //Lista de monedas

  useEffect(() => {
    try {
      (async () => {
        const { monedas } = await getMonedas(apiKey);        
        dispatchMonedas(setMonedas(monedas));
      })();
    } catch (error) {
      alert("Ha ocurrido un error", error);
    }
  }, []);

  /****************************************************** */
  /*Para el manejo del id de la moneda seleccionada*/
  /********************************************************* */
  const dispatchIdMonedaSeleccionada = useDispatch();
  const idMonedaSeleccionada = useSelector(
    (state) => state.monedas.idMonedaSeleccionada
  );
  const setIdMonedaSelAux = (id) => {    
    dispatchIdMonedaSeleccionada(setIdMonedaSeleccionada(id));
  };

  //const [monedaSeleccionada, setMonedaSeleccionada] = useState(null);
  /****************************************************** */
  /*Para el manejo de la moneda seleccionada*/
  /********************************************************* */
  const dispatchMonedaSeleccionada = useDispatch();
  const monedaSeleccionada = useSelector(
    (state) => state.monedas.monedaSeleccionada
  );
  useEffect(() => {
    const monedaAux = monedasSelect.filter(
      (moneda) => moneda.id == idMonedaSeleccionada
    );
    const [moneda] = monedaAux;
    dispatchMonedaSeleccionada(setMonedaSeleccionada(moneda));
  }, [idMonedaSeleccionada]);

  const cantidad = useRef();
  const compraVenta = [
    { id: 1, nombre: "Comprar" },
    { id: 2, nombre: "Vender" },
  ];

  const dispatchCompraVenta = useDispatch();
  const selCompraVenta = useSelector((state) => state.monedas.selCompraVenta);
  const setSelCompraVentaAux = (idCompraVenta) => {
    dispatchCompraVenta(setSelCompraVenta(idCompraVenta));
  };

  const onHandleNewTransaction = async (e) => {
    e.preventDefault();
    if (
      cantidad.current.value != 0 &&
      idMonedaSeleccionada != 0 &&
      selCompraVenta != 0
    ) {
      try {
        const promesa = await postTransaccion(
          apiKey,
          id,
          selCompraVenta,
          idMonedaSeleccionada,
          cantidad.current.value,
          monedaSeleccionada.cotizacion
        );
        alert(promesa.mensaje);
        if (promesa.codigo == 200) {
          const tran = {
            id: promesa.idTransaccion,
            tipo_operacion: selCompraVenta,
            moneda: idMonedaSeleccionada,
            cantidad: cantidad.current.value,
            valor_actual: monedaSeleccionada.cotizacion,
          };
          dispatchAddTransacciones(addTransaccion(tran));
                      
        }
      } catch (error) {       
        
        alert("Ha ocurrido un error: "+ error.message);
        const {status} = error
        if(status===401)dispatchUser(setLogoutUser())
      }
    }
  };

  return (
    <>
      <form>
        <br />
        <Select
          className="mb-3"
          elements={compraVenta}
          setSelect={setSelCompraVentaAux}
        />
        <br />
        <Select
          className="mb-3"
          elements={monedasSelect}
          setSelect={setIdMonedaSelAux}
        />
        <div>
          {monedaSeleccionada ? (
            <p>Precio: {monedaSeleccionada.cotizacion}</p>
          ) : (
            <p></p>
          )}
        </div>

        <label>Cantidad</label>
        <br />
        <input type="number" id="cantidad" ref={cantidad} />
        <br />
        <Button
          className="mt-3 w-100 bg-success"
          cta={`${selCompraVenta == 1 ? "Comprar" : "Vender"} `}
          classColor={`${
            selCompraVenta == 1
              ? "bg-success text-white"
              : "bg-danger text-white"
          } `}
          onHandleClick={onHandleNewTransaction}
        ></Button>
      </form>
    </>
  );
};

export default NewTransactionForm;
