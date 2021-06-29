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
                    <p>These projects are currently taking up most of my focus!</p>
                    <div className={styles.grid}>
                        <ProjectBox name='next-portfolio' />
                        <ProjectBox name='discord-rpg-game' />
                    </div>
                    <h3 className={utilStyles.subtitle}>Bootcamp</h3>
                    <p>See my progression through UofT's Coding Bootcamp.</p>
                    <div className={styles.grid}>
                        <ProjectBox name='project3' />
                        <ProjectBox name='react-portfolio' />
                        <ProjectBox name='budget-tracker' />
                        <ProjectBox name='social-network-api' />
                        <ProjectBox name='project2' />
                        <ProjectBox name='tech-blog' />
                        <ProjectBox name='e-commerce-backend' />
                        <ProjectBox name='note-taker' />
                        <ProjectBox name='team-profile-generator' />
                        <ProjectBox name='cocktail-map' />
                        <ProjectBox name='weather-dashboard' />
                        <ProjectBox name='day-planner' />
                        <ProjectBox name='coding-quiz' />
                        <ProjectBox name='password-generator' />
                        <ProjectBox name='personal-portfolio' />
                        <ProjectBox name='horiseon' />
                    </div>
                </div>
            </section >
        </div >
    );
}
