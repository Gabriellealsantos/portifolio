import './styles.css';

export default function HeaderPf() {

    return (
        <header>
            <div className="header-content">
            <div className="black-square"></div>
                <h1>Gabriel Leal</h1>
            </div>
            <nav className="pf-nav-container">
                <p>curriculo</p>
                <p>projetos</p>
                <p>contato</p>
            </nav>
        </header>
    );

}