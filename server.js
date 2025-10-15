import express from "express";

const app = express();

// Ruta principal
app.get("/", async (req, res) => {
  console.log("Solicitud recibida. Iniciando espera de 7 minutos...");

  // Esperar 7 minutos (420,000 milisegundos)
  await new Promise((resolve) => setTimeout(resolve, 6 * 60 * 1000));

  console.log("Finalizó la espera. Enviando respuesta...");
  res.send("Hola 👋, esta respuesta se demoró 7 minutos en llegar.");
});

// Render asigna el puerto en la variable PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
