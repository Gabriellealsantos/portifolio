import gitSvg from '../../../assets/GitBranco.svg';
import FooterPf from '../../../components/FooterPf';
import ProjectCard from '../../../components/ProjectCard';
import ProjectImgCard from '../../../components/ProjectImgCard';
import portifolioImg from '../../../assets/portifolio.png'
import './styles.css';

export default function Project() {
    return (
        <>
            <section className="project-container">
                <div className="title-container-project">
                    <div className="square"></div>
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
            </section>
            <div className="project-card-container">
                <div className="dual-card-container">
                    <ProjectCard title='GABRIEL LEAL | Portfólio' textOne='Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais.' textTwo='É o projeto mais profissional, descritivo e organizado que já construí do total zero e sem nenhuma ajuda (me orgulho disso).' textThree='Continuarei atualizando-o com novos projetos cada vez mais complexos e que agreguem valor à minha carreira como Desenvolvedor.' />
                    <ProjectImgCard titleImg={portifolioImg} urlImg='https://github.com/Gabriellealsantos/portifolio' />
                </div>

                <div className="dual-card-container">
                    <ProjectCard title='GABRIEL LEAL | Portfólio' textOne='Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais.' textTwo='É o projeto mais profissional, descritivo e organizado que já construí do total zero e sem nenhuma ajuda (me orgulho disso).' textThree='Continuarei atualizando-o com novos projetos cada vez mais complexos e que agreguem valor à minha carreira como Desenvolvedor.' />
                    <ProjectImgCard titleImg={portifolioImg} urlImg='https://github.com/Gabriellealsantos/portifolio' />
                </div>
                
                <div className="dual-card-container">
                    <ProjectCard title='GABRIEL LEAL | Portfólio' textOne='Esse projeto reúne minhas habilidades, competências, qualificações e experiências profissionais.' textTwo='É o projeto mais profissional, descritivo e organizado que já construí do total zero e sem nenhuma ajuda (me orgulho disso).' textThree='Continuarei atualizando-o com novos projetos cada vez mais complexos e que agreguem valor à minha carreira como Desenvolvedor.' />
                    <ProjectImgCard titleImg={portifolioImg} urlImg='https://github.com/Gabriellealsantos/portifolio' />
                </div>

            </div>

            <div className="pf-mt20">
                <FooterPf />
            </div>

        </>
    );
}