import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
    return (
        <>
            <div className='container-header'>
                <div>
                <h3 className='class-logo'>{'{JulioRoncallo.code}'}</h3>
                </div>
                <nav className='nav-header'>
                    <Link className='link-header' to="/">Inicio</Link>
                    <Link className='link-header' to="/about">Sobre Mi</Link>
                    <Link className='link-header' to="/experience">Experiencia</Link>
                    <Link className='link-header' to="/projects">Proyectos</Link>
                    <Link className='link-header' to="/contact">Contacto</Link>
                </nav>
            </div>
        </>
    )
}

export default Header
