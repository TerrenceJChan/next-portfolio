import Image from 'next/image';
import styles from './SectionMain.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function SectionMain() {
    return (
        <div className={utilStyles.fullHeight}>
            <section className={`${utilStyles.centerScreen} ${utilStyles.col2Flex}`}>
                <div>
                    <h1 className={styles.title}>Terrence</h1>
                </div>
                <div>
                    <Image
                        src='/images/terrence-800x800.png'
                        className={styles.profile}
                        height={400}
                        width={400}
                        alt='Terrence Chan' />
                </div>
            </section>
        </div>
    );
}
