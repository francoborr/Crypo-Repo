import Select from "../../../../../UI/Select";
import Button from "../../../../../UI/Button/Button";
import { useEffect, useRef } from "react";
import {postTransaccion } from "../../../../../../services/crypto";
import { useSelector, useDispatch } from "react-redux";

import { addTransaccion } from "../../../../../../app/slices/transaccionesSlice";
import { setLogoutUser } from "../../../../../../app/slices/userSlice";
import { useState } from "react";

const NewTransactionForm = () => {
  const userLogged = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const { apiKey, id } = userLogged;
  const monedas = useSelector((state) => state.monedas.monedas); 
 
  const [idMonedaSeleccionada, setIdMonedaSeleccionada] = useState(0); 
  const [idCompraVenta, setIdCompraVenta]   = useState(0);

  const [monedaSeleccionada, setMonedaSeleccionada] = useState(null);

  useEffect(() => {    
    const monedaAux = monedas.filter(
      (moneda) => moneda.id == idMonedaSeleccionada
    );
    const [moneda] = monedaAux;
    setMonedaSeleccionada(moneda)
  }, [idMonedaSeleccionada]);

  const cantidad = useRef();

  const compraVenta = [
    { id: 1, nombre: "Comprar" },
    { id: 2, nombre: "Vender" },
  ];

  
  


  const onHandleNewTransaction = async (e) => {
    e.preventDefault();
    
    if(cantidad.current.value <= 0 || cantidad.current.value %1 != 0 ){
        alert( "La cantidad debe ser mayor a 0 y entera")
    }else{
      if (
        idMonedaSeleccionada != 0 &&
        idCompraVenta != 0
      ) {
          try {          
            const promesa = await postTransaccion(
              apiKey,
              id,
              idCompraVenta,
              idMonedaSeleccionada,
              cantidad.current.value,
              monedaSeleccionada.cotizacion
            );
            alert(promesa.mensaje);
            if (promesa.codigo == 200) {
              const tran = {
                id: promesa.idTransaccion,
                tipo_operacion: idCompraVenta,
                moneda: idMonedaSeleccionada,
                cantidad: cantidad.current.value,
                valor_actual: monedaSeleccionada.cotizacion,
              };
              dispatch(addTransaccion(tran));                              
            }
          } catch (error) {       
            
            alert("Ha ocurrido un error: "+ error.message);
            const {status} = error
            if(status===401) dispatch(setLogoutUser())
          }
      }else{
        alert("Complete los datos")
      }
    }
    
    
  };

  return (
    <>
      <form>
        <label >Comprar/Vender</label>
        <br />
        <Select
          className="mb-3"
          elements={compraVenta}
          setSelect={setIdCompraVenta}
        />
        <br />
        <label >Moneda</label>
        <br />
        <Select
          className="mb-3"
          elements={monedas}
          setSelect={setIdMonedaSeleccionada}
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
          cta={`${idCompraVenta == 1 ? "Comprar" : "Vender"} `}
          classColor={`${
            idCompraVenta == 1
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
