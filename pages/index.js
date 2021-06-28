import Head from 'next/head';

import SectionMain from '../components/SectionMain';
import SectionBio from '../components/SectionBio';
import SectionProjects from '../components/SectionProjects';
import Background from '../components/Background';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Background />
            <Head>
                <title>Terrence Chan</title>
                <meta name="description" content="Welcome to my page and portfolio! I promise to be on best behaviour~" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <SectionMain />
                <SectionBio />
                <SectionProjects />
                <Footer />
            </main>
        </div>
    );
}
