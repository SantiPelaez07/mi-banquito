import './Navbar.css'
import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav>
            <div className= "nav-container">
                <div className="img">
                    <img src="" alt="Logo" />
                </div>
                <ul className="options">
                    
                    <Link to = "/"><li className='inicio'>Inicio</li></Link>
                    <li>Nosotros</li>
                    <li>Servicios</li>
                    <li>Pagos</li>
                    <li>Contacto</li>
                    </ul>
                    <div className="login">
                        <Link to = "/login" >
                            <button className='buttonLogin'>Iniciar Sesión</button>
                        </Link>
                    </div>
                
            </div>
        </nav>
    )
}