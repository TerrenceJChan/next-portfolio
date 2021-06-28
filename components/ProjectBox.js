import styles from './ProjectBox.module.scss';

let projectMap = new Map([
    ['discord-rpg-game',
        {
            name: 'Discord RPG Game',
            descriptionShort: 'Using Discord, a free VoIP app, players can play and interact with each other in an MMORPG through text input.',
            stacks: 'Node.js, PostgreSQL',
            github: 'https://github.com/TerrenceJChan/discord-rpg-game',
        },
    ],
    ['next-portfolio',
        {
            name: 'Next Portfolio',
            descriptionShort: 'This site! Created using Next.js and Sass.',
            stacks: 'Next.js, Sass',
            github: 'https://github.com/TerrenceJChan/discord-rpg-game',
        },
    ],
]);

export default function ProjectBox(project) {
    return (
        <a href={projectMap.get(project.name).github} className={styles.clickableDiv} target="_blank" rel="noreferrer">
            <div className={styles.box}>
                <p><span className={styles.highlight}>{projectMap.get(project.name).name}</span></p>
                <hr />
                <p>{projectMap.get(project.name).descriptionShort}</p>
                <p>Stacks used: <span className={styles.highlight}>{projectMap.get(project.name).stacks}</span></p>
            </div>
        </a>
    );
}
