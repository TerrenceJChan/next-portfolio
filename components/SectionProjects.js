import ProjectBox from './ProjectBox.js';

import styles from './SectionProjects.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function SectionProjects() {
    return (
        <div id='projects'>
            <section>
                <h2 className={`${styles.title} ${utilStyles.centerTitle}`}>Projects</h2>
                <div className={styles.gridWrapper}>
                    <h3 className={utilStyles.subtitle}>Showcase</h3>
                    <p>These projects currently take up most of my focus!</p>
                    <div className={styles.grid}>
                        <ProjectBox name='next-portfolio' />
                        <ProjectBox name='discord-rpg-game' />
                    </div>
                    {/* <h3 className={utilStyles.subtitle}>Bootcamp</h3>
                    <p>See my progression through UofT's Coding Bootcamp.</p>
                    <div className={styles.grid}>
                        <ProjectBox name='next-portfolio' />
                        <ProjectBox name='discord-rpg-game' />
                    </div> */}
                </div>
            </section >
        </div >
    );
}
