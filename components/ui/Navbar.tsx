import Link from "next/link";
import ButtonAccount from "./ButtonAccount";
import { appName } from "@/utils/config";
import LogoAndName from "./LogoAndName";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 justify-center items-center px-8 py-5">
            <div className="flex items-center gap-8 md:gap-24 xl:ps-8  justify-center md:justify-start w-full max-w-7xl  ">
                <Link href='/'>
                   <LogoAndName />
                </Link>
                <ul className="menu menu-horizontal  gap-4 md:gap-12 text-accent-main">
                    <a href="/#pricing" className="link leading-7 text-base font-normal link-accent-main  no-underline">Pricing</a>
                </ul>
                <ul className="menu menu-horizontal  gap-4 md:gap-12 text-accent-main">
                    <a href="/#demo" className="link leading-7 text-base font-normal link-accent-main  no-underline">Demo</a>
                </ul>
            </div>
            <div className="flex-none">
                {/* {user?.id && <Link href="/logout">Logout</Link>} */}
                <ButtonAccount />
            </div>
        </div>
    );
}
