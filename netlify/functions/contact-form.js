exports.handler = async (event, contact) => {
  switch(event.httpMethod) {
    case "GET":
      const params = JSON.parse(event.body);
      console.log("Recibí una solicitud", params);
      return;
    default:
      console.log("405 - Método no soportado");
      return {
        statusCode: 405,
        message: "Método no soportado"
      };
  }
}
