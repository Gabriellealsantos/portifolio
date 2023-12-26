import CurriculumCard from '../../../components/CurriculumCard';
import FooterPf from '../../../components/FooterPf';
import SkillsCard from '../../../components/SkillsCard';
import './styles.css'

export default function Curriculum() {
    return (
        <>

            <section className="card-container">

                <div className="title-container-curriculum">
                    <div className="square"></div>
                    <h1>Currículo</h1>
                </div>

                <div className="title-container-experience">
                    <h2>Experiência</h2>
                </div>


                <CurriculumCard date="2022 - Atual" office="CARGO" companyName="Nome da Empresa" companyLocation="Localização da Empresa" />
                <CurriculumCard date="2022 - 2022" office="CARGO" companyName="Nome da Empresa" companyLocation="Localização da Empresa" />


                <div className="title-container-experience">
                    <h2>Formação Acadêmica</h2>
                </div>

                <CurriculumCard date="2022 - Atual Previsão 2026" office="IFBA - Campus de Santo Antônio de Jesus" companyName="ADS - Analise e densenvolvimento de sistemas" companyLocation="Santo Antônio de Jesus - BA" />


                <SkillsCard />

            </section>

            <FooterPf />


        </>



    );
}