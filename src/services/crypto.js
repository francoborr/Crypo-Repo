const CRYPTO = "https://crypto.develotion.com/";

//* USER
async function registro(user, password, idDepartamento, idCiudad) {
  let response = await fetch(
    `${CRYPTO}/usuarios.php`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    },
    {
      body: JSON.stringify({
        user,
        password,
        idDepartamento,
        idCiudad,
      }),
      credentials: "include",
    }
  );
  if (!response.ok) {
    let error = await response.json();
    throw error;
  }
  return response;
}

async function login(user, password) {
  let response = await fetch(
    `${CRYPTO}/login.php`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    },
    {
      body: JSON.stringify({
        user,
        password,
      }),
      credentials: "include",
    }
  );
  if (!response.ok) {
    let error = await response.json();
    throw error;
  }
  return response;
}

//*Departamentos
async function getDepartamentos() {
  let response = await fetch(
    `${CRYPTO}/departamentos.php`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    {
      credentials: "include",
    }
  );
  if (!response.ok) {
    let error = await response.json();
    throw error;
  }
  return response;
}

async function getCiudades() {
  let response = await fetch(
    `${CRYPTO}/ciudades.php`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    {
      credentials: "include",
    }
  );
  if (!response.ok) {
    let error = await response.json();
    throw error;
  }
  return response;
}
//*
