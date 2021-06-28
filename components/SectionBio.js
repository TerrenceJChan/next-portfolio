import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import styles from './SectionBio.module.scss';
import utilStyles from '../styles/utils.module.scss';

const images = [
    '/images/uoft-certificate.png',
    '/images/uw-diploma.png',
];

export default class SectionBio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div id='bio'>
                <section>
                    <h2 className={`${styles.title} ${utilStyles.centerTitle}`}>Bio</h2>
                    <div className={utilStyles.col2Flex}>
                        <div className={utilStyles.flexGap}>
                            <h3 className={styles.subtitle}>Education</h3>
                            <div>
                                <p><span className={utilStyles.highlight}>University of Toronto School of Continuing Studies</span> Dec 2020 - May 2021</p>
                                <span className={utilStyles.highlight}>Coding Boot Camp</span> <span className={styles.lightbox} onClick={() => this.setState({ photoIndex: 0, isOpen: true })}>View the Certificate</span>
                                <ul>
                                    <li>Front-End</li>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React.js</li>
                                    </ul>
                                    <li>Back-End</li>
                                    <ul>
                                        <li>Node.js</li>
                                        <li>Express</li>
                                        <li>MySQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </ul>
                            </div>
                            <hr />
                            <div>
                                <p><span className={utilStyles.highlight}>University of Waterloo</span> September 2015 - December 2020</p>
                                <span className={utilStyles.highlight}>Bachelor of Arts with Distinction</span> <span className={styles.lightbox} onClick={() => this.setState({ photoIndex: 1, isOpen: true })}>View the Degree</span>
                                <ul>
                                    <li>Honours Arts and Business</li>
                                    <li>Honours Political Science</li>
                                    <li>Minor in Economics</li>
                                    <li>Minor in International Trade</li>
                                    <li>Co-Op</li>
                                </ul>
                            </div>
                        </div>
                        <div className={utilStyles.flexGap}>
                            <h3 className={styles.subtitle}>Employment</h3>
                            <div>
                                <p><span className={utilStyles.highlight}>Sun Life Financial</span> April 2019 - Present</p>
                                <span className={utilStyles.highlight}>Digital Web Publisher</span>
                                <ul>
                                    <li>Maintains, updates, and creates new Sun Life webpages</li>
                                    <li>Publishing content with HTML and CSS</li>
                                    <li>Extensive use of Adobe AEM (CMS) software</li>
                                    <li>Communicates with business clients to ensure prompt and accurate delivery</li>
                                </ul>
                            </div>
                            <hr />
                            <div>
                                <p><span className={utilStyles.highlight}>Costco Wholesale Canada</span> May 2018 - Aug 2018</p>
                                <span className={utilStyles.highlight}>Inventory Control Specialist</span>
                                <ul>
                                    <li>Maintains over-the-counter pharmaceutical stocks</li>
                                    <li>Monitors supply to each Costco Canada warehouse</li>
                                    <li>Submit orders and created reports using IBM&apos;s AS400</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                        />
                    )}

                </section>
            </div>
        );
    }
}
