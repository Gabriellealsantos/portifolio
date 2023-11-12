import gabImg from '../../assets/Gabriel.png';
import gitImg from '../../assets/GitHub.svg';
import LinkedinImg from '../../assets/Linkedin.svg';
import './styles.css';

export default function PerfilCard() {
  return (
    <div className="card-perfil">
      <div className="content-perfil">
        <img src={gabImg} alt="Imagem do Desenvolvedor" />
        <h2>Gabriel Leal</h2>
        <p>Desenvolvedor</p>
        <p>Backend</p>
      </div>
      <div className="footer-card-perfil">
        <a href="https://www.linkedin.com/in/gabriel-leal-santos/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinImg} alt="Linkedin" />
        </a>
        <a href="https://github.com/Gabriellealsantos" target="_blank" rel="noopener noreferrer">
          <img src={gitImg} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}
