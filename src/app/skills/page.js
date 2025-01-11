import softSkillsData from "@/data/softSkillsData";
import programmingSkillData from "@/data/programmingSkillData";
import languageData  from "@/data/languageData";

export default function Skills(){
    return(
        <div className="p-8 min-h-screen">
            <div className="text-black bg-title-color p-8 rounded-lg shadow-md mt-5 bg-opacity-60">
                <h1 className="text-6xl font-bold text-indigo-950">
                    SKILL SET
                </h1>
                <p className="text-xl font-semibold text-blue-950 mt-4">Exploring the diverse range of skills I've developed.</p>
            </div>

            {/* Soft skill section */}
            <section className="space-y-10 mt-7">
                <div className="p-6">
                    <h2 className="text-4xl font-bold text-indigo-900 mb-7 underline">Soft Skill</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {softSkillsData.map((softSkill, index) => (
                            <div
                            key={index}
                            className="bg-white shadow-lg p-4 rounded-lg flex items-start space-x-4 bg-opacity-70"
                            >
                                <div className="text-3xl">
                                    {softSkill.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-900">{softSkill.name}</h3>
                                    <p className="mt-2 text-indigo-950 text-base font-semibold">{softSkill.description}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Programming skill section */}
            <section className="space-y-10 mt-7">
                <div className="p-6">
                    <h2 className="text-4xl font-bold text-indigo-900 mb-7 underline">Programming Skill</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {programmingSkillData.map((proSkill, i) => (
                            <div
                            key={i}
                            className="bg-white shadow-lg p-4 rounded-lg flex items-start space-x-4 bg-opacity-70"
                            >
                                <div className="text-3xl">
                                    {proSkill.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-indigo-900">{proSkill.name}</h3>
                                    <p className="mt-2 text-indigo-950 text-base font-semibold">{proSkill.description}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Programming skill section */}
            <section className="p-6">
                <h2 className="text-4xl font-bold text-indigo-900 mb-7 underline">Languages</h2>
                <div className="space-y-6 mt-7">
                    {languageData.map((language, a) =>(
                    <div 
                    key = {a}
                    className="flex items-center space-x-4 p-6 rounded-lg shadow-md bg-background bg-opacity-70">
                        <div
                        className="rounded-full object-cover "
                        >
                            <h3 className="text-xl font-bold text-indigo-900">{language.name}</h3>
                        </div>
                        <div>
                            <p className=" text-indigo-950 text-lg font-semibold text-left">{language.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
