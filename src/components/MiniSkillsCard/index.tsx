import './styles.css';

type Props = {
    title: string;
    states: string[];
    skills: string[];
};

export default function MiniSkillsCard({ title, states, skills }: Props) {
    return (
        <div className="mini-skills-card">
            <h1>{title}</h1>
            <ul>
                {states.map((state, index) => (
                    <li key={`state-${index}`}>
                        <div className="container-p">
                            <p className="state-p">{state}</p>
                            <p className="skill-p">{skills[index]} </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}