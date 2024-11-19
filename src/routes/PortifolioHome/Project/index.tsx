import gitSvg from '../../../assets/GitBranco.svg';
import FooterPf from '../../../components/FooterPf';
import ProjectCard from '../../../components/ProjectCard';
import ProjectImgCard from '../../../components/ProjectImgCard';
import portifolioImg from '../../../assets/portifolio.png';
import gitProjectImg from '../../../assets/gitproject.png';
import lolProjectImg from '../../../assets/lol.png';
import dsCommerceImg from '../../../assets/dscommerce.png';
import './styles.css';

export default function Project() {
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
                            <p>Aqui ficam apenas alguns projetos que foram selecionados por terem funcionalidades </p>
                            <p>distintas mas igualmente importantes para um Desenvolvedor.</p>
                            <p>Esses três projetos serão substituídos por novos conforme o avanço das minhas habilidades.</p>
                            <p>Caso deseje verificar todos os meus repositórios, é só clicar no Cat ao lado:
                                <a href="https://github.com/Gabriellealsantos" target="_blank" rel="noopener noreferrer">
                                    <img src={gitSvg} alt="GitHub" />
                                </a>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="project-card-container">
                    <div className="dual-card-container">
                        <ProjectCard title='GABRIEL LEAL | Portfólio'
                            textOne='Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais.'
                            textTwo='É o projeto mais profissional, descritivo e organizado que já construí do total zero e sem nenhuma ajuda (me orgulho disso).'
                            textThree='Continuarei atualizando-o com novos projetos cada vez mais complexos e que agreguem valor à minha carreira como Desenvolvedor.' />
                        <ProjectImgCard titleImg={dsCommerceImg} urlImg='https://www.linkedin.com/posts/gabriel-leal-santos_conclu%C3%AD-meu-curso-na-devsuperior-com-o-projeto-activity-7221602574993395712-HmIa?utm_source=share&utm_medium=member_desktop' />
                    </div>
                </div>

                <div className="project-card-container">
                    <div className="dual-card-container">
                        <ProjectCard title='GABRIEL LEAL | Portfólio'
                            textOne='Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais.'
                            textTwo='É o projeto mais profissional, descritivo e organizado que já construí do total zero e sem nenhuma ajuda (me orgulho disso).'
                            textThree='Continuarei atualizando-o com novos projetos cada vez mais complexos e que agreguem valor à minha carreira como Desenvolvedor.' />
                        <ProjectImgCard titleImg={portifolioImg} urlImg='https://www.linkedin.com/posts/gabriel-leal-santos_bom-dia-galera-estou-animado-em-compartilhar-activity-7126550439151435776-YE9_?utm_source=share&utm_medium=member_desktop' />
                    </div>
                </div>

                <div className="project-card-container">
                    <div className="dual-card-container">
                        <ProjectCard title='Profile Search | GitHub-API '
                            textOne='Nesta plataforma, compilo minhas aptidões, competências e vivências vinculadas à integração e manipulação de dados através da API do GitHub.'
                            textTwo='É o projeto mais meticuloso, informativo e bem estruturado que já elaborei a partir do zero, sem auxílio externo (algo que me enche de orgulho).'
                            textThree='Estarei constantemente enriquecendo esta plataforma com novos projetos, cada vez mais desafiadores, para fortalecer minha carreira como desenvolvedor.' />
                        <ProjectImgCard titleImg={gitProjectImg} urlImg='https://www.linkedin.com/posts/gabriel-leal-santos_bom-dia-pessoal-estou-empolgado-em-compartilhar-activity-7206303763706339328-ylh9?utm_source=share&utm_medium=member_desktop' />
                    </div>
                </div>

                <div className="project-card-container">
                    <div className="dual-card-container">
                        <ProjectCard title='League of Legends | Conversa com Campeões - API de IA'
                            textOne='Neste projeto, desenvolvi uma plataforma interativa que permite aos jogadores conversarem com os campeões do League of Legends usando inteligência artificial.'
                            textTwo='Esta plataforma oferece uma experiência única, permitindo que os usuários façam perguntas aos campeões e recebam respostas em tempo real, simulando conversas autênticas.'
                            textThree='' />
                        <ProjectImgCard titleImg={lolProjectImg} urlImg='https://www.linkedin.com/posts/gabriel-leal-santos_durante-a-santander-dev-week-2024-tive-a-activity-7207037345882189824-4UJu?utm_source=share&utm_medium=member_desktop' />
                    </div>
                </div>

            </section>

            <FooterPf />

        </>
    );
}