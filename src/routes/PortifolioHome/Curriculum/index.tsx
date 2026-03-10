import FooterPf from '../../../components/FooterPf';
import SkillsCard from '../../../components/SkillsCard';
import './styles.css'

type ExperienceItem = {
    date: string;
    title: string;
    company: string;
    location: string;
    description: string;
    bullets: string[];
}

const experiences: ExperienceItem[] = [
    {
        date: 'Nov 2025 — Fev 2026',
        title: 'Back End Developer',
        company: 'Escribo Inovação para o Aprendizado',
        location: 'Remoto · Tempo integral',
        description: 'Liderança técnica na implementação do módulo de "Migração de Ano Letivo", processando dados de milhares de alunos com integridade transacional (ACID) e zero perda de dados.',
        bullets: [
            'Otimização de consultas SQL e implementação de Row Level Security (RLS) no PostgreSQL, reduzindo latência de endpoints em ~40%',
            'Integração de serviços de IA Generativa (LLMs) para automação de tarefas pedagógicas',
            'Sustentação de sistema (Nível 3) com Hotfixes em produção e testes automatizados',
        ],
    },
    {
        date: 'Ago 2025 — Nov 2025',
        title: 'Bolsista em Saúde Digital e Tecnologia',
        company: 'CNPq · PET-Saúde (IFBA/UFRB)',
        location: 'Santo Antônio de Jesus, BA · Híbrida',
        description: 'Desenvolvedor Bolsista no PET-Saúde, iniciativa do Ministério da Saúde em parceria com o IFBA, UFRB e secretarias de saúde. Foco no fortalecimento digital da Policlínica Regional Reconvale.',
        bullets: [
            'Promoção do letramento digital e uso ético de tecnologias nos serviços de saúde',
            'Ações formativas e oficinas para apropriação crítica de ferramentas digitais',
            'Desenvolvimento de soluções digitais para otimizar serviços e gestão do cuidado em saúde',
        ],
    },
    {
        date: 'Abr 2024 — Jul 2024',
        title: 'Desenvolvedor Full Stack',
        company: 'Prefeitura Municipal de Sapeaçu',
        location: 'Sapeaçu, BA · Híbrida · Freelance',
        description: 'Modernização do ERP Educacional, migrando módulos críticos de PHP legado para Laravel e reduzindo a dívida técnica do projeto.',
        bullets: [
            'Módulos de Gestão de Notas e Virada de Ano Letivo com processamento íntegro de históricos',
            'Reestruturação e normalização do banco MySQL para grades curriculares complexas',
            'Sistema de Autenticação e Autorização (RBAC) com permissões granulares',
            'Processamento em Lote (Batch Jobs) reduzindo tempo operacional de dias para horas',
        ],
    },
];

type EducationItem = {
    date: string;
    institution: string;
    course: string;
    location: string;
    description: string;
}

const education: EducationItem[] = [
    {
        date: '2022 — Atual (Previsão 2026)',
        institution: 'IFBA - Campus Santo Antônio de Jesus',
        course: 'Análise e Desenvolvimento de Sistemas',
        location: 'Santo Antônio de Jesus, BA',
        description: 'O IFBA é reconhecido por seu comprometimento com a excelência acadêmica, preparando os estudantes para desafios tecnológicos com uma visão voltada para o futuro.',
    },
];

export default function Curriculum() {
    return (
        <>
            <section id="curriculum-section" >

                <div className="curriculum-header">
                    <div className="square-curriculum"></div>
                    <h1>Currículo</h1>
                </div>

                {/* Experiência */}
                <div className="timeline-section">
                    <h2 className="section-title">
                        <span className="section-title-icon">💼</span>
                        Experiência
                    </h2>

                    <div className="timeline">
                        {experiences.map((exp, index) => (
                            <div
                                className="timeline-item"
                                key={index}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-card">
                                    <span className="timeline-date">{exp.date}</span>
                                    <h3 className="timeline-title">{exp.title}</h3>
                                    <p className="timeline-company">{exp.company}</p>
                                    <p className="timeline-location">{exp.location}</p>
                                    <p className="timeline-description">{exp.description}</p>
                                    {exp.bullets.length > 0 && (
                                        <ul className="timeline-bullets">
                                            {exp.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Formação Acadêmica */}
                <div className="timeline-section">
                    <h2 className="section-title">
                        <span className="section-title-icon">🎓</span>
                        Formação Acadêmica
                    </h2>

                    <div className="timeline">
                        {education.map((edu, index) => (
                            <div
                                className="timeline-item"
                                key={index}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-card">
                                    <span className="timeline-date">{edu.date}</span>
                                    <h3 className="timeline-title">{edu.institution}</h3>
                                    <p className="timeline-company">{edu.course}</p>
                                    <p className="timeline-location">{edu.location}</p>
                                    <p className="timeline-description">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="skills-section-wrapper">
                    <SkillsCard />
                </div>

            </section>

            <FooterPf />
        </>
    );
}