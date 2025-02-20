import { BaseCard } from '../BaseCard';
import './styles.css';

type TextCardProps = {
    title: string;
    functionLabel: string;
    texts: string[]; // Mais flexível para qualquer número de textos
    git: string;
};

export const TextCard = ({ title, functionLabel, texts, git }: TextCardProps) => (
    <BaseCard className="card-project" shadowDirection="left">
        <a href={git} target="_blank" rel="noopener noreferrer">
            <div className="header-card-container">
                <div className="style-bar-container pf-mt20">
                    <div className="rectangular"></div>
                    <h1>{title} 🔗 <p>{functionLabel}</p></h1>
                </div>
            </div>
            <div className="container-project-p">
                {texts.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </a>
    </BaseCard>
);