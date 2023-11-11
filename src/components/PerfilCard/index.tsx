import './styles.css';
import gabImg from '../../assets/Gabriel.png';
import LinkedinImg from '../../assets/Linkedin.svg';
import gitImg from '../../assets/GitHub.svg';

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
        <img src={LinkedinImg} alt="Linkedin" />
        <img src={gitImg} alt="GitHub" />
      </div>
    </div>
  );
}
