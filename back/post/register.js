import bcrypt from "bcrypt";
import connection from "../connect/db.js";

const register = async (req, res) => {
  console.log(req.body);
  const { nombre, apellido, email, pass } = req.body;
  let passwordHash = await bcrypt.hash(pass, 8); //encriptar contraseña
  const query = `SELECT * FROM usuarios WHERE nombre = "${nombre}" OR email = "${email}"`;
  connection(query)
    .then((results) => {
      // verifico si el usuario existe
      if (results.length > 0) {
        console.log(results);
        res.json({ error: "El usuario ya existe!" });
      } else {
        // insertar el usuario a la base de datos
        const insertQuery = `INSERT INTO usuarios (nombre, apellido, email, pass) VALUES ('${nombre}','${apellido}','${email}','${passwordHash}')`;

        connection(insertQuery)
          .then((results) => {
            res.json({ message: "el usuario se registro con exito!" });
          })
          .catch((err) => {
            console.error(err);
            res.json({ error: "Error al insertar el usuario" });
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.json({ error: "error al consultar la base de datos" });
    });
};
export default register;
