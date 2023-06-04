import { useState } from "react";
import { Link } from "react-router-dom";
const URL = "http://localhost:8000/register";
export default function Register() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, apellido, email, pass }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container vh-100 m-auto d-flex justify-content-center align-items-center ">
      <div className="register p-5">
        <h1 className="p-3 mb-2 text-secondary">Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group d-flex gap-2 mb-2">
            <input
              className="form-control"
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              className="form-control"
              type="text"
              placeholder="Apellido"
              name="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-2">
            <input
              className="form-control "
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group ">
            <input
              className="form-control"
              type="password"
              placeholder="Contraseña"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary  m-3">
            Registrar
          </button>
        </form>
        <Link to="/Login">¿Ya Tenés Cuenta?</Link>
      </div>
    </div>
  );
}
