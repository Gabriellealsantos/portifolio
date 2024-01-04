import './styles.css';

type Props = {
    date: string;
    office: string;
    companyName: string;
    companyLocation: string;
}

export default function CurriculumCard({ date, office, companyName, companyLocation}: Props) {

    return (
        <>
      
                <div className="card-curriculum">
                    <div className="centrilize-container">
                        <p className="date">{date}</p>
                        <p className="office">{office}</p>
                        <p className="company-name">{companyName}</p>
                        <p className="company-location">{companyLocation}</p>
                    </div>
                </div>
        </>
    );
}
