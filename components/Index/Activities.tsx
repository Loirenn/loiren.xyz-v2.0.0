import swr from '../../lib/swr'
export default function Activities() {
    const { data: _user } = swr('linkcord');
    return (
        <div className="hidden md:block -skew-y-3 mt-24 rounded-lg w-full h-[140px] sm:gap-x-6 py-5 relative">
            <div className="space-x-3 absolute inset-0 bg-[#02040A] rounded-lg flex items-center justify-center">
                <div className="animate-pulse h-6 w-6 rounded-lg bg-white/10" />
                <div className="animate-pulse h-5 w-40 md:w-80 rounded-lg bg-white/10" />
            </div>
            {(_user && _user.data) && <div className="z-1 absolute inset-0">
            <p onClick={() => {
                let _currentTheme = localStorage.getItem('links') || 'link1';
                if(_currentTheme === 'link1') {
                    localStorage.setItem('links', 'link2');
                    document.getElementById('iframe-id').setAttribute('src', 'https://linkcord.js.org/api/v3/widget/915326086932484126?type=vsc&language=en&theme=dark&background=#02040A');
                } else {
                    localStorage.setItem('links', 'link1');
                    document.getElementById('iframe-id').setAttribute('src', 'https://linkcord.js.org/api/v3/widget/915326086932484126?type=spotify_large&language=en&theme=dark&background=#02040A');
                }
                }} 
                className="p-2 rounded-xl hover:bg-gray-400/10 cursor-pointer absolute -bottom-12 left-0 text-gray-400/70 hover:text-white font-light transition-all font-medium">Change</p>
                <iframe id="iframe-id" src="https://linkcord.js.org/api/v3/widget/915326086932484126?type=spotify_large&language=en&theme=dark&background=#02040A" className="w-full" height="140" frameBorder="0" />
            </div>}
        </div>
    );
};