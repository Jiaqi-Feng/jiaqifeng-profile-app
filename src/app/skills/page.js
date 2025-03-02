import softSkillsData from "@/data/softSkillsData";
import programmingSkillData from "@/data/programmingSkillData";
import languageData  from "@/data/languageData";

export default function Skills(){
    return(
        <div className="min-h-screen p-4 sm:p-6 lg:p-8 overflow-auto scrollbar-hide">
            <div className="text-black bg-title-color rounded-lg shadow-md mt-2 sm:mt-5 p-4 sm:p-6 lg:p-8 bg-opacity-60">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-indigo-950">
                    SKILL SET
                </h1>
                <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-950 mt-2 lg:mt-4">Exploring the diverse range of skills I've developed.</p>
            </div>

            {/* Soft skill section */}
            <section className="space-y-10 mt-4 md:mt-5 lg:mt-7">
                <div className="p-2 md:p-4 lg:p-6">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-indigo-900 mb-4 md:mb-7 lg:mb-7 underline">Soft Skill</h2>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {softSkillsData.map((softSkill, index) => (
                            <div
                            key={index}
                            className="bg-white shadow-lg p-2 md:p-4 lg:p-4 rounded-lg flex items-start space-x-4 bg-opacity-70"
                            >
                                <div className="text-2xl md:text-3xl lg:text-3xl">
                                    {softSkill.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-indigo-900">{softSkill.name}</h3>
                                    <p className="mt-1 md:mt-2 lg:mt-2 text-indigo-950 text-sm md:text-base lg:text-base font-semibold">{softSkill.description}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Programming skill section */}
            <section className="space-y-10 mt-4 md:mt-5 lg:mt-7">
                <div className="p-2 md:p-4 lg:p-6">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-indigo-900 mb-4 md:mb-7 lg:mb-7 underline">Programming Skill</h2>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {programmingSkillData.map((proSkill, i) => (
                            <div
                            key={i}
                            className="bg-white shadow-lg p-2 md:p-4 lg:p-4 rounded-lg flex items-start space-x-4 bg-opacity-70"
                            >
                                <div className="text-2xl md:text-3xl lg:text-3xl">
                                    {proSkill.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-xl lg:text-xl font-semibold text-indigo-900">{proSkill.name}</h3>
                                    <p className="mt-1 md:mt-2 lg:mt-2 text-indigo-950 text-sm md:text-base lg:text-base font-semibold">{proSkill.description}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Languages section */}
            <section className="p-2 md:p-4 lg:p-6">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-indigo-900 mb-7 underline">Languages</h2>
                <div className="space-y-6 mt-7">
                    {languageData.map((language, a) =>(
                    <div 
                    key = {a}
                    className="flex flex-col sm:flex-row item-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-2 md:p-6 lg:p-6 rounded-lg shadow-md bg-background bg-opacity-70">
                        <div
                        className="rounded-full object-cover"
                        >
                            <h3 className="text-lg md:text-xl lg:text-xl font-bold text-indigo-900">{language.name}</h3>
                        </div>
                        <div>
                            <p className="mt-1 md:mt-2 lg:mt-2 text-indigo-950 text-sm md:text-base lg:text-lg font-semibold text-left">{language.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
