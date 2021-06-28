import ProjectBox from './ProjectBox.js';

import styles from './SectionProjects.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function SectionProjects() {
    return (
        <div>
            <section>
                <h2 className={`${styles.title} ${utilStyles.centerTitle}`}>Projects</h2>
                <div className={styles.grid}>
                    <ProjectBox name='next-portfolio' />
                    <ProjectBox name='discord-rpg-game' />
                </div>
            </section>
        </div >
    );
}
