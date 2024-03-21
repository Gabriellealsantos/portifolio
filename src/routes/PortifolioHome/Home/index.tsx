import DescriptionCard from '../../../components/DescriptionCard';
import FooterPf from '../../../components/FooterPf';
import PerfilCard from '../../../components/PerfilCard';
import './styles.css';

export default function Home() {
    return (
        <main>
            <section id="pf-section" className="pf-container">

                <div className="container-card">
                    <PerfilCard />
                    <DescriptionCard />
                </div>

            </section>

            <div className='pass'>
                <FooterPf />
            </div>


        </main>
    );
}