exports.handler = async (event, contect) => {
  switch(event.httpMethod) {
    case "POST":
      const params = event.body;
      console.log("Recibí una solicitud", params);
      return;
    default:
      return {
        statusCode: 405,
        message: "Método no soportado"
      };
  }
}
