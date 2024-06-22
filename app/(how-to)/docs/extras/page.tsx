'use client'
import LogoAndName from "@/components/ui/LogoAndName";
import { appName } from "@/utils/config";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function DocsPage() {
    return (
        <div>

            <ul>
                <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
                    <li>
                        <Link href="/docs/extras" className="mb-8">Extras</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-title flex flex-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Setup
            </div>

           

            <div className="docs-content">1. Add your own logo in the /app folder and name it icon.png.</div>
            <div className="docs-hint">Not using .png extension? Update components that use icon.png like the Header</div>
            <div className="docs-content">2. Create your site favicon with this free <Link className="link underline" href="https://realfavicongenerator.net/">Favicon Generator</Link> . Download the zip file and put this 2 files in the <span className="docs-tag">/app</span> folder</div>
            <ul>
                <li>
                    <div className="docs-content"><span className="docs-tag">apple-touch-icon.png</span> (rename it <span className="docs-tag">apple-icon.png</span>)</div>
                </li>
                <li>
                    <div className="docs-content"><span className="docs-tag">favicon.ico</span></div>
                </li>
            </ul>
            <div className="docs-content">NextJS will automatically reference them in the <span className="docs-tag">{'<head />'}</span> of your HTML page. Read more about <Link href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#icon" className="link underline">metadata file convention</Link>.</div>
            <div className="docs-content">Create a rectangle logo with your name like the one below. Name it <span className="docs-tag">logoAndName.png</span> and add it to the <span className="docs-tag">/public</span> folder. </div>
           <div className="pt-2 pb-6">
           <LogoAndName name={appName} logo={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-primary">
                <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
            </svg>
            } />
           </div>
            <div className="docs-content">Create two 1200x660 images for social media sharing. Name the first <span className="docs-tag">opengraph-image.png</span> and the second <span className="docs-tag">twitter-image.png</span> and add them to the /app folder.</div>
            <div className="docs-content">NextJS will automatically reference them in the <span className="docs-tag">{'<head />'}</span> of your HTML page. Read more about metadata file convention.</div>

            <div className="docs-title">Useful ressources</div>
            <div className="docs-content mb-1">1.If you need a logo, you can use <Link href="https://logofa.st/" className="link underline">LogoFast</Link></div>
            <div className="docs-content mb-1">2.If you need SVG illustrations, you can use <Link href="https://undraw.co/search" className="link underline">Undraw</Link></div>
            <div className="docs-content mb-1">3.If you need SVG background patterns, you can use <Link href="https://heropatterns.com/" className="link underline">HeroPatterns</Link></div>
            <div className="docs-content mb-1">4.f you need icons, you can use <Link href="https://heroicons.com/" className="link underline">Heroicons</Link></div>
            <div className="docs-content mb-1">5.If you need SVG blobs, you can use <Link href="https://app.haikei.app/" className="link underline">Haikei</Link></div>
            <div className="docs-content mb-1">6.If you need Tailwind Snippets , you can use <Link href="" className="link underline"></Link></div>
            <div className="docs-content mb-1">7.If you need Notion-like icons, you can use <Link href="https://snippets.alexandru.so/" className="link underline">Snippets</Link></div>
            <div className="docs-content mb-1">8.Use <Link href="https://www.overflow.design/ni.html?ref=producthunt" className="link underline">Overflow</Link></div>
            <div className="docs-content mb-1">1.If you need cute SVG doodles, you can use <Link href="https://www.figma.com/community/file/1019353050314527791/doodle-icons" className="link underline">Figma Doodles</Link></div>
        </div>
    )

}