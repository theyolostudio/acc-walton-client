import Image from "next/legacy/image"
import Link from "next/link"
import { useState } from "react"


const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="bg-[#000B35] text-white w-full hidden md:block">
                <div className="px-3  lg:w-3/4 mx-auto md:flex justify-between">
                    <div>
                        <Link href="/about">Acout Acc</Link>
                    </div>
                    <div>
                        <ul className="grid gap-4 grid-flow-col auto-cols-max">
                            <li>Request Service</li>
                            <li>Find A Store</li>
                            <li>Log In</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 ">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" className="w-28 h-11">
                            <div className="relative w-full h-full" >
                                <Image
                                    alt="Image Alt"
                                    src="/ACC_Logo.png"
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                        </Link>
                        <div className="flex items-center md:order-2">
                            <button
                                type="submit"
                                className="p-2.5 ml-2 text-sm font-medium text-gray-500 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>

                            <button
                                data-collapse-toggle="mega-menu"
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="mega-menu"
                                aria-expanded="false"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            id="mega-menu"
                            className={`${!open && 'hidden'} justify-between items-center w-full text-sm md:flex md:w-auto md:order-1`}
                        >
                            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                                {/* <li>
                                    <button
                                        id="mega-menu-dropdown-button"
                                        data-dropdown-toggle="mega-menu-dropdown"
                                        className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                                    >
                                        Company{" "}
                                        <svg
                                            aria-hidden="true"
                                            className="ml-1 w-5 h-5 md:w-4 md:h-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        id="mega-menu-dropdown"
                                        className="grid  absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md md:grid-cols-2"
                                    >
                                        <div className="p-4 pb-0 text-gray-900 md:pb-4">
                                            <ul
                                                className="space-y-4"
                                                aria-labelledby="mega-menu-dropdown-button"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-500  hover:text-blue-600"
                                                    >
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-500  hover:text-blue-600"
                                                    >
                                                        Library
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-500  hover:text-blue-600"
                                                    >
                                                        Resources
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-500  hover:text-blue-600"
                                                    >
                                                        Pro Version
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li> */}
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                                    >
                                        Best sellers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://drive.google.com/file/d/19ga2sYEcRweCngV31Z1HSeb_N_5qnx0e/view?usp=share_link"
                                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                                        target={'_blank'}

                                    >
                                        Download
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default NavBar