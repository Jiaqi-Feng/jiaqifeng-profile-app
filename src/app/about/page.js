import aboutData from "@/data/aboutData";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function About(){
    return(
        <div className=" text-black ml-5 flex flex-col min-h-screen p-8">
            <div className="text-black bg-title-color p-8 rounded-lg shadow-md mt-28 bg-opacity-60">
                <h1 className="text-6xl font-bold text-indigo-950">{aboutData.title}</h1>
            </div>
            <div className="space-y-6 mt-7 rounded-lg shadow-md bg-background bg-opacity-70">
            <div className="flex flex-col sm:flex-row items-center justify-start gap-8 ">
                <div className="flex items-center justify-start gap-6 pl-9 pt-9">
                    <MdEmail className="text-3xl text-blue-600"/>
                    <span className="text-lg font-bold text-blue-700">{aboutData.contact.email}</span>
                </div>
                <div className="flex items-center justify-start gap-6 pl-9 pt-9">
                    <MdLocationOn className="text-3xl text-blue-600"/>
                    <span className="text-lg font-bold text-blue-700">{aboutData.contact.location}</span>
                </div>
            </div>
            <div className="">
                <p className="text-4xl mt-10 text-indigo-950 font-semibold pl-9 pr-9 pb-9">
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