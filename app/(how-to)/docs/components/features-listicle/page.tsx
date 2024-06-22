'use client'
import BetterIcon from "@/components/ui/BetterIcon";
import FeaturesListicle from "@/components/ui/FeaturesListicle";
import HintIcon from "@/components/ui/HintIcon";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function ComponentItem() {
    return (
        <div>

            <ul>
                <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
                    <li>
                        <Link href="/docs/components" className="mb-8">Components</Link>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                    <li>
                        <Link href="/docs/components/features-listicle" className="mb-8">Features Listicle</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-content">A list of features with icon, title, description. Click on a feature to display its description. Features are automatically being swapped every 5 seconds (optional). Good to use when multiples features are available in your app.
</div>

<section className="mb-4 bg-base-100 py-24   md:px-0 flex flex-col justify-center items-center">
            <div className="bg-base-600 p-8 md:py-16 md:px-24 flex flex-col items-center rounded-lg mb-8">
                <p className="text-red-100 leading-8  text-lg  font-medium"><span className="text-red-400 font-medium ">4 hrs</span> to set up emails</p>
                <p className="text-red-100 leading-8  text-lg  font-medium">+ <span className="text-red-400  font-medium">6 hrs</span>  designing a landing page</p>
                <p className="text-red-100 leading-8  text-lg  font-medium">+ <span className="text-red-400  font-medium">4 hrs</span> to handle Stripe webhooks</p>
                <p className="text-red-100 leading-8  text-lg  font-medium">+ <span className="text-red-400 font-medium ">2 hrs</span> for SEO tags</p>
                <p className="text-red-100 leading-8  text-lg  font-medium">+ <span className="text-red-400  font-medium">1 hr</span>  applying for Google Oauth</p>
                <p className="text-red-100 leading-8  text-lg  font-medium">+ <span className="text-red-400  font-medium">3 hrs</span> for DNS records</p>
                <p className="text-red-100 leading-8  text-lg  font-medium">+ <span className="text-red-400  font-medium">2 hrs</span> for protected API routes</p>
                <p className="text-red-100 leading-8  text-lg  font-medium mb-8">+ <span className="text-red-400 ">∞ hrs</span>  overthinking...</p>
                <div className="text-xl font-semibold flex flex-col md:flex-row items-center justify-center gap-3"><p>= <span className="text-red-400 font-medium">22+ hours</span> of headaches</p><svg className="w-8 h-8 fill-neutral-content shrink-0" viewBox="0 0 154 150"><g clip-path="url(#clip0_8_2918)"><path d="M106.196 29.7328C107.476 28.8795 108.577 28.1164 109.707 27.3977C117.858 22.2126 126.71 21.138 135.917 23.4732C151.578 27.446 157.044 43.7028 152.161 56.1824C150.637 60.081 148.164 63.6849 145.705 67.1253C142.997 70.9156 138.859 72.8301 134.427 74.0109C132.051 74.6436 129.63 75.1096 126.995 75.7036C126.724 76.7242 126.426 77.7789 126.162 78.8429C124.755 84.5333 121.634 89.278 117.877 93.6518C115.055 96.9335 111.257 98.7338 107.151 99.5818C101.558 100.736 95.8973 101.66 90.2233 102.32C75.247 104.063 60.1757 103.771 45.1331 104.057C38.1644 104.292 31.1994 103.488 24.4674 101.672C12.2924 98.2193 4.94677 90.2106 1.95517 78.1373C-0.00242049 70.4929 0.21227 62.4541 2.5753 54.9255C6.52383 42.3022 15.3503 34.1364 27.0489 28.7374C28.9725 27.9224 30.5254 26.4225 31.4064 24.5282C37.939 11.6548 48.2539 3.0142 62.5575 0.785936C76.8419 -1.43971 89.1154 3.46842 98.3993 14.8684C101.369 18.5366 103.66 22.705 105.165 27.1779C105.446 28.0029 105.815 28.7975 106.196 29.7328ZM50.3463 95.8144C53.2637 95.8144 56.1877 95.9542 59.0966 95.7901C71.1993 95.1056 83.2924 94.2281 95.3998 93.6452C99.3293 93.5245 103.191 92.5853 106.737 90.8886C114.986 86.8456 118.859 80.1522 118.157 71.041C117.612 63.9775 113.2 58.5378 106.284 56.8753C97.6425 54.7973 89.7724 56.4289 83.0797 62.483C81.2551 64.133 79.6503 66.0239 77.9347 67.7941C76.1547 69.6318 74.5158 70.0643 72.8723 69.1579C71.2847 68.2824 70.5968 66.4998 71.2971 64.1917C72.3355 60.7788 71.7841 57.5625 70.541 54.3576C69.1004 50.7 67.0533 47.3117 64.4864 44.3343C56.5966 35.0412 42.4592 30.9744 31.459 35.3706C16.8332 41.212 6.45622 53.5513 8.26376 71.5706C9.84947 87.3838 17.5254 92.4907 28.8676 94.9842C29.1958 95.0564 29.5319 95.0984 29.862 95.164C36.642 96.5029 43.4941 96.3231 50.3463 95.8144ZM79.1233 55.1344C79.2959 55.1002 79.4659 55.0502 79.63 54.9857C80.0133 54.7566 80.4071 54.5388 80.7642 54.2736C87.4641 49.2933 95.027 47.3526 103.286 48.0384C114.415 48.9573 122.532 54.5832 125.952 65.5204C126.172 66.2234 126.496 66.8942 126.94 68.0021C129.405 67.0209 131.731 66.2576 133.915 65.1968C141.922 61.3067 145.669 54.7899 145.144 45.9162C144.707 38.5147 140.214 32.9471 132.996 31.2794C124.328 29.2742 116.489 31.012 109.85 37.114C108.04 38.7785 106.449 40.6801 104.721 42.4378C103.084 44.1035 101.481 44.4843 99.9076 43.6665C98.2884 42.8244 97.5356 41.0018 98.2332 38.7401C99.3228 35.2096 98.7636 31.8865 97.3938 28.6008C96.9632 27.5678 96.5136 26.5398 96.0096 25.5415C87.1733 8.04421 66.4593 4.0915 53.303 12.152C48.4799 15.0372 44.2502 18.8141 40.8393 23.2809C40.3847 24.0111 39.984 24.7733 39.6408 25.5621C59.8809 26.3871 72.8756 36.4281 79.1233 55.1344Z"></path><path d="M95.939 122.676C96.3426 121.375 96.827 120.103 97.3895 118.863C99.0303 115.827 100.762 112.839 102.5 109.857C102.943 109.096 103.4 108.15 104.107 107.783C105.057 107.296 106.133 107.111 107.192 107.252C108.466 107.469 108.758 108.706 108.73 109.889C108.74 110.446 108.645 111 108.452 111.522C106.786 115.407 105.105 119.284 103.358 123.132C102.995 123.824 102.505 124.441 101.914 124.95C100.767 126.033 99.2581 126.597 97.9552 125.672C97.0114 124.998 96.5553 123.637 95.939 122.676Z"></path><path d="M36.9705 111.129C36.5688 112.319 36.3142 113.164 35.9991 113.99C34.7619 117.206 33.4806 120.409 32.2579 123.634C31.0515 126.822 29.0616 128.163 26.8549 127.204C24.9857 126.389 24.4717 124.242 25.7528 121.358C27.2434 118.004 28.9216 114.729 30.5814 111.453C30.913 110.622 31.4692 109.9 32.1877 109.367C33.0744 108.879 34.3875 108.448 35.2172 108.769C36.0231 109.078 36.4474 110.369 36.9705 111.129Z"></path><path d="M59.2449 124.396C59.8402 122.81 60.2143 121.526 60.7899 120.338C62.1977 117.433 63.6962 114.57 65.1657 111.694C65.4003 111.19 65.6774 110.707 65.9945 110.25C66.7381 109.261 67.8782 108.694 68.9185 109.288C69.7921 109.892 70.457 110.751 70.8219 111.748C70.9991 112.512 70.919 113.314 70.5941 114.028C69.3957 117.376 68.1841 120.73 66.8169 124.013C66.4087 125.054 65.6837 125.939 64.7443 126.543C63.7814 127.068 62.3001 127.4 61.3661 127.024C60.4321 126.648 59.9189 125.29 59.2449 124.396Z"></path><path d="M127.026 127.614C126.877 128.401 126.679 129.176 126.432 129.937C125.325 132.618 124.301 135.347 122.977 137.92C122.268 139.304 121.251 140.506 120.005 141.435C117.998 142.879 115.898 141.737 115.794 139.248C115.726 138.133 115.937 137.02 116.408 136.008C117.998 132.936 119.765 129.953 121.504 126.959C121.745 126.45 122.154 126.039 122.662 125.794C123.581 125.54 124.722 125.221 125.49 125.561C126.228 125.888 126.608 127.015 127.026 127.614Z"></path><path d="M48.1399 135.399C46.5706 140.064 45.038 144.239 42.4008 147.869C41.1695 149.563 39.3664 149.823 37.992 148.911C36.7181 148.066 36.3466 146.574 36.9767 144.759C37.1048 144.334 37.2812 143.923 37.502 143.538C39.4618 140.441 41.4162 137.34 43.4305 134.277C44.1426 133.196 45.2297 132.308 46.5023 133.121C47.2938 133.62 47.6897 134.738 48.1399 135.399Z"></path><path d="M84.6108 136.308C82.773 139.941 81.1079 143.462 79.2183 146.861C78.8639 147.523 78.2633 148.018 77.5459 148.239C76.8286 148.46 76.0534 148.389 75.3879 148.043C73.8783 147.373 73.8698 145.913 74.1225 144.564C74.3089 143.463 74.6646 142.398 75.1772 141.406C76.461 139.051 77.8249 136.733 79.2872 134.485C80.1017 133.233 81.524 132.693 82.8085 133.484C83.5954 133.969 83.9301 135.185 84.6108 136.308Z"></path><path d="M141.948 87.6658C140.242 91.7351 138.791 95.6075 136.982 99.3092C136.817 99.6735 136.576 99.9984 136.275 100.262C135.974 100.525 135.619 100.72 135.235 100.834C134.852 100.948 134.448 100.978 134.053 100.922C133.656 100.865 133.277 100.725 132.94 100.509C132.606 100.348 132.309 100.12 132.067 99.8408C131.824 99.5612 131.64 99.235 131.528 98.8819C131.415 98.5295 131.376 98.1573 131.412 97.7885C131.448 97.4203 131.559 97.0632 131.738 96.739C133.51 93.1344 135.504 89.6309 137.543 86.1654C138.122 85.1809 139.343 84.5337 140.443 85.3122C141.142 85.8077 141.452 86.85 141.948 87.6658Z"></path></g></svg></div>
            </div>
            <div className="mb-16 text-center flex gap-1 justify-center items-center text-sm opacity-80"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fill-rule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z" clip-rule="evenodd"></path></svg><p className="s">There's an easier way</p></div>

           

            
        </section>

            <CopyBlock
                language={'tsx'}
                text={`import WithWithout from "@/components/features-listicle";                `}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
            <div className="docs-title mt-4">Tips</div>
            <ul>
                <li><div className="docs-content">Match each line of the 'With' column with the 'Without' column
</div></li>

            </ul>
            <div className="docs-content text-sm">Updated on: Tuesday, June 21, 2024</div>
            <div className="docs-divider"></div>
            <HintIcon />
            <div className="docs-content mt-2">Looking for UI-only components like buttons, inputs, etc? It's all available with daisyUI. See <Link href="/docs/components" className="link underline">this guide</Link> for more info.</div>

        </div>
    )

}