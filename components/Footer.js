import styles from './Footer.module.scss';
import utilStyles from '../styles/utils.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab);

export default function Footer() {
    return (
        <div>
            <footer className={`${utilStyles.fullWidth} ${styles.footerBox}`}>
                <div className={styles.footerFlex}>
                    <span className={utilStyles.noMargin}>
                        © Terrence J Chan 2021
                    </span>
                    <span className={utilStyles.noMargin}>
                        <a href="https://github.com/TerrenceJChan" rel="nofollow">GitHub&nbsp;<FontAwesomeIcon icon={['fab', 'github']} /></a> / <a href="https://www.linkedin.com/in/terrencejchan/" rel="nofollow">LinkedIn&nbsp;<FontAwesomeIcon icon={['fab', 'linkedin']} /></a> / <a href="mailto: contact@terrencejchan.com">Email&nbsp;<FontAwesomeIcon icon={faEnvelope} /></a>
                    </span>
                    {/* <span>
                        Built with Next.JS / Sass
                    </span> */}
                </div>
            </footer>
        </div>
    );
}
