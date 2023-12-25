import { Link, NavLink } from 'react-router-dom';
import './styles.css';

export default function HeaderPf() {

    return (
        <header>
            
            <div className="pf-header-content">
                <div className="pf-black-square"></div>
                <Link to="/">
                    <div className="pf-dev-content">
                        <h1>Gabriel Leal</h1>
                        <p>/ dev backend</p>
                    </div>
                </Link>
            </div>

            <nav className="pf-nav-container">
                
                <NavLink to="/curriculum" className={({ isActive }) => isActive ? "pf-activated" : "pf-disabled"}>
                    <p>curriculo</p>
                </NavLink>

                <NavLink to="/project" className={({ isActive }) => isActive ? "pf-activated" : "pf-disabled"}>
                    <p>projetos</p>
                </NavLink>

                <NavLink to="/contact" className={({ isActive }) => isActive ? "pf-activated" : "pf-disabled"}>
                    <p>contato</p>
                </NavLink>

            </nav>

        </header>
    );

}