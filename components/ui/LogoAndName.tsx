

export default function LogoAndName({ logo, name }:{ logo: React.ReactNode, name: string}) {

    return (
        <div className="flex justify-start items-center gap-1 px-1 bg-white w-fit">
            {logo}
            <div className="text-black text-base font-semibold leading-relaxed">{name}</div>
        </div>
    )
}