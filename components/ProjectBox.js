import styles from './ProjectBox.module.scss';

import {projectMap} from '../lib/projectMap';

export default function ProjectBox(project) {
    return (
        <a href={projectMap.get(project.name).github} className={`${styles.clickableDiv} ${styles.boxShadows}`} target="_blank" rel="noreferrer">
            <div className={styles.box}>
                <p><span className={styles.highlight}>{projectMap.get(project.name).name}</span></p>
                <hr />
                <p>{projectMap.get(project.name).descriptionShort}</p>
                <p>Stacks used: <span className={styles.highlight}>{projectMap.get(project.name).stacks}</span></p>
            </div>
        </a>
    );
}
