import './styles.css';

export default function CurriculumCard() {
    return (
        <>
            <div className="curriculum-card">

                <div className="left-content">
                    <p className="date">2022 - Atual</p>
                    <p className="office">CARGO</p>
                    <p className="company-name">Nome da Empresa</p>
                    <p className="company-location">Localização da Empresa</p>
                </div>


                <div className="right-content">
                    <p className="text-curriculum">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, voluptatem magni.
                        Officia mollitia suscipit, quae aliquam cumque eligendi, odio facilis iure voluptatum sequi esse corporis
                        at quasi dolorum itaque cupiditate?</p>
                </div>
            </div>
        </>
    );
}
