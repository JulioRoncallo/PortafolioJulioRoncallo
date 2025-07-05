import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='container-header'>
        <h3 className='class-logo'>{'{JulioRoncallo.code}'}</h3>

        <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
        >
            ☰
        </button>

        <nav className={`nav-header ${menuOpen ? 'open' : ''}`}>
            <Link className='link-header' to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link className='link-header' to="/about" onClick={() => setMenuOpen(false)}>Sobre Mi</Link>
            <Link className='link-header' to="/experience" onClick={() => setMenuOpen(false)}>Experiencia</Link>
            <Link className='link-header' to="/projects" onClick={() => setMenuOpen(false)}>Proyectos</Link>
            <Link className='link-header' to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </nav>
        </div>
    );
    };

export default Header;
