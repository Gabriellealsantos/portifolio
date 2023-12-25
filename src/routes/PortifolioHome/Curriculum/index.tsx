import CurriculumCard from '../../../components/CurriculumCard';
import './styles.css'

export default function Curriculum() {
    return (

        <section className="card-container">

            <div className="title-container-curriculum">
                <div className="square"></div>
                <h1>Currículo</h1>
            </div>

            <div className="title-container-experience">
                <h2>Experiência</h2>
            </div>

            <div className="card-center">
               <CurriculumCard />
               <CurriculumCard />
            </div>
            

        </section>





    );
}