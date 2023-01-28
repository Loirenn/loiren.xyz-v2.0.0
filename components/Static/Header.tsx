import Link from 'next/link';
import { useRouter } from 'next/router';
import Snackbar from '@windui/snackbar';

export default function Header() {
    const router = useRouter();

    const messages = [
        '“Atatürk geldi, ben kaçar aga. Kaçovvv!”',
        '“İsmet imzaladı 1 tane, gitti 12 tane.”',
        '“Tamam kardeş, ya***k resmi kaldırız... AMA HANGİ HESAP SENİNKİ!”',
        '“Nasılım babuş? Façaaa... Kapat!”'
    ];
    
    return (
        <div className="text-white w-full flex items-center justify-between">
            <div onClick={() => new Snackbar({
                title: 'You have a message!',
                message: messages[Math.floor(Math.random() * messages.length)]
            }).show()} className="absolute top-0 left-0 w-[10px] h-[10px]" />
            <div className="flex items-center space-x-3 relative">
                <div className="flex flex-col items-center justify-center">
                    <i className="fas fa-bolt" />
                    <h6 className="text-xs text-white/50 mt-0.5 font-medium">v2.1.0</h6>
                </div>
                <Link href="/">
                    <a className="font-semibold text-4xl cursor-pointer">Loiren</a>
                </Link>
            </div>
            <div className="flex items-center space-x-3 cursor-pointer">
                <Link href="/">
                    <a className={`py-2 px-4 ${router.pathname === "/" ? "text-white bg-gray-400/5" : "text-gray-400/90"} font-medium hover:bg-gray-400/10 hover:text-white transition-all duration-200 rounded-xl`}><i className={`${router.pathname === "/" ? "fa-solid fa-house" : "fa-regular fa-house"} mr-2`} />Home</a>
                </Link>
                <Link href="/projects">
                    <a className={`py-2 px-4 ${router.pathname === "/projects" ? "text-white bg-gray-400/5" : "text-gray-400/90"} font-medium hover:bg-gray-400/10 hover:text-white transition-all duration-200 rounded-xl`}><i className={`${router.pathname === "/projects" ? "fa-solid fa-box" : "fa-regular fa-box"} mr-2`} />Projects</a>
                </Link>
                <Link href="/about">
                    <a className={`py-2 px-4 ${router.pathname === "/about" ? "text-white bg-gray-400/5" : "text-gray-400/90"} font-medium hover:bg-gray-400/10 hover:text-white transition-all duration-200 rounded-xl`}><i className={`${router.pathname === "/about" ? "fa-solid fa-user" : "fa-regular fa-user"} mr-2`} />About</a>
                </Link>
            </div>
            <div className="flex items-center space-x-3">
                <a target="_blank" href="https://github.com/loirenn">
                    <i className="flex items-center justify-center w-12 h-12 fab fa-github fa-2x hover:text-black hover:bg-white p-2 rounded-full transition-all duration-300" />
                </a>
                <a target="_blank" href="https://discord.com/users/915326086932484126">
                    <i className="flex items-center justify-center w-12 h-12 fab fa-discord text-2xl hover:text-black hover:bg-white p-2 rounded-full transition-all duration-300" />
                </a>
            </div>
        </div>
    );
};