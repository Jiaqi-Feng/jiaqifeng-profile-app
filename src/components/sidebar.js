"use client";

import { FaFacebook, FaGithub,FaLinkedin } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { prefix } from "@/app/prefix";
import Link from "next/link";

export default function Sidebar(){
    // Detect if the page is active
    const pathname = usePathname();

    return (
        <div className = "w-1/4 h-screen bg-sidebar-bg text-white flex flex-col items-center py-6">
            {/* Profile Image */}
            <div className="mt-30">
                <img
                src={`${prefix}/JiaqiFengPhoto.jpg`}//"/jiaqifeng-profile-app/JiaqiFengPhoto.jpg"
                alt="Jiaqi's profile"
                className="w-48 h-48 rounded-full mt-40 mb-10 bg-black"
                />
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
                <a href="https://www.facebook.com/profile.php?id=100005335908578" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl hover:text-blue-400"/>
                </a>
                <a href="https://www.linkedin.com/in/jiaqi-feng-7b86b9284/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl hover:text-blue-700"/>
                </a>
                <a href="https://github.com/Jiaqi-Feng" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl hover:text-gray-500"/>
                </a>
            </div>
            {/* Links to Sections */}
            <nav className="flex flex-col space-y-4 text-lg font-semibold .text-4xl">
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
            </nav>
        </div>
    );
}
