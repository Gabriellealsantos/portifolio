import { Link } from 'react-router-dom';
import ButtonBlack from '../ButtonBlack';
import './styles.css';

export default function DescriptionCard() {
    return (
        <div className="pf-card-description">
            <div className="pf-content-description">
                
                <h3 className="pf-bold-description pf-larger-text">Olá</h3>
                
                <p className="pf-bold-description">Meu perfil e meus projetos</p>
                
                <div className="pf-btn-page-container">
                    <Link to="/project"><ButtonBlack text={'projetos'} /></Link>
                    <Link to="/curriculum"> <ButtonBlack text={'currículo'} /></Link>
                </div>

                <p>Sou Desenvolvedor Full Stack, estudante da Universidade Federal do IFBA BAIANO. Apaixonado por tecnologia, busco aprimorar minhas habilidades em Java, Spring Boot, React e controle de versão com Git, usando GitHub para colaboração. Tenho experiência em projetos práticos nas camadas front-end e back-end, e estou sempre em busca de oportunidades para aplicar meus conhecimentos, adquirir experiência real e crescer profissionalmente na área de tecnologia.</p>
            </div>
        </div>
    );
}

