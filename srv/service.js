

/*const axios = require('axios');

const url = "https://tehsu161.serv.dev.dc.es.telefonica/sap/opu/odata/sap/ZPIFA_SRV/ZPIFA(A0CIIM_CALMONTH='12.2024',A0CIIM_CALMONTHTo='12.2024',A0CISO_RECONTRACT='',A0CISO_RECONTRACTTo='',A0CISO_CONTRTYPE='',A0CISO_CONTRTYPETo='',A0CISO_RECDTYPE='',A0CISO_RECDTYPETo='',ZVAR_M_COMP_CODE='')/Results";

const config = {
  method: 'GET',
  url: url,
  headers: {
    'Authorization': 'Basic SUFfVEVTVDpBY2Nlc28xMjMrYWI=',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  proxy: false, // Esto desactiva el proxy
};


axios(config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      console.error('Error en la respuesta del servidor:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor:', error.request);
    } else {
      console.error('Error al configurar la solicitud:', error.message);
    }
  });*/




/*const axios = require('axios');

const odataEndpoint = "https://tehsu161.serv.dev.dc.es.telefonica/sap/opu/odata/sap/ZPIFA_SRV/"; // URL del endpoint OData
const username = "IA_TEST"; 
const password = "Acceso123+ab"; 

// Consulta OData
const query = `
  ZPIFA(A0CIIM_CALMONTH='12.2024',
        A0CIIM_CALMONTHTo='12.2024',
        A0CISO_RECONTRACT='',
        A0CISO_RECONTRACTTo='',
        A0CISO_CONTRTYPE='',
        A0CISO_CONTRTYPETo='',
        A0CISO_RECDTYPE='',
        A0CISO_RECDTYPETo='',
        ZVAR_M_COMP_CODE='')/Results
`;

// Realizar la solicitud al servicio OData
async function queryOData() {
  try {
    const response = await axios.get(`${odataEndpoint}${query.trim()}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      },
      proxy: false, // No usar proxy
    });

    // Mostrar los datos obtenidos
    console.log('Datos obtenidos:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Error al ejecutar la consulta OData:');
    
    if (error.response) {
      console.error('Estado HTTP:', error.response.status);
      console.error('Mensaje:', error.response.statusText);
      console.error('Datos de error:', error.response.data);
    } else if (error.request) {
      // Sin respuesta del servidor
      console.error('No se recibió respuesta del servidor:', error.request);
    } else if (error.code === 'ENOTFOUND') {
      // Error en la resolución del DNS
      console.error('Dirección no encontrada. Verifica la URL del endpoint.');
    } else {
      // Otros errores
      console.error('Error desconocido:', error.message);
    }
  }
}

// Ejecutar la consulta
queryOData();
*/

/*const axios = require('axios');

const odataEndpoint = "https://tehsu161.serv.dev.dc.es.telefonica/sap/opu/odata/sap/ZPIFA_SRV/"; 
const username = "IA_TEST"; 
const password = "Acceso123+ab"; 

// Consulta OData
const query = ` 
  ZPIFA(A0CIIM_CALMONTH='12.2024',
        A0CIIM_CALMONTHTo='12.2024',
        A0CISO_RECONTRACT='',
        A0CISO_RECONTRACTTo='',
        A0CISO_CONTRTYPE='',
        A0CISO_CONTRTYPETo='',
        A0CISO_RECDTYPE='',
        A0CISO_RECDTYPETo='',
        ZVAR_M_COMP_CODE='')/Results
`;

const proxy = {
  host: "127.0.0.1",
  port: 8887,
  protocol: "http",
};

// Función para realizar la consulta OData
async function queryOData() {
  try {
    // Generar la URL completa
    const fullUrl = `${odataEndpoint}${query.trim()}`;

    // Opciones de la solicitud HTTP
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      },
    };

    if (proxy.host && proxy.port) {
      requestOptions.proxy = proxy;
    }

    // Realizar la solicitud
    console.log('Realizando consulta a:', fullUrl);
    const response = await axios.get(fullUrl, requestOptions);

    // Mostrar los datos obtenidos
    console.log('Datos obtenidos:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    // Manejo de errores
    console.error('Error al ejecutar la consulta OData:');
    if (error.response) {
      // Respuesta del servidor con error
      console.error('Estado HTTP:', error.response.status);
      console.error('Mensaje:', error.response.statusText);
      console.error('Datos de error:', error.response.data);
    } else if (error.request) {
      // Sin respuesta del servidor
      console.error('No se recibió respuesta del servidor:', error.request);
    } else {
      // Otro tipo de error
      console.error('Error:', error.message);
    }
  }
}

// Ejecutar la consulta
queryOData();*/





/*const axios = require('axios');

const odataEndpoint = "https://tehsu161.serv.dev.dc.es.telefonica/sap/opu/odata/sap/ZPIFA_SRV/"; // URL del endpoint OData
const username = "IA_TEST"; 
const password = "Acceso123+ab"; 

// Consulta OData
const query = `
  ZPIFA(A0CIIM_CALMONTH='12.2024',
        A0CIIM_CALMONTHTo='12.2024',
        A0CISO_RECONTRACT='',
        A0CISO_RECONTRACTTo='',
        A0CISO_CONTRTYPE='',
        A0CISO_CONTRTYPETo='',
        A0CISO_RECDTYPE='',
        A0CISO_RECDTYPETo='',
        ZVAR_M_COMP_CODE='')/Results
`;

// Realizar la solicitud al servicio OData
async function queryOData() {
  try {
    const response = await axios.get(`${odataEndpoint}${query}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      },
      proxy: false, 

    });

    // Mostrar los datos obtenidos
    console.log('Datos obtenidos:', response.data);
  } catch (error) {
    console.error('Error al ejecutar la consulta OData:', error.message);
  }
}

// Ejecutar la consulta
queryOData();

*/


/*const axios = require('axios');

// Datos de acceso directos a la base de datos OData
const odataEndpoint = "https://tehsu161.serv.dev.dc.es.telefonica/sap/opu/odata/sap/ZPIFA_SRV/"; // URL del endpoint OData
const username = "IA_TEST";
const password = "Acceso123+ab"; 

// Función para realizar la consulta al OData
async function queryOData() {
  try {
    // Construir la consulta
    const query = `
      ZPIFA(A0CIIM_CALMONTH='12.2024',
            A0CIIM_CALMONTHTo='12.2024',
            A0CISO_RECONTRACT='',
            A0CISO_RECONTRACTTo='',
            A0CISO_CONTRTYPE='',
            A0CISO_CONTRTYPETo='',
            A0CISO_RECDTYPE='',
            A0CISO_RECDTYPETo='',
            ZVAR_M_COMP_CODE='')/Results
    `;

    // Crear el encabezado de autenticación básica
    const authHeader = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

    // Realizar la solicitud al servicio OData
    const response = await axios({
      method: 'get',
      url: `${odataEndpoint}${query}`, // Construir la URL completa
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader, // Autenticación básica
      },
    });

    // Procesar la respuesta
    console.log('Datos obtenidos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al ejecutar la consulta OData:', error.message);
    throw error;
  }
}

// Ejecutar la consulta OData
(async () => {
  try {
    const odataResults = await queryOData();
    console.log('Resultados de la consulta:', odataResults);
  } catch (error) {
    console.error('Error al obtener los resultados:', error.message);
  }
})();
*/



/*const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Cargar el archivo default-env.json
const projectRoot = path.resolve(__dirname, '..');
const envPath = path.join(projectRoot, 'default-env.json');

if (fs.existsSync(envPath)) {
  const env = require(envPath);
  process.env.VCAP_SERVICES = JSON.stringify(env.VCAP_SERVICES);
  console.log('VCAP_SERVICES cargado desde default-env.json');
} else {
  console.error('Archivo default-env.json no encontrado en la ruta:', envPath);
  process.exit(1); // Salir del programa si no se encuentra el archivo
}

// Obtener credenciales del servicio Destination desde VCAP_SERVICES
const services = JSON.parse(process.env.VCAP_SERVICES);
const destinationConfig = services.destination?.find(dest => dest.name === 'destination_test');

if (!destinationConfig) {
  console.error('No se encontró la configuración para "destination_test" en VCAP_SERVICES.');
  process.exit(1);
}

// Obtener la URL, usuario y contraseña de las credenciales
const { url, username, password } = destinationConfig.credentials;

// Realizar una solicitud al servicio Destination
async function connectToDestination() {
  try {
    const response = await axios({
      method: 'get',
      url, // URL del destino
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
      },
    });

    console.log('Respuesta del destino:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al conectar con el destino:', error.message);
    throw error;
  }
}

// Ejecutar la conexión
(async () => {
  try {
    const destinationData = await connectToDestination();
    console.log('Datos del destino obtenidos con éxito:', destinationData);
  } catch (error) {
    console.error('No se pudieron obtener los datos del destino:', error.message);
  }
})();
*/


/*const cds = require('@sap/cds');

(async () => {
  try {
    console.log('Iniciando conexión al servicio Destination...');

    // Intentar conectar al servicio 'destination_test'
    const destinationService = await cds.connect.to('destination_test');

    if (destinationService) {
      console.log('Conexión establecida con destination_test.');
      console.log('Configuración del servicio Destination:', destinationService.options);

      // Realizar una consulta simple para validar la conexión
      const testResponse = await destinationService.tx().run(SELECT.one.from('ZPIFA'));

      if (testResponse) {
        console.log('Respuesta de la consulta simple:', JSON.stringify(testResponse, null, 2));
      } else {
        console.log('La consulta simple no devolvió datos.');
      }
    } else {
      console.error('No se pudo establecer la conexión con el servicio Destination.');
    }
  } catch (error) {
    console.error('Error conectando al servicio Destination:', error.message);

    // Registro detallado del error
    if (error.reason) {
      console.error('Razón del error:', error.reason.message || error.reason);
      if (error.reason.request) {
        console.error('Detalles de la solicitud fallida:', JSON.stringify(error.reason.request, null, 2));
      }
    }

    console.error('Pila de errores:', error.stack);
  }
})();*/


/*const cds = require('@sap/cds');

(async () => {
  try {
    console.log('Iniciando el servicio...');

    // Intentar conectarse al servicio 'destination_test'
    const destinationService = await cds.connect.to('destination_test');

    // Validar que la conexión fue exitosa
    if (destinationService) {
      console.log('Conexión exitosa al servicio destination_test.');
    } else {
      console.log('La conexión al servicio destination_test no fue exitosa.');
    }

    
  } catch (error) {
    console.error('Error al conectar con el servicio destination_test:', error.message);
  }
})();

*/

/*const cds = require('@sap/cds');

(async () => {
  try {
    console.log('Iniciando conexión al servicio Destination...');

    // Intentar conectar al servicio 'destination_test'
    const destinationService = await cds.connect.to('destination_test');

    if (destinationService) {
      console.log('Conexión establecida con destination_test.');
      console.log('Configuración del servicio Destination:', destinationService.options);


      const testResponse = await destinationService.tx().run(SELECT.one.from('ZPIFA'));

      if (testResponse) {
        console.log('Respuesta de la consulta simple:', JSON.stringify(testResponse, null, 2));
      } else {
        console.log('La consulta simple no devolvió datos.');
      }
    } else {
      console.error('No se pudo establecer la conexión con el servicio Destination.');
    }
  } catch (error) {
    console.error('Error conectando al servicio Destination:', error.message);

    // Registro detallado del error
    if (error.reason) {
      console.error('Razón del error:', error.reason.message || error.reason);
      if (error.reason.request) {
        console.error('Detalles de la solicitud fallida:', JSON.stringify(error.reason.request, null, 2));
      }
    }

    console.error('Pila de errores:', error.stack);
  }
})();*/



/*const cds = require('@sap/cds');

(async () => {
  try {
    console.log('Iniciando el servicio...');

    // Intentar conectarse al servicio 'destination_test'
    const destinationService = await cds.connect.to('destination_test');

    // Validar que la conexión fue exitosa
    if (destinationService) {
      console.log('Conexión exitosa al servicio destination_test.');
    } else {
      console.log('La conexión al servicio destination_test no fue exitosa.');
    }
  } catch (error) {
    console.error('Error al conectar con el servicio destination_test:', error.message);
  }
})();
*/




/*const cds = require('@sap/cds');

(async () => {
  try {
    console.log('Iniciando el servicio...');

    // Conectarse al servicio 'destination_test'
    const destinationService = await cds.connect.to('destination_test');
    console.log('Conexión establecida con destination_test.');

    // Ejecutar la consulta
    const response = await destinationService.tx().run(
      SELECT.from('ZPIFA').columns('Resultsit')
    );

    // Verificar y loguear la respuesta
    if (response && response.length > 0) {
      console.log('Respuesta del servicio destination_test:', JSON.stringify(response, null, 2));
    } else {
      console.log('El servicio no devolvió datos o la respuesta está vacía.');
    }
  } catch (error) {
    console.error('Error al conectar o consultar el servicio destination_test:', error.message);
  }
})();*/




/*const cds = require('@sap/cds');
const xsenv = require('@sap/xsenv');

// Cargar las variables del archivo default-env.json
xsenv.loadEnv();

console.log('VCAP_SERVICES: jol', JSON.stringify(process.env.VCAP_SERVICES, null, 2));

module.exports = async function () {
  console.log('Iniciando el servicio...');

  // Cargar destino explícitamente
  const destinationService = await cds.connect.to('destination_test');







  this.on('READ', "https://tehsu161.serv.dev.dc.es.telefonica/sap/opu/odata/sap/ZPIFA_SRV/ZPIFA(A0CIIM_CALMONTH='12.2024',A0CIIM_CALMONTHTo='12.2024',A0CISO_RECONTRACT='',A0CISO_RECONTRACTTo='',A0CISO_CONTRTYPE='',A0CISO_CONTRTYPETo='',A0CISO_RECDTYPE='',A0CISO_RECDTYPETo='',ZVAR_M_COMP_CODE='')/Results", async (req) => {
    console.log('Solicitud de lectura recibida para CompanyCodes');
    try {
      const result = await destinationService.run(req.query);

      console.log('Resultado de la consulta:', result);
      return result;
    } catch (error) {
      console.error('Error al leer CompanyCodes:', error);
      req.reject(500, 'No se pudo leer CompanyCodes desde destination_test');
    }
  });
};*/
