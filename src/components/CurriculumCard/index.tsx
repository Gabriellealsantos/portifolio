import './styles.css';

type Props = {
    date: string;
    office: string;
    companyName: string;
    companyLocation: string;
}

export default function CurriculumCard({date, office, companyName, companyLocation} : Props) {

    return (
        <>
            <div className="curriculum-card">

                <div className="left-content">
                    <p className="date">{date}</p>
                    <p className="office">{office}</p>
                    <p className="company-name">{companyName}</p>
                    <p className="company-location">{companyLocation}</p>
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
