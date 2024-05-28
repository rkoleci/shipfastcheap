export default function Navbar() {
    return (
        <div className="navbar bg-base-100 justify-center">
            <div className="flex items-center gap-8 md:gap-24   w-full max-w-7xl  ">
                <a className="btn btn-ghost text-xl">daisyUI</a>
                <ul className="menu menu-horizontal px-1 ml-4 gap-4">
                    <li><a className="leading-8 text-base font-normal">Pricing</a></li>
                    <li><a className="leading-8 text-base font-normal">Demo</a></li>
                    <li><a className="leading-8 text-base font-normal">Wall of Love</a></li>
                </ul>
            </div>
            <div className="flex-none"></div>
        </div>
    );
}
