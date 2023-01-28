import Card from '../components/Projects/Card';
import Head from 'next/head';

export default function Projects() {
    return (
        <>
            <Head>
                 <title>Projects | Loiren</title>
            </Head>
            <div className="w-full my-5 mt-10">
                <h1 className="text-4xl text-white font-bold text-center">Projects</h1>
                <p className="font-medium text-lg text-white/50 text-center">You can explore all my projects here.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <Card />
            </div>
        </>
    );
};