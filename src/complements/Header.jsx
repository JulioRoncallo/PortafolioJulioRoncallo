import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

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
        {[
            { to: '/', label: 'Inicio' },
            { to: '/about', label: 'Sobre Mi' },
            { to: '/experience', label: 'Experiencia' },
            { to: '/projects', label: 'Proyectos' },
            { to: '/contact', label: 'Contacto' },
        ].map(({ to, label }) => {
            const isActive = location.pathname === to;

            return (
            <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`link-header link-underline ${isActive ? 'link-header-active' : ''}`}
            >
                {label}
            </Link>
            );
        })}
    </nav>
        </div>
    );
    };

export default Header;
