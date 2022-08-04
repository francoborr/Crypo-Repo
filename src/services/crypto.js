const CRYPTO = "https://crypto.develotion.com";

//* Usuarios
async function registro(user, password, idDepartamento, idCiudad) {
  try{

  
  const response = await fetch(`${CRYPTO}/usuarios.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      usuario: user,
      password: password,
      idDepartamento: idDepartamento,
      idCiudad: idCiudad,
    }),
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error en el registro de usuario",
      status: response.status,
    });
  }
  }catch(error){
    return Promise.reject(error);
  }

}

async function login(user, pass) {
  try {    
    const response = await fetch(`${CRYPTO}/login.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuario: user,
        password: pass,
      }),
    });

    
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      return Promise.reject({
        message: "Error en el login de usuario",
        status: response.status,
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

//*Departamentos
async function getDepartamentos() {
  const response = await fetch(
    `${CRYPTO}/departamentos.php`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    {
      credentials: "include",
    }
  );
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    return Promise.reject({
      message: "Error al obtener departamentos",
      status: response.status,
    });
  }
}

//cambiar nombre??
async function getCiudad(idDepartamento) {
    try{
    const response = await fetch(
      `${CRYPTO}/ciudades.php?idDepartamento=${idDepartamento}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
      {
        credentials: "include",
      }
    );
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      return Promise.reject({
        message: "Error al obtener la ciudad",
        status: response.status,
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }    
}

async function getCiudades() {
    try{
    const response = await fetch(
      `${CRYPTO}/ciudades.php`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
      {
        credentials: "include",
      }
    );
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      return Promise.reject({
        message: "Error al obtener ciudades",
        status: response.status,
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }    
}
//* Transacciones

async function getTransacciones(idUsuario, apikey) {
  try{
      const response = await fetch(
      `${CRYPTO}/transacciones.php?idUsuario=${idUsuario}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json", apikey: apikey },
      }
    ); 
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {      
      return Promise.reject({        
        message: "Error al obtener la transacciones",
        status: response.status,
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }    
}

async function postTransaccion(
  apiKey,
  userId,
  tipoOperacion,
  moneda,
  cantidad,
  valorActual
) {
  try{ 
      const response = await fetch(`${CRYPTO}/transacciones.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: apiKey,
      },
      body: JSON.stringify({
        idUsuario: userId,
        tipoOperacion: tipoOperacion,
        moneda: moneda,
        cantidad: cantidad,
        valorActual: valorActual,
      }),
    });    
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      return Promise.reject({
        message: "Error al agregar la transaccion",
        status: response.status,
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }    
}

//*  Monedas
async function getMonedas(apiKey) {
  try{
    const response = await fetch(
      `${CRYPTO}/monedas.php`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apiKey: apiKey,
        },
      },
      {
        credentials: "include",
      }
    );
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      return Promise.reject({
        message: "Error al obtener monedas",
        status: response.status,
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }    
}

//*Usuarios por departamentos
async function getUsuariosPorDepartamentos() {
    try{
    const response = await fetch(`${CRYPTO}/usuariosPorDepartamento.php`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      return Promise.reject({
        message: "Error al obtener usuarios por departamentos",
        status: response.status,
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }    
}

export {
  registro,
  login,
  getDepartamentos,
  getCiudad,
  getCiudades,
  getTransacciones,
  postTransaccion,
  getMonedas,
  getUsuariosPorDepartamentos,
};
