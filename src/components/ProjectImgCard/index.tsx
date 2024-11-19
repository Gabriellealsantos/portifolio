import './styles.css';

type Props = {
    titleImg: string;
    urlImg: string;
};

export default function ProjectImgCard({ titleImg, urlImg }: Props) {
    return (
        <>
            <div className="card-project-img-container">
                <div className="card-project-img">
                    <a href={urlImg} target="_blank" rel="noopener noreferrer">
                        <img src={titleImg} alt="Linkedin" />
                    </a>

                </div>
            </div>
        </>
    );
}


