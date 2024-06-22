'use client'
import { appName } from "@/utils/config";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";


export default function DocsPage() {


    return (
        <div>
            <div className="max-w-xs  text-3xl text-accent-main font-bold leading-9 breadcrumbs">
                <ul>
                    <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
                        <li>
                            <Link href="/docs/components" className="mb-8">Components</Link>
                        </li>
                       
                    </div>
                </ul>
            </div>

            <div className="docs-content">All the React components are made with TailwindCSS.</div>

            <div className="docs-title">Themes</div>

            <div className="docs-content">By default, <span className="docs-title text-base">5 themes are enabled: shipfast, light, dark, cupcake and retro</span>. It will automatically switch based on the user's preferences. </div>
        
            <div className="docs-content">To change or add themes:</div>        
            <div className="docs-content">1. Add/remove themes in <span className="docs-tag">{'tailwind.config.js'}</span> {'>'} daisyui.themes (keep at least one)</div>        
            <div className="docs-content">2. Add the theme name to the <span className="docs-tag">layout.tsx</span> root files.</div>        
            
            <CopyBlock
                language={'tsx'}
                text={`daisyui: {
                    themes: [
                      {
                        shipfast: {
                          "primary": "#FFBE1A",
                          "neutral": "#3d4451",
                          "base-100": "#212121",
                          "base-200": "#2F1A04",
                          "error": '#f87171',
                        },
                      },
                      "dark",
                      "cupcake",
                      "retro", 
                    ],`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
            <div className="docs-content mt-4">Here is a list of the <Link href="https://daisyui.com/docs/themes/" className="link underline"> 20+ available themes</Link></div>        
            <div className="docs-title">Custom components</div>        
            <div className="docs-content">All custom-made components are inside the <span className="docs-tag">/components</span> folder of your {appName} repo. Each component is documented in details in the code and in this documentation.</div>
            <div className="docs-content">Example: This is a <Link href='/docs/components/hero' className="link underline"> Hero component</Link>.</div>
            <div className="docs-title">daisyUI components</div>
            <div className="docs-content">{appName} uses daisyUI as a UI kit for simple components like buttons, inputs, tabs, etc. Here are all the <Link href="https://daisyui.com/components/" className="link underline">daisyUI components</Link>.</div>
            <div className="docs-content mb-4">Example: Add <span className="docs-tag">className: "btn btn-primary"</span> to display this button:</div>
            <div className="btn btn-primary mb-4">Demo</div>
           
            
            <div className="docs-title">Custom font</div>
            <div className="docs-content">1. Head over the the <span className="docs-tag">layout.js</span> file in <span className="docs-tag">/app</span></div>
            <div className="docs-content">2. Import your favorite font from next/font/google  <span className="docs-tag">{'import { Bricolage_Grotesque } from "next/font/google";'}</span></div>
            <div className="docs-content">3. Swap the current font in use <span className="docs-tag">{'const font = Bricolage_Grotesque({ subsets: ["latin"] });'}</span></div>
        </div>
    )
}