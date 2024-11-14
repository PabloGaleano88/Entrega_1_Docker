import express from "express";
const app = express();
const port = 8010;

app.get("/", (req, res) => {
  try {
    if (req.query.firstname && req.query.lastname) {
      const { firstname, lastname } = req.query;
      res.send(`
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenida</title>
            <style>
              body { font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; }
              h1 { color: #4CAF50; }
              p { font-size: 1.2em; }
            </style>
          </head>
          <body>
            <h1>Bienvenido ${firstname} ${lastname}</h1>
            <p>Esta es una prueba desde Docker. ¡Esperamos que disfrutes el uso de esta aplicación!</p>
          </body>
          </html>
        `);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bienvenida</title>
           <style>
              body { font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px; }
              h1 { color: #4CAF50; }
              p { font-size: 1.2em; }
            </style>
        </head>
        <body>
          <h1>Bienvenido usuario</h1>
          <h2>Aún no conocemos tu nombre, dinos como te llamas con las queries en la URL</h2>
          <p>Esta es una prueba desde Docker. Por favor, prueba una query ingresando:</p>
          <h3>http://localhost:8010?firstname=<b>tunombre</b>&lastname=<b>tuapellido</b></h3>
        </body>
        </html>
      `);
    }
  } catch (error) {
    console.error("Error en el servidor:", error);
    res.status(500).send("Hubo un error en el servidor.");
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
