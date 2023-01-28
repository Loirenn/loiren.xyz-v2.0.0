export default function Techs() {
    const techs = [
        [ "TypeScript", "typescript.png" ],
        [ "JavaScript", "javascript.svg" ],
        [ "CSS", "css.svg" ],
        [ "HTML", "html.svg" ],
        [ "NodeJS", "node.svg" ],
        [ "React", "react.svg" ],
        [ "Vue", "vue.png" ],
        [ "SolidJS", "solid.svg" ],
        [ "Svelte", "svelte.svg" ],
        [ "Next.js", "next.svg" ],
        [ "Nuxt.js", "nuxt.svg" ],
        [ "Express", "express.svg" ],
        [ "MongoDB", "mongo.svg" ],
        [ "Vercel", "vercel.svg" ],
        [ "TailwindCSS", "tailwind.svg" ],
        [ "Github", "github.svg" ],
        [ "Git", "git.svg" ],
        [ "Font Awesome", "fontawesome.png" ],
        [ "Yarn", "yarn.svg" ],
        [ "Heroku", "heroku.svg" ]
    ]
    return (
        <>
            <h1 className="mt-20 pt-5 font-semibold text-3xl text-white text-start justify-start tracking-tight">Technologies I use</h1>
            <p className="text-white/50 text-lg font-light">
                List of technologies I use.
            </p>
            <div className="w-full -ml-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {techs.map((tech, i) => (
                        <div key={i} className="group text-white ml-6 mt-4 bg-gray-400/5 hover:bg-gray-400/10 rounded-lg transition-all p-2.5 px-5 flex items-center justify-between font-medium cursor-pointer">
                            <img src={'/img/techs/' + tech[1]} className="group-hover:scale-y-125 group-hover:scale-x-125 h-6 rounded-md -ml-2 transition-all duration-200" /> 
                            {tech[0]}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
