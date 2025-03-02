import aboutData from "@/data/aboutData";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function About(){
    return(
        <div className=" text-black ml-5 flex flex-col min-h-screen p-4 sm:p-6 lg:p-8 overflow-scroll">
            <div className="text-black bg-title-color rounded-lg shadow-md mt-16 sm:mt-24 bg-opacity-60 p-6 sm:p-8">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-indigo-950 overflow-hidden">{aboutData.title}</h1>
            </div>
            <div className="space-y-6 mt-7 rounded-lg shadow-md bg-background bg-opacity-70 text-wrap">
            <div className="flex flex-col sm:flex-row items-left md:items-center lg:items-center justify-start gap-4 lg:gap-8">
                <div className="flex items-center justify-start pl-3 md:pl-6 lg:pl-9 pt-3 md:pt-6 lg:pt-9">
                    <MdEmail className="text-base sm:text-xl md:text-2xl text-blue-600"/>
                    <span className="text-base sm:text-xl md:text-2xl font-bold text-blue-700">{aboutData.contact.email}</span>
                </div>
                <div className="flex items-center justify-start pl-3 md:pl-6 lg:pl-9 pt-3 md:pt-6 lg:pt-9">
                    <MdLocationOn className="text-base sm:text-xl md:text-2xl text-blue-600"/>
                    <span className="text-base sm:text-xl md:text-2xl font-bold text-blue-700">{aboutData.contact.location}</span>
                </div>
            </div>
            <div className="">
                <p className="text-xl sm:text-2xl lg:text-4xl mt-10 text-indigo-950 font-semibold pl-3 md:pl-6 lg:pl-9 pr-3 md:pr-6 lg:pr-9 pb-3 md:pb-6 lg:pb-9 text-wrap overflow-hidden">
                    {aboutData.descriptionOne}
                    <span className="text-indigo-700">
                        {aboutData.softwareDev}
                    </span>
                    {aboutData.descriptionTwo}
                    <span className="text-indigo-700">
                        {aboutData.accountant}
                    </span>
                    {aboutData.descriptionThree}
                    </p>
            </div>
            </div>
            
            
        </div>
        
    );
}