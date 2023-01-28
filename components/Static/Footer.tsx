export default function Footer() {
    return (
        <div className="w-full bg-[#02040A]">
            <div className="p-10 max-w-screen-lg mx-auto w-full flex items-center justify-between">
                <h1 className="font-medium text-white/90">Developed with <i className="fal fa-heart mx-1 text-cyan-400" /> by Loiren</h1>
                    <h1 className="font-medium text-white/60 transition-all">Copyright &copy; {new Date().getFullYear()} Loiren</h1>
            </div>
        </div>
    );
};
