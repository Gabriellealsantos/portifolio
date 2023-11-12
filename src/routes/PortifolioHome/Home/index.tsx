import { Link } from 'react-router-dom';
import ButtonBlack from '../../../components/ButtonBlack';
import DescriptionCard from '../../../components/DescriptionCard';
import PerfilCard from '../../../components/PerfilCard';
import './styles.css';

export default function Home() {
    return (
        <main>
            <section id="pf-section" className="pf-container">
                <PerfilCard />
                <DescriptionCard />
                <div className="pf-btn-page-container">
                    <Link to="/project"><ButtonBlack text={'projetos'} /></Link>
                    <Link to="/curriculum"> <ButtonBlack text={'currículo'} /></Link> 
                </div>

            </section>


        </main>
    );
}