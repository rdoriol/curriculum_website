exports.handler = async (event, contact) => {
  switch(event.httpMethod) {
    case "GET":
      const params = JSON.parse(event.body);
      console.log("Recibí una solicitud", params);
      return;
    default:
      return {
        statusCode: 405,
        message: "Método no soportado"
      };
  }
}
