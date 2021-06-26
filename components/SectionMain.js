import Image from 'next/image';
import styles from './SectionMain.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function SectionMain() {
    return (
        <div className={utilStyles.fullHeight}>
            <section className={`${utilStyles.centerScreen} ${utilStyles.col2Flex}`}>
                <div>
                    <h1 className={styles.title}>Terrence</h1>
                    <p className={styles.subtitle}>Front-End</p>
                    <p className={`${styles.subtitle} ${styles.mirror}`}>Back-End</p>
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
