import journeyData from "@/data/journeyData";

export default function Journey(){
    return(
        <div className="min-h-screen p-4 sm:p-6 lg:p-8 overflow-auto scrollbar-hide">
            <div className="text-black bg-title-color rounded-lg shadow-md mt-2 sm:mt-5 p-4 sm:p-6 lg:p-8 bg-opacity-60">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-indigo-950 overflow-hidden">MY JOURNEY</h1>
                <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-950 mt-2 lg:mt-4">My education, work experience, and important milestones that shaped my skills and career.</p>
            </div>
            <div className = "space-y-10 mt-4 md:mt-5 lg:mt-7">
                {journeyData.map((item, index) => (
                    <div
                    key = {index}
                    className="flex items-start space-x-4 p-4 lg:p-6 rounded-lg shadow-md bg-background bg-opacity-70">
                        <img
                        src={item.icon}
                        alt={`${item.type} Icon`}
                        className="hidden md:block w-20 h-20 rounded-full object-cover"
                        />

                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-900">{item.degreeOrPosition}</h2>
                            <h3 className="text-base md:text-xl lg:text-xl font-semibold">{item.institution}</h3>
                            <p className="text-sm md:text-base lg:text-base text-gray-700 font-medium">{item.startTime} - {item.endTime}</p>
                            <p className="mt-2 md:mt-4 lg:mt-5 text-indigo-950 text-base md:text-xl lg:text-xl font-semibold">{item.description}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>


    );
}