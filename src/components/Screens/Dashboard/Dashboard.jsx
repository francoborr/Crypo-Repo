import Header from "./Header";
import Main from "./Main/Main";
import { useEffect } from "react";
import { getTransacciones } from "../../../services/crypto";
import { useDispatch, useSelector } from "react-redux";
import { setTransacciones } from "../../../app/slices/transaccionesSlice";
import { setLogoutUser } from "../../../app/slices/userSlice";
import { getMonedas } from "../../../services/crypto";
import { setMonedas } from "../../../app/slices/monedasSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);


  useEffect(() => {
    try {
      (async () => {
        try{
        const promesa= await getTransacciones(user.id, user.apiKey);
        const { transacciones } = promesa;
        dispatch(setTransacciones(transacciones));
        }catch(error){
          alert("Ha ocurrido un error: "+ error.message);
          const {status} = error
          if(status===401)dispatch(setLogoutUser())
        }
      })();
    } catch (error) {
      alert("Ha ocurrido un error al cargar transacciones", error);
    }
  }, []);


  useEffect(() => {
    try {
      (async () => {
        const { monedas } = await getMonedas(user.apiKey);        
        dispatch(setMonedas(monedas));
      })();
    } catch (error) {
      alert("Ha ocurrido un error", error);
    }
  }, []);

  return (
    <>
      <Header />

      <Main></Main>
    </>
  );
};

export default Dashboard;
