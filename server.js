import express from "express";

const app = express();

// 🔹 Ruta de salud rápida (Render la usa para detectar el puerto)
app.get("/health", (req, res) => {
  res.send("OK");
});

// 🔹 Ruta principal (espera 7 minutos)
app.get("/", async (req, res) => {
  console.log("Solicitud recibida. Esperando 7 minutos...");

  // Esperar 7 minutos = 420,000 ms
  await new Promise((resolve) => setTimeout(resolve, 420000));

  console.log("Finalizó la espera. Enviando respuesta...");
  res.send("Hola 👋, esta respuesta se demoró 7 minutos en llegar.");
});

// 🔹 Render asigna el puerto automáticamente
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Servidor escuchando en el puerto ${PORT}`);
});
