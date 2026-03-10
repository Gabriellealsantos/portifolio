import DescriptionCard from '../../../components/DescriptionCard';
import FooterPf from '../../../components/FooterPf';
import PerfilCard from '../../../components/PerfilCard';
import './styles.css';

export default function Home() {
    return (
        <main className="home-main">
            <section className="home-cards-section">
                <div className="home-cards-row">
                    <PerfilCard />
                    <DescriptionCard />
                </div>
            </section>
            <FooterPf />
        </main>
    );
}