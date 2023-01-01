import Image from "next/legacy/image"
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="bg-[#00061F] py-8">
            <div className="w-5/6 mx-auto">
                <div className="flex items-stretch flex-col  md:justify-between md:flex-row">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                            CONTACT AND SUPPORT
                        </h2>

                        <ul className="text-white">
                            <li>
                                <Link href="/contact-us" className="hover:underline">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Sign up to our newsletter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    YouTube
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Assistance and Repairs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="self-center my-4 md:my-0">
                        <Link href="/">
                            <div className="w-32 h-16">
                                <div className="relative w-full h-full" >
                                    <Image
                                        alt="Image Alt"
                                        src="/ACC_Logo.png"
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                    />
                                </div>
                            </div>

                        </Link>

                        <div className="flex mt-4 space-x-2 sm:justify-center my-3 mx-auto">
                            <a
                                href="#"
                                className="text-white hover:text-white-900"
                            >
                                <svg
                                    stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="text-3xl text-white ring-1 p-1.5 rounded-full ring-white" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                    </path>
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            
                            <a
                                href="#"
                                className="text-white hover:text-white-900"
                            >
                                <svg stroke="currentColor" fill="none"
                                    stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-3xl text-white ring-1 p-1.5 rounded-full ring-white " height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                    </path>
                                </svg>
                                <span className="sr-only">Twiter page</span>
                            </a>


                            <a
                                href="#"
                                className="text-white hover:text-white-900"
                            >
                                <svg stroke="currentColor" fill="none"
                                    stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-3xl text-white ring-1 p-1.5 rounded-full ring-white" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
                                    </path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                                <span className="sr-only">YT page</span>
                            </a>

                            <a
                                href="#"
                                className="text-white hover:text-white-900"
                            >
                                <svg stroke="currentColor" fill="none"
                                    stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-3xl text-white ring-1 p-1.5 rounded-full ring-white" height="1em"
                                    width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                    </path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                <span className="sr-only">Linkdin page</span>
                            </a>

                        </div>
                        <img src="/playstore.png" alt="playstore image"
                            className="h-11 w-auto" />


                    </div>

                </div>
                <hr className="my-6 border-white-200 sm:mx-auto  lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center">
                        © {new Date().getFullYear() + " "}
                        <Link href="/" className="hover:underline">
                            ACC ltd
                        </Link>
                        . All rights reserved.
                    </span>

                </div>
            </div>



        </footer>

    )
}

export default Footer