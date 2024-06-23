import { appName } from "@/utils/config";
import icon from '../../public/icon.png'
import Image from "next/image";



export default function LogoAndName() {

    return (
        <div className="flex justify-start items-center gap-1 px-1   w-fit">
            <span className="lg:ml-[-16px]"><Image alt="icon" src={icon} width={42} height={42} /></span>
            <div className="text-accent-main/80 text-lg font-semibold leading-relaxed">{appName}</div>
        </div>
    )
}