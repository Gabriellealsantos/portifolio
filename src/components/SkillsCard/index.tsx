// SkillsCard.tsx
import MiniSkillsCard from '../MiniSkillsCard';
import './styles.css';

export default function SkillsCard() {
    const html5States = ['✔','✔','✔','✔',];
    const html5Skills = ['Semântica','Elementos', 'Atributos', 'Formulários'];

    const Css3States = ['✔','✔','✔','✔',];
    const Css3kills = ['Herança','Cascata', 'Especificidade', 'Box Model', 'Flexbox/Grid'];

    
    const jsStates = ['✔','✔','✔',];
    const jskills = ['Sintax','Cascata', 'DOM'];

    const frameStates = ['✔',];
    const frameSkills = ['SpringBoot'];

    const languageStates = ['✔','✔','✔','✔',];
    const languageSkills = ['Classes','Construtores', 'Datas', 'Herança', 'Lambda'];

    const githubStates = ['✔','✔'];
    const githubkills = ['Git','GitHub'];

    const packageStates = ['✔'];
    const packagesSkills = ['YARN'];

    
    const libraryStates = ['✔'];
    const librarySkills = ['REACT'];

    
    const dataBaseStates = ['✔','✔','✔','✔',];
    const dataBaseSkills = ['Modelo conceitual','Modelo relacional', 'SQL - DDL e DML', 'Consultas SQL'];

    return (
        <div className="skills-card">
            <h3>Habilidades Técnicas</h3>
            <div className="skills-container">
                <MiniSkillsCard title="HTML5" states={html5States} skills={html5Skills} />
                <MiniSkillsCard title="CSS3" states={Css3States} skills={Css3kills} />
                <MiniSkillsCard title="JAVASCRIPT" states={jsStates} skills={jskills} />
                <MiniSkillsCard title="JAVA" states={languageStates} skills={languageSkills} />
                <MiniSkillsCard title="FRAMEWORK" states={frameStates} skills={frameSkills} />
                <MiniSkillsCard title="VERSIONAMENTO DE CÓDIGO" states={githubStates} skills={githubkills} />
                <MiniSkillsCard title="GERENCIADOR DE PACOTES" states={packageStates} skills={packagesSkills} />
                <MiniSkillsCard title="BIBLIOTECAS/ FRAMEWORKS JS" states={libraryStates} skills={librarySkills} />
                <MiniSkillsCard title="BANCO DE DADOS" states={dataBaseStates} skills={dataBaseSkills} />
            </div>
        </div>
    );
}