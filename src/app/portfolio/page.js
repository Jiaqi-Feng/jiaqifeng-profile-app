import portfolioData from "@/data/portfolioData";

export default function Portfolio(){
    return(
        <div className="p-4 sm:p-6 lg:p-8 min-h-screen overflow-auto scrollbar-hide">
            {/* Title */}
            <div className="text-black bg-title-color rounded-lg shadow-md mt-2 sm:mt-5 p-4 sm:p-6 lg:p-8 bg-opacity-60">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-indigo-950">
                MY PORTFOLIO
                </h1>
                <p className="text-xl font-semibold text-blue-950 mt-4">Explore a selection of my projects</p>
            </div>

            {/* Project cards */}
            <div className="grid gap-6 grid-cols-2 mt-6">
                {portfolioData.map((project, index) => (
                    <div 
                    key = {index} 
                    className="group w-full h-80 [perspective: 1000px]"
                    >
                        <div className="relative w-full h-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front side */}
                            <div className="absolute inset-0 w-full h-full bg-indigo-500 rounded-xl p4 flex flex-row items-center justify-center [backface-visibility:hidden]">
                                <img 
                                src={project.image}
                                alt={`${project.name}`}
                                className="w-1/3 h-auto object-cover rounded-3xl ml-4"
                                />

                                
                                <div className="w-2/3 p-10">
                                    <h2 className="text-3xl font-bold text-indigo-950 mb-2">{project.name}</h2>
                                    <ul className="list-disc list-inside text-gray-900">
                                        {project.technologyStack.map((tech, i) => (
                                            <li key={i} className="text-xl font-semibold">{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                              {/* Back side */}          
                            <div className="absolute inset-0 w-full h-full rounded-xl bg-sidebar-bg text-white px-6 py-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex h-full flex-col items-center justify-center">
                                    <p className="text-l font-semibold mb-4">{project.description}</p>
                                    <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 font-bold hover:underline"
                                    >
                                    View on Github
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}