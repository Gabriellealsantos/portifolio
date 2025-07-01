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
                        <p>/ Dev FullStack</p>
                    </div>
                </Link>
            </div>

            <nav className="pf-nav-container">
                
                <NavLink to="/curriculum" className={({ isActive }) => isActive ? "pf-activated" : "pf-disabled"}>
                    <a href="">curriculo</a>
                    
                </NavLink>

                <NavLink to="/project" className={({ isActive }) => isActive ? "pf-activated" : "pf-disabled"}>
                    <a href="">projetos</a>
                </NavLink>

            </nav>

        </header>
    );

}