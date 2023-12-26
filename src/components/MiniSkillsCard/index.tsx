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
                        {state} {skills[index]}
                    </li>
                ))}
            </ul>
        </div>
    );
}