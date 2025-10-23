import { Link, useNavigate } from 'react-router-dom'
import './NavbarUser.css'

export function NavbarUser({ onLogout }) {
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    if (typeof onLogout === 'function') onLogout()
    navigate('/login')
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="img">
          <img src="" alt="Logo" />
        </div>
        <ul className="options">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/perfil">Enviar dinero</Link></li>
          <li><Link to="/perfil">Retirar</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
          
          <li><button onClick={handleLogoutClick} className="logout-button">Cerrar sesión</button></li>
        </ul>
      </div>
    </nav>
  )
}

