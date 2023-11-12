import { Link, NavLink } from 'react-router-dom';
import './styles.css';

export default function HeaderPf() {

    return (
        <header>
            <div className="header-content">
                <div className="black-square"></div>
                <Link to="/">
                    <h1>Gabriel Leal</h1>
                </Link>

            </div>
            <nav className="pf-nav-container">

                <NavLink to="/curriculum" className={({ isActive }) => isActive ? "activated" : "disabled"}>
                    <p>curriculo</p>
                </NavLink>

                <NavLink to="/project" className={({ isActive }) => isActive ? "activated" : "disabled"}>
                    <p>projetos</p>
                </NavLink>

                <NavLink to="/contact" className={({ isActive }) => isActive ? "activated" : "disabled"}>
                    <p>contato</p>
                </NavLink>

            </nav>
        </header>
    );

}