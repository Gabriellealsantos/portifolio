import dsCommerceImg from '../../../assets/dscommerce.png';
import gitSvg from '../../../assets/GitBranco.svg';
import gitProjectImg from '../../../assets/gitproject.png';
import lolProjectImg from '../../../assets/lol.png';
import portifolioImg from '../../../assets/portifolio.png';
import deliveryImg from '../../../assets/Delivery.png';
import FooterPf from '../../../components/FooterPf';
import { ImageCard } from '../../../components/ImageCard';
import { TextCard } from '../../../components/TextCard';
import './styles.css';

export default function Project() {
    const projects = [
        {
            title: 'GABRIEL LEAL | Portfólio',
            functionLabel: 'Função',
            texts: [
                'Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais.',
                'É o projeto mais profissional, descritivo e organizado que já construí do total zero e sem nenhuma ajuda.',
                'Continuarei atualizando-o com novos projetos cada vez mais complexos.'
            ],
            image: dsCommerceImg,
            link: 'https://www.linkedin.com/posts/gabriel-leal-santos_conclu%C3%AD-meu-curso-na-devsuperior-com-o-projeto-activity-7221602574993395712-HmIa'
        },
        {
            title: 'GABRIEL LEAL | Portfólio',
            functionLabel: 'Função',
            texts: [
                'Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais.',
                'Projeto construído com autonomia completa desde a concepção.',
                'Atualizações constantes com novos desafios profissionais.'
            ],
            image: portifolioImg,
            link: 'https://www.linkedin.com/posts/gabriel-leal-santos_bom-dia-galera-estou-animado-em-compartilhar-activity-7126550439151435776-YE9_'
        },
        {
            "title": "Profile Search | GitHub-API",
            "functionLabel": "Função",
            "texts": [
                "Aplicação interativa para busca e exibição de perfis do GitHub em tempo real.",
                "Integração eficiente com a API do GitHub, permitindo acesso a repositórios, seguidores e outras informações.",
                "Desenvolvido com foco em consumo de APIs externas e arquitetura escalável para futuras melhorias."
            ],
            "image": gitProjectImg,
            "link": "https://www.linkedin.com/posts/gabriel-leal-santos_bom-dia-pessoal-estou-empolgado-em-compartilhar-activity-7206303763706339328-ylh9"
        },
        {
            "title": "League of Legends | Chat com Campeões - IA",
            "functionLabel": "Função",
            "texts": [
                "Experiência interativa que permite conversas dinâmicas com campeões de League of Legends.",
                "Integração avançada com API de Inteligência Artificial para respostas imersivas e autênticas.",
                "Projeto desenvolvido durante a Santander Dev Week 2024, explorando NLP e IA generativa."
            ],
            "image": lolProjectImg,
            "link": "https://www.linkedin.com/posts/gabriel-leal-santos_durante-a-santander-dev-week-2024-tive-a-activity-7207037345882189824-4UJu"
        },
        {
            title: 'Delivery | Sistema de Entregas',
            functionLabel: 'Função',
            texts: [
                'Projeto de delivery completo, integrando web, mobile e back-end para uma experiência fluida.',
                'Desenvolvido com Java (Spring Boot), ReactJS (TypeScript) e React Native, garantindo robustez e escalabilidade.',
                'Utilização do PostgreSQL para armazenamento de dados e Mapbox/Google Maps para geolocalização e rotas',
            ],
            image: deliveryImg,
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7283147378876952577/'
        }
    ];

    return (
        <>
            <section id="project-section">
                <div className="project-container">
                    <div className="title-container-project">
                        <div className="square-project"></div>
                        <h1>Projetos</h1>
                    </div>

                    <div className="text-container">
                        <div className="text-with-icon">
                            <p>Projetos selecionados por suas funcionalidades distintas e relevância técnica.</p>
                            <p>Estes serão gradualmente substituídos por novos conforme minha evolução profissional.</p>
                            <p>
                                Todos os repositórios disponíveis no GitHub:
                                <a href="https://github.com/Gabriellealsantos" target="_blank" rel="noopener noreferrer">
                                    <img src={gitSvg} alt="GitHub" className="github-icon" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {projects.map((project, index) => (
                    <div className="project-card-container" key={index}>
                        <div className="dual-card-container">
                            <TextCard
                                title={project.title}
                                functionLabel={project.functionLabel}
                                texts={project.texts}
                            />

                            <ImageCard
                                title={project.title}
                                imageUrl={project.image}
                                linkUrl={project.link}
                            />
                        </div>
                    </div>
                ))}

            </section>

            <FooterPf />
        </>
    );
}