import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import styles from './Navbar.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default class Navbar extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false,
    //         // menuClicked: displayOverlay()
    //     };
    // }

    render() {
        return (
            <nav className={styles.navWrapper}>
                <div className={styles.largeDisplay}>
                    <ol>
                        <li><a href="#bio">Bio</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ol>
                </div>
            </nav>
        );
    }
}
