import Hero from '../components/Index/Hero';
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';
import Head from 'next/head';
import Activities from '../components/Index/Activities';
import Repos from '../components/Index/Repos';
import Techs from '../components/Index/Techs';

export default function Index() {
    const { data } = swr('linkcord');
    const profile = data ? data.data : null;

    return (
        <>
            <Head>
                 <title>Home | Loiren</title>
            </Head>
            <Hero />
            <div className="my-10 flex space-x-5">
                <div className="shrink-0 w-48 relative h-48 bg-black rounded-full border-[16px] border-[#02060E]">
                    {(!profile) ? (
                        <div className="w-full h-full rounded-full bg-white/10 animate-pulse" />
                    ) : <>
                        <img className="w-full h-full rounded-full" src={`https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}?size=4096`} />
                        <Tippy content={<p className={"font-medium " + (profile.status == 'dnd' ? 'text-red-500' : profile.status == 'idle' ? 'text-yellow-500' : profile.status == 'online' ? 'text-green-500' : 'text-zinc-600')}>{(profile.status).toUpperCase()} on Discord</p>}>
                            <div className="absolute bottom-1 bg-[#02060E] rounded-full right-1 w-10 h-10 flex items-center justify-center">
                                <div className="w-full h-full relative flex items-center justify-center">
                                    <div className={"animate-ping w-6 h-6 rounded-full " + (profile.status == 'dnd' ? 'bg-red-500' : profile.status == 'idle' ? 'bg-yellow-500' : profile.status == 'online' ? 'bg-green-500' : 'bg-zinc-600')} />
                                    <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full " + (profile.status == 'dnd' ? 'bg-red-500' : profile.status == 'idle' ? 'bg-yellow-500' : profile.status == 'online' ? 'bg-green-500' : 'bg-zinc-600')} />
                                </div>
                            </div>
                        </Tippy>
                    </>}
                </div>
                <Activities />
            </div>
        <Repos />
        <Techs />
        </>
    );
};
