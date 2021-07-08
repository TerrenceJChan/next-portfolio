import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import styles from './Navbar.module.scss';
import utilStyles from '../styles/utils.module.scss';
// import breakpoints from '../styles/breakpoints.scss';

function Links() {
    return (
        <ol role="menu">
            <li><a href="#main">Main</a></li>
            <li><a href="#bio">Bio</a></li>
            <li><a href="#projects">Projects</a></li>
            <li className={utilStyles.bold}><a href="mailto: tjchan.dev@gmail.com">Email</a></li>
            <li className={utilStyles.bold}><a href="https://github.com/TerrenceJChan" target="_blank" rel="noreferrer">GitHub</a></li>
            <li className={utilStyles.bold}><a href="/documents/terrence-chan-resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
        </ol>
    );
}

// function displayOverlay() {
//     document.getElementById('links').style.height = "50%";
// }

export default class Navbar extends Component {



    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleClick() {
        this.setState({
            open: !this.state.open,
        });

    }

    render() {
        return (
            <nav className={styles.navWrapper}>
                <div className={styles.smallDisplay}>
                    <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                    />
                </div>
                <div className={styles.animationWrapper} id="menuWrapper">
                    <div className={this.state.open ? styles.overlay : styles.navDisplay}>
                        <Links />
                    </div>
                </div>
            </nav >
        );
    }
}
