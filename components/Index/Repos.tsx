import swr from '../../lib/swr';

export default function Repos() {
    const { data: _repositories } = swr('/api/util/repos');
    const repositories = _repositories ? _repositories : null;
    return (
        <>
            <h1 className="pt-32 font-semibold text-3xl text-white text-start justify-start tracking-tight">Github Repositories</h1>
            <p className="text-white/50 text-lg font-light">
                My github repositories.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
                {_repositories ? (
                    repositories ? (
                        repositories.sort((a, b) => b.stargazers_count - a.stargazers_count).map((_, __) => (
                            <a key={__} target="_blank" className="bg-zinc-400/5 hover:bg-zinc-400/10 active:opacity-50 transition-all duration-200 flex flex-col rounded-lg py-4 px-5 h-28 mt-4" href={`https://github.com/${_.full_name}`}>
                                <h1 className="leading-none text-lg font-medium text-white">{_.full_name}</h1>
                                <div className="w-full mt-auto flex-1 flex items-end justify-end space-x-3">
                                    <h6 className="flex items-center gap-x-1 text-zinc-300 font-light">
                                        <i className="fa-regular fa-star text-orange-400 mr-1" /> {_.stargazers_count} Star
                                    </h6>
                                    <h6 className="flex items-center gap-x-1 text-zinc-300 font-light">
                                        <i className="fa-regular fa-code-merge text-sky-400 mr-1" /> {_.forks} Forks
                                    </h6>
                                </div>
                            </a>
                        ))
                    ) : (
                        <a target="_blank" className="bg-zinc-400/5 hover:bg-zinc-400/10 active:opacity-50 transition-all duration-200 flex flex-col rounded-lg py-4 px-5 h-28" href="https://github.com/loirenn">
                            <div className="animate-pulse h-6 w-40 rounded-lg bg-white/10" />
                            <div className="w-full mt-auto flex-1 flex items-end justify-end space-x-3">
                                <h6 className="flex items-center gap-x-1 text-zinc-300 font-light">
                                    <div className="animate-pulse h-6 w-20 rounded-lg bg-white/10" />
                                </h6>
                                <h6 className="flex items-center gap-x-1 text-zinc-300 font-light">
                                    <div className="animate-pulse h-6 w-20 rounded-lg bg-white/10" />
                                </h6>
                            </div>
                        </a>
                    )) :
                    <a target="_blank" className="bg-zinc-400/5 hover:bg-zinc-400/10 active:opacity-50 transition-all duration-200 flex flex-col rounded-lg py-4 px-5 h-28" href="https://github.com/loirenn">
                        <div className="animate-pulse h-6 w-40 rounded-lg bg-white/10" />
                        <div className="w-full mt-auto flex-1 flex items-end justify-end space-x-3">
                            <h6 className="flex items-center gap-x-1 text-zinc-300 font-light">
                                <div className="animate-pulse h-6 w-20 rounded-lg bg-white/10" />
                            </h6>
                            <h6 className="flex items-center gap-x-1 text-zinc-300 font-light">
                                <div className="animate-pulse h-6 w-20 rounded-lg bg-white/10" />
                            </h6>
                        </div>
                    </a>
                }
            </div>

        </>
    );
};