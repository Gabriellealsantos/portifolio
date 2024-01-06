import gitImg from '../../assets/GitHub.png';
import instaImg from '../../assets/Instagram.png';
import linkedinImg from '../../assets/Linkedin.png';
import whatsImg from '../../assets/Wpp.png';
import './styles.css';


export default function FooterPf() {
    return (
        <footer className="pf-footer">

            <div className="pf-left-content pf-visibility">

                <div>
                    <p>© 2023</p>
                    <p>by Gabriel Leal.</p>
                    <p>All rights reserved.</p>
                </div>

            </div>

            <div className="pf-right-content">

                <div className="content-email">
                    <p>Email</p>
                    <a href="mailto:gabriel.lealsantos@hotmail.com" className="email-link">gabriel.lealsantos@hotmail.com</a>
                </div>

                <div className="pf-social-icons">
                    <p className="pf-mt20">Redes Sociais</p>
                    <div className="pf-content-footer">
                        <a href="https://www.linkedin.com/in/gabriel-leal-santos/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImg} alt="Linkedin" />
                        </a>
                        <a href="https://github.com/Gabriellealsantos" target="_blank" rel="noopener noreferrer">
                            <img src={gitImg} alt="GitHub" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src={whatsImg} alt="Whatsapp" />
                        </a>
                        <a href="https://www.instagram.com/__gabriel.leal__/" target="_blank" rel="noopener noreferrer">
                            <img src={instaImg} alt="Instagram" />
                        </a>
                    </div>
                </div>
                
            </div>
        </footer>

    );
}