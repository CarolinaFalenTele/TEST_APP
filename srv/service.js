const cds = require('@sap/cds');
const xsenv = require('@sap/xsenv');

// Cargar las variables del archivo default-env.json
xsenv.loadEnv();

console.log('VCAP_SERVICES: jol', JSON.stringify(process.env.VCAP_SERVICES, null, 2));

module.exports = async function () {
  console.log('Iniciando el servicio...');

  // Cargar destino explícitamente
  const destinationService = await cds.connect.to('destination_test');
  console.log('Conexión exitosa a destination_test');

  this.on('READ', 'CompanyCodes', async (req) => {
    console.log('Solicitud de lectura recibida para CompanyCodes');
    try {
      const result = await destinationService.run(req.query);
      return result;
    } catch (error) {
      console.error('Error al leer CompanyCodes:', error);
      req.reject(500, 'No se pudo leer CompanyCodes desde destination_test');
    }
  });
};
