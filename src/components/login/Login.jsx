import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import { useState } from "react";

export function Login({ onLogin }) {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const handlerLogin = () => {
        onLogin();
        navigate("/home");
    };

    localStorage.setItem("username", username);

    return (
        <div className="card">
            <h2>Iniciar Sesión</h2>

            <div className="head-card">
                <h3>Ingresa tu nombre de usuario</h3>
                <input id="username" type="text" placeholder="Usuario" required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <h3>Ingresa tu contraseña</h3>
                <input type="password" placeholder="Contraseña" required onChange={username} />

                <button className="buttonLogin" onClick={handlerLogin}>
                    Iniciar Sesión
                </button>
            </div>

            <div className="footer-card">
                <Link to="/">
                    <p>¿Olvidaste tu contraseña?</p>
                </Link>

                <h4>
                    ¿Aún no tienes una cuenta?
                    <Link to="/register">
                        <span className="register">Regístrate</span>
                    </Link>
                </h4>
            </div>
        </div>
    );
}