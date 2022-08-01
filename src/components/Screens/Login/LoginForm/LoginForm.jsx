import Button from "../../../UI/Button/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../../../services/crypto";
import { setLoginUser } from "../../../../app/slices/userSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const inputUserName = useRef();
  const inputPassword = useRef();

  const dispatch = useDispatch();

  const onHandleLogin = async (e) => {
    e.preventDefault();
    const userName = inputUserName.current.value;
    const password = inputPassword.current.value;

    if (userName !== "" && password !== "") {
      try {
        const { apiKey, id } = await login(userName, password);
        const user = { apiKey: apiKey, id: id };
        dispatch(setLoginUser(user));
      } catch (error) {
        alert("Ha ocurrido un error ", error);
      }
    } else {
      alert("Complete los campos");
    }
  };

  const [verBtnLogin, setVerBtnLogin] = useState(false);
  const veBtnLogin = () => {
    console.log("inputUserName", inputUserName.current.value);
    console.log("inputPassword", inputPassword.current.value);
    if (
      inputPassword.current.value != "" &&
      inputUserName.current.value != ""
    ) {
      setVerBtnLogin(true);
      console.log("Cambio a true");
    } else {
      setVerBtnLogin(false);
      console.log("Cambio a false");
    }
    console.log("VerBTNLOGIN", verBtnLogin);
  };

  useEffect(() => {
    veBtnLogin();
  }, [inputUserName, inputPassword]);

  return (
    <>
      <form className="">
        <label className="mt-2 font-weight-bold">Username</label>

        <input
          className="form-control mt-2 "
          type="text"
          ref={inputUserName}
          onChange={veBtnLogin}
        />

        <label className="mt-2 font-weight-bold">Password</label>

        <input
          className="form-control mt-2"
          type="password"
          ref={inputPassword}
          onChange={veBtnLogin}
        />
        <br />

        {verBtnLogin ? (
          <Button
            cta="Login"
            className="w-100 bg-blue"
            onHandleClick={onHandleLogin}
          />
        ) : (
          false
        )}
      </form>
    </>
  );
};

export default LoginForm;
