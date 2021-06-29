import Head from 'next/head';

import Background from '../components/Background';
import SectionMain from '../components/SectionMain';
import SectionBio from '../components/SectionBio';
import SectionProjects from '../components/SectionProjects';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Terrence Chan</title>
                <meta name="description" content="Welcome to my page and portfolio! I promise to be on best behaviour~" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body>
                <Background />
                <main>
                    <SectionMain />
                    <SectionBio />
                    <SectionProjects />
                    <Footer />
                </main>
            </body>
        </>
    );
}
