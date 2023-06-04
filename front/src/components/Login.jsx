import { useState } from "react";
import { Link } from "react-router-dom";

const URL = " http://localhost:8000/login";
export default function Login() {
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
        body: JSON.stringify({ email, pass }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center ">
      <div className="register p-5">
        <h1 className="mb-2 text-secondary">Login</h1>
        <form onSubmit={handleSubmit} className="w-100 p-2">
          <div className="form-group d-flex gap-2 mb-2">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group d-flex gap-2 mb-2">
            <input
              className="form-control"
              type="password"
              placeholder="Contraseña"
              name="Contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary m-3">
            Iniciar Sesión
          </button>
        </form>
        <Link to="/recuperar-pass">¿Olvidaste tu Contraseña?</Link>
      </div>
    </div>
  );
}
