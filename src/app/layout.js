import SidebarWrapper from "@/components/sidebarWrapper";
import "./globals.css";

export const metadata = {
  title: "Jiaqi's Resume Website",
  description: "A professional resume website for Jiaqi Feng.",
};

export default function RootLayout({children}) {
  
  return (
    <html lang="en">
      <body className="flex relative"> 
        {/* Background gif */}
        <div className="fixed inset-0 h-screen w-full bg-custom-gif bg-cover bg-center bg-opacity-70 -z-20"></div>
        {/* Background color */}
        <div className="fixed inset-0 h-screen w-full bg-background bg-opacity-50 -z-10"></div>
        {/* Sidebar and Content */}
        <SidebarWrapper>{children}</SidebarWrapper>
      </body>
    </html>
  );
}
