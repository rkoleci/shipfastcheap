export default function Navbar() {
    return (
        <div className="navbar bg-base-100 justify-center items-center px-8 py-5">
            <div className="flex items-center gap-8 md:gap-24 xl:ps-8  justify-center md:justify-start w-full max-w-7xl  ">
                <p className="text-accent-main text-lg font-bold hidden md:block">ShipFast</p>
                <ul className="menu menu-horizontal  gap-4 md:gap-12 text-accent-main">
                    <a href="/docs" className="link leading-7 text-base font-normal link-accent-main  no-underline">Pricing</a>
                    <a className="link leading-7 text-base font-normal link-accent-main  no-underline">Demo</a>
                    <a className="link leading-7 text-base font-normal link-accent-main  no-underline">Wall of Love</a>
                </ul>
            </div>
            <div className="flex-none"></div>
        </div>
    );
}
