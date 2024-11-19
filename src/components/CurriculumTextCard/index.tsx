import './styles.css';

type Props = {
    textOne: string;
    textTwo: string;
}

export default function CurriculumTextCard({ textOne, textTwo }: Props) {

    return (
        <>

            <div className="card-curriculum-text">
                <div className="centrilize-container-text">
                    <p>{textOne}</p>
                    <p>{textTwo}</p>
                </div>
            </div>
        </>
    );
}
