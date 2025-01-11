import hobbiesData from "@/data/hobbiesData";

export default function Hobbies(){
    return(
        <div className="p-8 min-h-screen ">
            <div className="text-black bg-title-color p-8 rounded-lg shadow-md mt-5 bg-opacity-60">
                <h1 className="text-6xl font-bold text-indigo-950">HOBBIES</h1>
                <p className="text-xl font-semibold text-blue-950 mt-4">These are pretty much how I spend my free time:</p>
            </div>

        <div className="space-y-6 mt-7">
            {hobbiesData.map((hobby, index) =>(
                <div 
                key = {index}
                className="flex items-start space-x-4 p-6 rounded-lg shadow-md bg-background bg-opacity-70">
                    <div
                    className="rounded-full object-cover"
                    >
                        {hobby.icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-indigo-900">{hobby.name}</h3>
                        <p className="mt-2 text-indigo-950 text-xl font-semibold">{hobby.descriptiion}</p>
                    </div>
                    
                </div>
            ))}
        </div>
        </div>
        
    );
}