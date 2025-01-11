import journeyData from "@/data/journeyData";

export default function Journey(){
    return(
        <div className="p-8 min-h-screen">
            <div className="text-black bg-title-color p-8 rounded-lg shadow-md mt-5 bg-opacity-60">
                <h1 className="text-6xl font-bold text-indigo-950">MY JOURNEY</h1>
                <p className="text-xl font-semibold text-blue-950 mt-4">My education, work experience, and important milestones that shaped my skills and career.</p>
            </div>
            <div className = "space-y-10 mt-7 ">
                {journeyData.map((item, index) => (
                    <div
                    key = {index}
                    className="flex items-start space-x-4 p-6 rounded-lg shadow-md bg-background bg-opacity-70">
                        <img
                        src={item.icon}
                        alt={`${item.type} Icon`}
                        className="w-20 h-20 rounded-full object-cover"
                        />

                        <div>
                            <h2 className="text-3xl font-bold text-indigo-900">{item.degreeOrPosition}</h2>
                            <h3 className="text-xl font-semibold">{item.institution}</h3>
                            <p className="text-base text-gray-700 font-medium">{item.startTime} - {item.endTime}</p>
                            <p className="mt-5 text-indigo-950 text-xl font-semibold">{item.description}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>


    );
}