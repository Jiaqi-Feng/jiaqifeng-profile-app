"use client";

import { FaFacebook, FaGithub, FaLinkedin, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
    // Detect if the page is active
    const pathname = usePathname();
    //Sidebar open and close
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`h-screen bg-sidebar-bg text-white flex flex-col items-center py-6 transition-all duration-300
        ${isOpen ? "w-2/3 sm:w-2/1 md:w-1/4" : "w-16"}`}>

            {/* Toggle button */}
            <button onClick={() => setIsOpen(!isOpen)}
                className="absolute top-5 left-5 text-white text-2xl focus:outline-none">
                {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
            </button>


            {/* Profile Image */}
            {isOpen && (<div className="mt-30">
                <img
                    src="/jiaqifeng-profile-app/JiaqiFengPhoto.jpg"
                    alt="Jiaqi's profile"
                    className="rounded-full mt-40 mb-10 bg-black transition-all duration-300
                    w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
                />
            </div>)}

            {/* Social Media Icons */}
            {isOpen && (<div className="flex space-x-4 mb-6">
                <a href="https://www.facebook.com/profile.php?id=100005335908578" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl hover:text-blue-400" />
                </a>
                <a href="https://www.linkedin.com/in/jiaqi-feng-7b86b9284/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl hover:text-blue-700" />
                </a>
                <a href="https://github.com/Jiaqi-Feng" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl hover:text-gray-500" />
                </a>
            </div>)}

            {/* Links to Sections */}
            {isOpen && (<nav className="flex flex-col space-y-4 text-lg font-semibold .text-4xl">
                <Link href="/about" className={`hover:text-indigo-400 ${pathname === "/about" ? "text-indigo-400" : "text-white"}`}>
                    ABOUT
                </Link>
                <Link href="/journey" className={`hover:text-indigo-400 ${pathname === "/journey" ? "text-indigo-400" : "text-white"}`}>
                    JOURNEY
                </Link>
                <Link href="/skills" className={`hover:text-indigo-400 ${pathname === "/skills" ? "text-indigo-400" : "text-white"}`}>
                    SKILLS
                </Link>
                <Link href="/portfolio" className={`hover:text-indigo-400 ${pathname === "/portfolio" ? "text-indigo-400" : "text-white"}`}>
                    PORTFOLIO
                </Link>
                <Link href="/hobbies" className={`hover:text-indigo-400 ${pathname === "/hobbies" ? "text-indigo-400" : "text-white"}`}>
                    HOBBIES
                </Link>
                <Link href="/contact" className={`hover:text-indigo-400 ${pathname === "/contact" ? "text-indigo-400" : "text-white"}`}>
                    CONTACT
                </Link>
            </nav>)}
        </div>
    );
}
