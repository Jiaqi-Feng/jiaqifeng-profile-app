import Sidebar from "../components/sidebar";
import "./globals.css";

export const metadata = {
  title: "Jiaqi's Resume Website",
  description: "A professional resume website for Jiaqi Feng.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex relative"> 
        {/* Background gif */}
        <div className="fixed inset-0 h-screen w-full bg-custom-gif bg-cover bg-center bg-opacity-70 -z-20"></div>
        {/* Background color */}
        <div className="fixed inset-0 h-screen w-full bg-background bg-opacity-50 -z-10"></div>
          {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 h-screen p-1 sm:p-2 md:p-4 lg:p-8 overflow-y-auto translation-all duration-300 md:ml-16">
        
        {/* Content */}
        <div className="relative z-10 text-black">
          {children}
        </div>
          
        </main>
      </body>
    </html>
  );
}
