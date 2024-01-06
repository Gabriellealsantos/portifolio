import CurriculumCard from '../../../components/CurriculumCard';
import CurriculumTextCard from '../../../components/CurriculumTextCard';
import FooterPf from '../../../components/FooterPf';
import SkillsCard from '../../../components/SkillsCard';
import './styles.css'

export default function Curriculum() {
    return (
        <>
            <section id="curriculum-section" >

                <div className="title-container-curriculum">
                    <div className="square-curriculum"></div>
                    <h1>Currículo</h1>
                </div>


                <div className="title-container-experience">
                    <h2>Experiência</h2>
                </div>

                <div className="card-container">
                    
                    <div className="card-curriculum-container">
                        <CurriculumCard date="2022 - Atual" office="CARGO" companyName="Nome da Empresa" companyLocation="Localização da Empresa" />
                        <CurriculumTextCard textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio." textTwo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae." />
                    </div>

                    <div className="card-curriculum-container">
                        <CurriculumCard date="2022 - Atual" office="CARGO" companyName="Nome da Empresa" companyLocation="Localização da Empresa" />
                        <CurriculumTextCard textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio." textTwo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae." />
                    </div>

                    <div className="title-container-experience">
                        <h2>Formação Acadêmica</h2>
                    </div>


                    <div className="card-curriculum-container">
                        <CurriculumCard date="2022 - Atual Previsão 2026" office="IFBA - Campus de Santo Antônio de Jesus" companyName="ADS - Analise e densenvolvimento de sistemas" companyLocation="Santo Antônio de Jesus - BA" />
                        <CurriculumTextCard textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos doloribus nobis amet, eaque repellat magnam asperiores vel, Accusamus, repudiandae. numquam modi optio." textTwo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae." />
                    </div>

                </div>

                <div className="skill-container">
                    <SkillsCard />
                </div>



            </section>

            <FooterPf />


        </>



    );
}