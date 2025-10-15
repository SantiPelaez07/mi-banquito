import { Link } from "react-router-dom";
import './Login.css'
export function Login() {
    return (
        <>
            <div className="card">
                <h2>Iniciar Sesión</h2>
                <div className="title">

                </div>
                <div className="head-card">
                    <h3>Ingresa tu nombre de usuario</h3>
                    <input type="text"
                        placeholder="Usuario"
                        required />
                    <h3>Ingresa tu contraseña</h3>
                    <input type="password"
                        placeholder="Contraseña"
                        required />
                    <button className="buttonLogin">Iniciar Sesión</button>
                </div>
                <div className="footer-card">
                    <Link to="/">
                        <div className="password-lost">
                            <p>
                                ¿Olvidaste tu contraseña?
                            </p>
                            <h4>
                                ¿Aún no tienes una cuenta?
                                <Link to="/register"><span className="register">Regístrate</span></Link>
                            </h4>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}