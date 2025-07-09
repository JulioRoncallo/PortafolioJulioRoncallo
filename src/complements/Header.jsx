import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/header.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <div className={styles['container-header']}>
        <h3 className={styles['class-logo']}>{'{JulioRoncallo.code}'}</h3>

        <button
            className={styles["menu-toggle"]}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            ☰
        </button>


    <nav className={`${styles['nav-header']} ${menuOpen ? styles.open : ''}`}>
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
                className={`
                    ${styles['link-header']}
                    ${styles['link-underline']}
                    ${isActive ? styles['link-header-active'] : ''}
                `}
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
