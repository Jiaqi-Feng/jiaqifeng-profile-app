import hobbiesData from "@/data/hobbiesData";

export default function Hobbies(){
    return(
        <div className="min-h-screen sm:p-6 lg:p-8 overflow-scroll">
            <div className="text-black bg-title-color rounded-lg shadow-md mt-2 sm:mt-5 p-4 sm:p-6 lg:p-8 bg-opacity-60">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-indigo-950 overflow-hidden">HOBBIES</h1>
                <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-950 mt-2 lg:mt-4">These are pretty much how I spend my free time:</p>
            </div>

        <div className="space-y-6 mt-4 md:mt-5 lg:mt-7">
            {hobbiesData.map((hobby, index) =>(
                <div 
                key = {index}
                className="flex items-start space-x-4 p-2 md:p-4 lg:p-4 rounded-lg shadow-md bg-background bg-opacity-70">
                    <div
                    className="text-2xl md:text-3xl lg:text-3xl"
                    >
                        {hobby.icon}
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-indigo-900">{hobby.name}</h3>
                        <p className="mt-1 md:mt-2 lg:mt-2 text-indigo-950 text-sm md:text-base lg:text-base font-semibold">{hobby.descriptiion}</p>
                    </div>
                    
                </div>
            ))}
        </div>
        </div>
        
    );
}