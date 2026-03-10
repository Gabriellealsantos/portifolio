import './styles.css';

type Props = {
    textOne: string;
    textTwo?: string;
    bullets?: string[];
}

export default function CurriculumTextCard({ textOne, textTwo, bullets }: Props) {

    return (
        <>

            <div className="card-curriculum-text">
                <div className="centrilize-container-text">
                    <p>{textOne}</p>
                    {textTwo && <p>{textTwo}</p>}
                    {bullets && bullets.length > 0 && (
                        <ul className="curriculum-bullets">
                            {bullets.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}
