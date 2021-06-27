import Image from 'next/image';
import styles from './SectionMain.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function SectionMain() {
    return (
        <div className={utilStyles.fullHeight}>
            <section className={`${utilStyles.centerScreen} ${utilStyles.col2Flex}`}>
                <div className={styles.flexCenter}>
                    <h1 className={styles.profileTitle}>Terrence</h1>
                    <span className={styles.subtitle}>Full-Stack Developer</span>
                    {/* <span className={`${styles.subtitle} ${styles.mirror}`}>Back-End</span> */}
                </div>
                <div>
                    <div className={utilStyles.quarterWidth}>
                        <Image
                            src='/images/terrence-800x800-2.png'
                            className={styles.profile}
                            width={400}
                            height={400}
                            layout='responsive'
                            alt='Terrence Chan' />
                    </div>
                </div>
            </section>
        </div>
    );
}
