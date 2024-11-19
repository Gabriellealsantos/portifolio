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
                        <CurriculumCard date="2023 - Atual" office="Freelancer" companyName="Freelancer" companyLocation="Remoto" />
                        <CurriculumTextCard 
                        textOne="Desde 2023, trabalho como freelancer, oferecendo soluções em desenvolvimento de software. Tenho experiência em entregar projetos personalizados, focando sempre na qualidade e na satisfação do cliente."
                        textTwo="Sou dedicado a criar soluções sob medida, sempre buscando novos desafios para expandir minhas habilidades e entregar resultados eficientes."
                        
                         />
                    </div>

                    <div className="title-container-experience">
                        <h2>Formação Acadêmica</h2>
                    </div>


                    <div className="card-curriculum-container">
                        <CurriculumCard date="2022 - Atual Previsão 2026" office="IFBA - Campus de Santo Antônio de Jesus" companyName="ADS - Analise e densenvolvimento de sistemas" companyLocation="Santo Antônio de Jesus - BA" />
                        <CurriculumTextCard 
                        textOne="O IFBA - Campus Santo Antônio de Jesus, Bahia, é reconhecido por seu comprometimento com a excelência acadêmica. Oferecendo o curso de Análise e Desenvolvimento de Sistemas, busca preparar os estudantes para desafios tecnológicos." 
                        textTwo="Com uma visão voltada para o futuro, espera-se que o campus continue desempenhando um papel crucial na formação de profissionais de tecnologia até 2026." />
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