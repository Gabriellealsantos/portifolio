import gabImg from '../../assets/Gabriel.png';
import gitImg from '../../assets/GitHub.png';
import linkedinImg from '../../assets/Linkedin.png';
import whatsImg from '../../assets/Wpp.png'
import instaImg from '../../assets/Instagram.png'
import './styles.css';

export default function PerfilCard() {
  return (
    <div className="pf-card-perfil">

      <div className="pf-content-perfil border">
        <img src={gabImg} alt="Imagem do Desenvolvedor" />
        <h2>Gabriel Leal</h2>
        <p>Desenvolvedor</p>
        <p>Full Stack</p>
      </div>

      <div className="pf-footer-card-perfil border">
        <a href="https://www.linkedin.com/in/gabriel-leal-santos/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="Linkedin" />
        </a>
        <a href="https://github.com/Gabriellealsantos" target="_blank" rel="noopener noreferrer">
          <img src={gitImg} alt="GitHub" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img className="pf-visibility" src={whatsImg} alt="Whatsapp" />
        </a>
        <a href="https://www.instagram.com/__gabriel.leal__/" target="_blank" rel="noopener noreferrer">
          <img className="" src={instaImg} alt="Instagram" />
        </a>
      </div>

    </div>
  );
}
