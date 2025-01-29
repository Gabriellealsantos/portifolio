import gabImg from '../../assets/Gabriel.png';
import SocialIcon from '../SocialIcon';
import './styles.css';

export default function PerfilCard() {
  return (
    <div className="pf-card-perfil">

      <div className="pf-content-perfil border">
        <img src={gabImg} alt="Imagem do Desenvolvedor" />
        <h2>Gabriel Leal</h2>
        <p>Desenvolvedor</p>
        <p>Back-End</p>
      </div>

      <div className="pf-footer-card-perfil">
        <SocialIcon />
      </div>

    </div>
  );
}
