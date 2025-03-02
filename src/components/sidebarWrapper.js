"use client";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function SidebarWrapper({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex w-full">
            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            {/* Main Content */}
            <main className={`flex-1 h-screen p-1 sm:p-2 md:p-4 lg:p-8 overflow-y-auto translation-all duration-300 ${isSidebarOpen ? "hidden md:block" : ""} md:ml-16`}>

                {/* Content */}
                <div className="relative z-10 text-black">
                    {children}
                </div>

            </main>
        </div>

    );
}