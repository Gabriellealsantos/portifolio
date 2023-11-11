import DescriptionCard from '../../../components/DescriptionCard';
import HeaderPf from '../../../components/HeaderPf';
import PerfilCard from '../../../components/PerfilCard';
import './styles.css';

export default function Home() {
    return (
        <main>
            <HeaderPf />
            <section id="pf-section" className="pf-container">
                <PerfilCard />
                <DescriptionCard />
            </section>
        </main>
    );
}