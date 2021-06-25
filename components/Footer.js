import utilStyles from '../styles/utils.module.scss';
import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export default function Footer() {
    return (
        <footer className={`${utilStyles.fullWidth} ${styles.footerBox}`}>
            <div className={styles.footerFlex}>
                <span>
                    © Terrence J Chan 2021
                </span>
                <span>
                    <a href="https://github.com/TerrenceJChan" rel="nofollow">GitHub <FontAwesomeIcon icon={['fab', 'github']} /></a> / <a href="https://www.linkedin.com/in/terrencejchan/" rel="nofollow">LinkedIn <FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                </span>
                <span>
                    Currently on best behaviour 😇
                </span>
            </div>
        </footer>
    );
}
