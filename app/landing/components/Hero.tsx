import Image from "next/image";
import shipfastTechstack from '../../../public/shipfast_techstack.webp'
import shipfastAvatar from '../../../public/shipfast_avatar.webp'
import shipfastAvatar2 from '../../../public/shipfast_avatar_2.webp'

export default function Hero() {

    return (
        <section className="w-full bg-base-100 flex justify-center">
            <div className="bg-base-100 flex flex-between gap-8 flex-col lg:flex-row max-w-7xl px-8 py-16">
                <div className="gap-12 flex flex-col items-center  lg:items-start  ">
                    <a href="https://www.producthunt.com/posts/shipfast-2?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-shipfast-2" target="_blank" class=" -mb-4 md:-mb-6 group" title="View ShipFast on Product Hunt"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 37" class="w-32 md:w-36 fill-base-content/80 group-hover:fill-base-content"><path d="M104.953 36.286c-4.22 1.634-5.936.086-5.936-.891 1.495-.126 5.067-.331 5.936.891Zm5.356-1.336a5.486 5.486 0 0 1-7.083-.497c1.44-.4 5.372-.874 7.083.497Zm-7.139-3.176c.16 2.033-1.922 3.176-4.17 3.341.41-2.045 2.509-2.958 4.17-3.341Zm4.032-1.874c.238.869-.089 3.228-3.323 4.164.139-1.593.986-3.667 3.323-4.164Zm6.413 2.365a5.005 5.005 0 0 1-6.385.571c1.296-.668 4.408-1.57 6.385-.571Zm-3.417-4.706c.443.856.537 3.295-2.326 4.763-.166-1.57.465-4.255 2.326-4.763Zm7.083.948a4.389 4.389 0 0 1-2.657 2.217 4.243 4.243 0 0 1-3.39-.44c1.805-1.697 4.685-2.348 6.047-1.777Zm-4.28-4.547c1.284 2.24-.073 4.798-1.485 5.849-.628-2.082-.052-4.351 1.484-5.849Zm6.662-.097c.155 3.479-3.478 3.29-5.184 3.313.537-.731 3.522-3.381 5.184-3.313Zm-4.48-3.25c.675.743 1.688 3.599-.555 5.929-.703-1.685-.858-4.272.554-5.929Zm6.385-1.542c.116 2.81-2.249 4.232-4.53 4.21.686-1.354 2.52-3.964 4.53-4.21Zm-4.785-1.936c1.512.89 1.34 3.764.448 5.26-1.002-1.393-1.75-3.124-.448-5.26Zm4.884-2.633c.748 2.559-1.45 4.29-2.769 4.438.338-1.222.781-3.387 2.77-4.438Zm-4.607-.851c1.667.835 2.457 2.832 1.833 4.632-1.163-.937-2.564-2.919-1.833-4.632Zm4.685-3.096c1.03 3.113-1.335 4.13-2.215 4.38.105-1.324.947-3.963 2.215-4.38Zm-4.619-.817c.676.195 2.603 1.777 2.254 4.61-1.268-.714-2.808-2.074-2.254-4.61Zm3.921-3.9c1.152 3.826-.77 5.397-1.401 5.71-.1-1.21-.222-4.037 1.401-5.71Zm-4.264.096c1.207.337 2.73 2.553 2.658 4.684-1.196-.548-2.985-2.827-2.658-4.684Zm.36-5.934c2.802 2.896 3.195 5.18 2.376 7.996-1.269-1.142-2.282-4.569-2.376-7.996ZM17.047 36.286c4.22 1.634 5.936.086 5.936-.891-1.495-.126-5.067-.331-5.936.891ZM11.69 34.95a5.486 5.486 0 0 0 7.083-.497c-1.44-.4-5.372-.874-7.083.497Zm7.139-3.176c-.16 2.033 1.922 3.176 4.17 3.341-.41-2.045-2.509-2.958-4.17-3.341ZM14.798 29.9c-.238.869.089 3.228 3.323 4.164-.139-1.593-.986-3.667-3.323-4.164Zm-6.413 2.365a5.005 5.005 0 0 0 6.385.571c-1.296-.668-4.408-1.57-6.385-.571Zm3.417-4.706c-.443.856-.537 3.295 2.326 4.763.166-1.57-.465-4.255-2.326-4.763Zm-7.083.948a4.389 4.389 0 0 0 2.657 2.217 4.243 4.243 0 0 0 3.39-.44c-1.805-1.697-4.685-2.348-6.047-1.777Zm4.28-4.547c-1.284 2.24.073 4.798 1.485 5.849.628-2.082.052-4.351-1.484-5.849Zm-6.662-.097c-.155 3.479 3.478 3.29 5.184 3.313-.537-.731-3.522-3.381-5.184-3.313Zm4.48-3.25c-.675.743-1.688 3.599.555 5.929.703-1.685.858-4.272-.554-5.929ZM.433 19.071c-.116 2.81 2.249 4.232 4.53 4.21-.686-1.354-2.52-3.964-4.53-4.21Zm4.785-1.936c-1.512.89-1.34 3.764-.448 5.26 1.002-1.393 1.75-3.124.448-5.26ZM.333 14.502c-.748 2.559 1.45 4.29 2.769 4.438-.338-1.222-.781-3.387-2.77-4.438Zm4.607-.851c-1.667.835-2.457 2.832-1.833 4.632 1.163-.937 2.564-2.919 1.833-4.632ZM.255 10.555c-1.03 3.113 1.335 4.13 2.215 4.38-.105-1.324-.947-3.963-2.215-4.38Zm4.619-.817c-.676.195-2.603 1.777-2.254 4.61 1.268-.714 2.808-2.074 2.254-4.61Zm-3.921-3.9c-1.152 3.826.77 5.397 1.401 5.71.1-1.21.222-4.037-1.401-5.71Zm4.264.096c-1.207.337-2.73 2.553-2.658 4.684 1.196-.548 2.985-2.827 2.658-4.684ZM4.857 0C2.055 2.896 1.662 5.18 2.481 7.996 3.75 6.854 4.763 3.427 4.857 0Zm49.105 35c.162 0 .288-.108.288-.27v-1.782a.284.284 0 0 0-.288-.288h-4.41l3.006-3.06c.486-.504 1.674-1.62 1.674-3.492 0-2.214-1.71-3.852-4.176-3.852-1.962 0-3.204 1.026-3.924 2.07-.09.108-.09.27.036.396l1.242 1.242c.162.144.27.162.414 0 .468-.612 1.026-1.188 1.998-1.188 1.044 0 1.728.648 1.728 1.584 0 1.116-.918 1.962-1.422 2.466l-3.744 3.798c-.09.126-.126.216-.126.342v1.764c0 .162.126.27.288.27h7.416Zm4.572 0c.162 0 .288-.108.288-.27v-4.464c0-1.17.576-1.782 1.53-1.782.972 0 1.476.612 1.476 1.782v4.464c0 .162.126.27.288.27h2.178c.162 0 .288-.108.288-.27v-5.112c0-2.304-1.35-3.654-3.186-3.654-1.26 0-2.07.63-2.574 1.53l-.09-1.026c0-.216-.108-.288-.27-.288h-2.124c-.162 0-.27.108-.27.27v8.28c0 .162.108.27.27.27h2.196Zm11.754.216c1.26 0 2.16-.504 2.754-1.35l.036.864c0 .162.126.27.288.27h1.98c.162 0 .306-.108.306-.27V22.4c0-.162-.126-.27-.288-.27H73.15c-.162 0-.27.108-.27.27v4.662c-.594-.702-1.44-1.098-2.592-1.098-2.448 0-4.14 2.016-4.14 4.626 0 2.628 1.692 4.626 4.14 4.626Zm.594-2.502c-1.17 0-2.052-.828-2.052-2.124 0-1.278.882-2.124 2.052-2.124 1.206 0 2.034.846 2.034 2.106 0 1.296-.828 2.142-2.034 2.142ZM20.72 15c.09 0 .15-.06.15-.15v-2.26h.72c1.69 0 2.49-.93 2.49-2.29 0-1.36-.8-2.3-2.49-2.3h-2.15c-.09 0-.15.06-.15.15v6.7c0 .09.06.15.15.15h1.28Zm.15-5.6h.68c.53 0 1.02.17 1.02.9 0 .72-.49.89-1.02.89h-.68V9.4Zm5.5 5.6c.09 0 .16-.06.16-.15v-2.36c0-.73.38-1.13 1.01-1.13.15 0 .26.02.36.05.14.03.21 0 .21-.13v-.97c0-.09-.02-.15-.09-.2-.08-.06-.21-.13-.45-.13-.57 0-.88.4-1.04.93l-.05-.65c0-.12-.06-.16-.15-.16h-1.18c-.09 0-.15.06-.15.15v4.6c0 .09.06.15.15.15h1.22Zm4.77.12c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17Zm5.49 1.4c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.52 1.39c.71 0 1.16-.35 1.44-.85l.04.57c0 .12.07.16.16.16h1.17c.09 0 .16-.06.16-.15v-4.6c0-.09-.07-.15-.16-.15h-1.21c-.09 0-.16.06-.16.15v2.48c0 .65-.33.99-.85.99-.54 0-.82-.34-.82-.99v-2.48c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v2.84c0 1.28.74 2.03 1.76 2.03Zm6.44 0c.79 0 1.45-.35 1.87-.9.06-.07.05-.15-.01-.21l-.69-.66c-.08-.08-.19-.08-.26-.01-.27.25-.53.38-.86.38-.74 0-1.18-.56-1.18-1.2 0-.63.44-1.14 1.16-1.14.34 0 .6.12.86.38.08.07.19.07.27-.01l.69-.66c.06-.06.07-.15.01-.21-.42-.55-1.08-.9-1.9-.9-1.48 0-2.56 1.1-2.56 2.54 0 1.47 1.1 2.6 2.6 2.6Zm4.77 0c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm5.95 0c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57Zm0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17ZM64.79 15c.09 0 .16-.06.16-.15v-3.57h.98c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.98v-.49c0-.33.11-.57.58-.57.11 0 .25.03.42.06.07.01.13 0 .13-.07V8.02c0-.06-.03-.13-.09-.16-.3-.15-.52-.17-.82-.17-1.09 0-1.76.52-1.76 1.72v.69h-.58c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.58v3.57c0 .09.06.15.15.15h1.23Zm6.08.12c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51Zm4.65-5.14c-.7 0-1.15.35-1.43.85V8c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v6.85c0 .09.06.15.15.15h1.22c.09 0 .16-.06.16-.15v-2.48c0-.65.32-.99.85-.99.54 0 .82.34.82.99v2.48c0 .09.07.15.16.15h1.21c.09 0 .16-.06.16-.15v-2.84c0-1.28-.75-2.03-1.77-2.03Zm5.34 5.14c.69 0 1.32-.2 1.74-.62.09-.08.09-.16.05-.22l-.41-.58c-.06-.07-.1-.09-.18-.05-.41.23-.75.27-1.08.27-.7 0-1.16-.26-1.33-.79h2.82c.45 0 .58-.3.58-.8 0-1.26-.87-2.35-2.37-2.35-1.51 0-2.52 1.11-2.52 2.55 0 1.49 1.09 2.59 2.7 2.59Zm-1.23-3.05c.12-.58.55-.83 1.06-.83s.9.24 1 .83h-2.06Zm8.27 3.05c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.81 1.39c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15v-4.6c0-.09-.07-.15-.16-.15h-1.11c-.09 0-.16.06-.16.15l-.02.47c-.32-.46-.81-.74-1.53-.74-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57Zm.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19Zm5.96 3.17c.08 0 .15-.04.18-.12l2.6-6.51c.04-.11-.02-.17-.13-.17h-1.24c-.08 0-.16.04-.19.12l-1.08 3-1.08-3c-.03-.08-.11-.12-.19-.12h-1.24c-.11 0-.17.06-.13.17l1.9 4.74-.72 1.71c-.05.12.01.18.13.18h1.19Z"></path></svg></a>
                    
                    <h1 className="text-accent-main  font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start"><span className="relative ">Ship your startup</span><span className="whitespace-nowrap relative "><span className="mr-3 sm:mr-4 md:mr-5">in days,</span><span className=" relative whitespace-nowrap"><span className="absolute bg-[#d2cbc6] -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span><span className=" relative text-base-600">not weeks</span></span></span></h1>
                    <p className="text-lg text-center lg:text-left opacity-80 leading-relaxed my-3">The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.</p>
                    <div className="flex flex-col gap-4 mb-10 items-center lg:items-start   ">
                        <button className="btn btn-primary text-textPrimary btn-wide text-sm">
                            <svg className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg"><path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z"></path></svg>
                            Get ShipFast
                        </button>
                        <p className="text-sm md:text-base flex justify-center items-center gap-2 md:text-sm"><svg className="w-5 h-5 fill-accent animate-pulse" viewBox="0 0 161 154" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_8_2399)"><path d="M13.9653 26.3929C13.3454 26.4007 12.7254 26.3891 12.1055 26.3781C10.9378 26.3371 9.76879 26.3561 8.60306 26.4349C4.24676 26.7979 2.47252 28.6135 2.27301 32.9093C1.97374 39.3929 1.71523 45.9857 1.46519 52.3619L1.1867 59.4195C1.16791 59.8841 1.17111 60.3506 1.19508 60.8093C1.5086 66.7514 3.74024 69.1992 9.72176 70.1639C10.2316 70.2455 10.7491 70.3031 11.2692 70.3581C13.0383 70.5522 14.7127 70.7392 16.2382 71.9142C16.2777 72.7101 16.3245 73.5092 16.3679 74.3083C16.4787 76.2165 16.594 78.1907 16.6115 80.1286C16.6931 89.1674 16.7656 98.2062 16.8291 107.245C16.9042 117.237 16.9858 127.229 17.0739 137.221C17.0748 140.34 17.2411 143.457 17.5721 146.559C18.0754 150.852 19.3133 152.078 23.5912 152.525L25.146 152.69C29.2657 153.198 33.4084 153.499 37.5585 153.589C41.9111 153.609 46.2512 153.619 50.5788 153.62C61.9284 153.62 73.155 153.55 84.092 153.41C89.9673 153.335 95.9359 153.127 101.708 152.925C105.951 152.777 110.339 152.623 114.654 152.525C118.836 152.428 123.092 152.404 127.209 152.38C130.275 152.362 133.446 152.344 136.565 152.296C140.119 152.242 142.072 150.598 142.703 147.119C142.868 146.065 142.953 145 142.954 143.934C142.969 143.427 142.982 142.921 143.015 142.416C143.274 138.382 143.541 134.348 143.817 130.316C144.41 121.479 145.023 112.341 145.517 103.346C145.675 100.462 145.978 97.5183 146.271 94.6752C147.139 86.244 148.036 77.5339 145.415 68.7281C145.632 68.6809 145.841 68.6336 146.042 68.5884C146.744 68.4156 147.456 68.2855 148.174 68.2001C149.057 68.1166 149.968 68.0707 150.848 68.0286C152.152 67.9639 153.501 67.8992 154.825 67.7051C158.372 67.1875 160.401 64.9635 160.693 61.2785C160.74 60.4115 160.722 59.5422 160.639 58.6779L160.629 58.5291C160.051 50.3348 159.463 42.1416 158.874 33.8521L158.372 26.8148C158.361 26.6623 158.298 26.5183 158.193 26.4068C158.089 26.2954 157.949 26.2233 157.798 26.2028C157.404 26.1497 157.025 26.0913 156.657 26.0337C155.871 25.912 155.129 25.7975 154.369 25.7509C151.924 25.6016 149.478 25.4588 147.032 25.3225C142.701 25.0747 138.222 24.8192 133.824 24.5118C133.078 24.4103 132.351 24.2007 131.666 23.8894C131.51 23.8286 131.352 23.7672 131.194 23.7071C131.392 23.2748 131.587 22.8627 131.777 22.4661C132.341 21.3419 132.83 20.1817 133.24 18.9932C133.855 17.1872 134.099 15.2759 133.958 13.3737C133.816 11.4715 133.292 9.61755 132.418 7.92206C131.488 6.22992 130.227 4.742 128.709 3.54746C127.192 2.35292 125.448 1.47617 123.584 0.969338C120.508 0.0439655 117.257 -0.145334 114.094 0.416744C105.064 2.00139 96.9276 6.12259 89.2191 13.0176C88.2474 13.8873 87.2758 14.7957 86.2549 15.7572C85.931 16.0633 85.5942 16.3783 85.2463 16.7032C85.0053 16.3149 84.7767 15.9475 84.5564 15.5936C83.8562 14.4638 83.2512 13.4886 82.6079 12.5232C80.6044 9.44497 77.8584 6.91879 74.6228 5.17648C65.7671 0.465246 56.2985 0.0518385 46.4808 3.94713C43.6793 5.10813 41.2785 7.0614 39.5731 9.56688C35.9624 14.6256 36.1081 18.8347 40.0615 23.6404C40.6022 24.2666 41.1769 24.8624 41.7832 25.4255C41.9724 25.6099 42.1791 25.8137 42.4078 26.035L37.0124 26.1035C28.8563 26.2057 21.4108 26.3036 13.9653 26.3929ZM27.2699 78.0781C27.1857 76.5834 27.051 75.1016 26.9091 73.5403C26.8625 73.0324 26.816 72.516 26.7698 71.9912C26.9453 71.9589 27.1138 71.9265 27.2764 71.8948C27.8156 71.768 28.3657 71.6936 28.9192 71.6703C42.4641 71.6515 56.0103 71.6515 70.0489 71.6528H78.1409C78.1376 75.3741 78.1046 79.0539 78.0729 82.6192C77.9964 91.2594 77.9239 99.4194 78.2432 107.673C78.5626 115.945 79.2622 124.015 80.0026 132.56C80.3025 136.023 80.6121 139.599 80.892 143.165C80.5474 143.265 80.2196 143.368 79.9054 143.467C79.1566 143.75 78.3715 143.924 77.5734 143.984C62.42 144.096 47.4888 144.144 29.7327 144.178H29.7249C29.1714 144.153 28.6218 144.074 28.0841 143.94C27.8801 143.896 27.667 143.852 27.4416 143.81C27.4086 143.469 27.3735 143.133 27.3385 142.8C27.2166 141.822 27.1487 140.838 27.1351 139.852C27.1917 130.616 27.2565 121.38 27.3295 112.144C27.3951 103.234 27.4571 94.3245 27.5154 85.4145C27.5297 82.9278 27.4 80.4295 27.2705 78.0781H27.2699ZM66.5289 35.6309C67.713 35.6212 68.8984 35.5831 70.0806 35.5449C72.3653 35.4725 74.7213 35.3968 76.9801 35.5449C77.7237 40.2083 78.0586 53.6179 77.5838 60.0975C74.2886 60.9096 70.81 60.8552 67.4403 60.7983C65.6408 60.7705 63.7784 60.7394 61.9452 60.8391C56.9515 61.1089 51.8535 61.1465 46.9233 61.1834L42.9532 61.2169C38.3294 61.2602 33.5475 61.3056 28.8661 61.0915C27.5919 61.0332 26.2912 61.0117 25.0338 60.9916C20.9833 60.9269 16.7993 60.8579 12.4618 59.5541L11.3768 36.0255C13.7352 35.7968 16.112 35.8364 18.4615 36.1433C19.6534 36.2559 20.886 36.3732 22.1019 36.4062C25.6594 36.502 29.3512 36.5523 33.3887 36.5588C36.9645 36.5633 40.811 36.5531 44.6821 36.4334C46.5775 36.3745 48.4988 36.26 50.3559 36.15C51.9708 36.0536 53.6407 35.9556 55.2789 35.8909C59.0691 35.7479 62.8533 35.6613 66.5289 35.6315V35.6309ZM50.6169 25.2539L46.5095 19.5205C46.8333 15.9849 48.548 13.9338 52.0512 12.8856C57.2333 11.3326 62.0133 11.3053 66.6533 12.7962C71.9171 14.4882 75.2771 18.0373 77.7684 24.5933L50.6169 25.2539ZM90.3637 23.7886C96.2908 16.8719 104.393 12.1696 113.343 10.4519C116.571 9.78863 120.24 9.57186 123.072 12.9443C123.694 19.2603 123.692 19.4647 121.892 23.5289C121.708 23.5599 121.52 23.5938 121.329 23.6293C120.645 23.7755 119.95 23.8646 119.251 23.8954C110.16 24.0248 100.595 24.1242 90.8139 24.1902C90.7161 24.1163 90.6235 24.0361 90.5367 23.9497C90.4803 23.896 90.422 23.8416 90.3637 23.7892V23.7886ZM87.3438 107.324C87.5692 99.0609 87.5174 90.9682 87.463 82.3998C87.4397 78.8721 87.4176 75.321 87.415 71.7369C94.0223 70.9456 133.713 69.1293 140.326 69.3066C140.197 69.9155 140.063 70.5237 139.929 71.13C139.514 73.0026 139.087 74.9379 138.839 76.8772C137.936 83.9948 137.235 89.9736 136.742 96.0211C136.172 103.036 135.727 110.175 135.297 117.08C135.171 119.109 135.043 121.139 134.914 123.169C134.731 126.049 134.557 128.93 134.392 131.811C134.198 135.111 134.004 138.407 133.789 141.703C133.73 142.066 133.616 142.418 133.448 142.746C133.398 142.864 133.346 142.983 133.295 143.109H85.4814C85.6758 139.563 85.8882 136.042 86.0994 132.539C86.5988 124.263 87.1151 115.705 87.3438 107.325V107.324ZM149.252 32.2648C149.299 32.3329 149.33 32.4108 149.343 32.4926C149.165 40.0276 148.979 47.5629 148.786 55.3179L148.738 57.2726C148.391 57.3412 148.051 57.4128 147.715 57.484C146.745 57.7143 145.759 57.8765 144.766 57.9693C125.98 59.2433 107.1 59.9189 88.638 59.9752C87.6975 54.7748 87.4105 41.4195 88.1198 35.5488C91.9676 34.6914 96.0227 34.602 99.954 34.5134C101.02 34.4901 102.086 34.4669 103.149 34.4281C105.584 34.3421 108.067 34.3276 110.469 34.314C113.07 34.2992 115.76 34.2837 118.406 34.1763C123.742 33.9608 128.973 33.5647 134.308 33.1409C137.82 32.864 141.33 32.5249 144.723 32.1969C146.094 32.0649 147.445 31.9357 148.777 31.8089C148.861 31.8872 148.933 31.9532 148.998 32.0108C149.089 32.0883 149.174 32.1725 149.252 32.2629V32.2648Z"></path></g></svg> <span><span className="text-accent">$100  off</span> for the first 3160 customers (6 left)</span></p>
                    </div>
                    <div className="flex flex-col lg:flex-row flex-start gap-16 lg:gap-4 bg-base-100 ">
                        <div className="relative  w-[160px]  bg-base-100">
                            <div className="rounded-full absolute left-0 top-0 bg-base-100  pl-1 ">
                                <Image
                                    className="rounded-full   "
                                    height={40}
                                    width={40}
                                    src={shipfastAvatar2}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="rounded-full pl-1 absolute left-7 top-0 bg-base-100">
                                <Image
                                    className="rounded-full  "
                                    height={40}
                                    width={40}
                                    src={shipfastAvatar}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="rounded-full absolute left-14 top-0 bg-base-100  pl-1 ">
                                <Image
                                    className="rounded-full   "
                                    height={40}
                                    width={40}
                                    src={shipfastAvatar2}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="rounded-full absolute left-[84px] top-0 bg-base-100  pl-1 ">
                                <Image
                                    className="rounded-full   "
                                    height={40}
                                    width={40}
                                    src={shipfastAvatar2}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="rounded-full absolute left-[112px] top-0 bg-base-100  pl-1 ">
                                <Image
                                    className="rounded-full   "
                                    height={40}
                                    width={40}
                                    src={shipfastAvatar2}
                                    alt="Avatar"
                                />
                            </div>

                        </div>

                        <div className="flex flex-col items-center lg:items-start  ">
                            <div className="flex flex-start gap-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500"><path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div className="text-base text-base-content/80"><span className="font-semibold text-base-content">3154</span> ship faster</div>
                        </div>
                    </div>
                </div>
                <div className="relative max-md:-m-4 lg:w-full flex justify-center">
                    <Image
                        src={shipfastTechstack}
                        alt="Techstack"
                        height='576'
                    />
                </div>
            </div>
        </section>
    )
}