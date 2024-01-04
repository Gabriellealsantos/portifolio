import './styles.css';

type Props = {
    title: string;
    textOne: string;
    textTwo: string;
    textThree: string;
};


export default function ProjectCard({title, textOne, textTwo, textThree} : Props) {
    return (
        <>
            <div className="card-project-container">

                <div className="card-project">
                    <div className="header-card-container">
                        <div className="style-bar-container pf-mt20">
                            <div className="rectangular"></div>
                            <h1 className="">{title} 🔗 Função </h1>
                        </div>
                    </div>
                    <p>{textOne}</p>
                    <p>{textTwo}</p>
                    <p>{textThree}</p>
                </div>
            </div>
        </>


    );
}