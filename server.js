import express from "express";

const app = express();

// 🔹 Ruta de salud rápida (Render la usa para detectar el puerto)
app.get("/health", (req, res) => {
  res.send("OK");
});

// 🔹 Ruta principal (espera 7 minutos)
app.get("/", async (req, res) => {
  // 🔹 Indicamos que usaremos transferencia chunked
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  res.write("Procesando solicitud...\n");

  // 🔹 Enviamos un pequeño chunk cada 30 segundos
  const keepAlive = setInterval(() => {
    res.write(`Still working... ${new Date().toISOString()}\n`);
  }, 30000); // 30 segundos

  // 🔹 Simulamos un proceso largo (6 minutos)
  await new Promise((resolve) => setTimeout(resolve, 360000));

  clearInterval(keepAlive);
  res.write("\n✅ Proceso completado después de 6 minutos.\n");
  res.end(); // Cerramos la respuesta
});

// 🔹 Render asigna el puerto automáticamente
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Servidor escuchando en el puerto ${PORT}`);
});
