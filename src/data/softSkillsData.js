import { FaHandshake,FaBalanceScale  } from "react-icons/fa";
import { HiPuzzle, HiOutlineRefresh  } from "react-icons/hi";
import { SiNicehash } from "react-icons/si";
import { TiStopwatch } from "react-icons/ti";

const softSkillsData = [
    // title: "My Skills",
    // description: "Skills to be added."
    {
        name: "Problem Solving",
        icon: <HiPuzzle/>,
        description: "Utilizing logical thinking to identify solutions and address challenges effectively, leveraging both accounting and software development experience to break down complex issues."
    },
    {
        name: "Ensuring Accuracy",
        icon: <SiNicehash/>,
        description: "Applying meticulous attention to detail and strong analytical skills to ensure the highest level of accuracy in financial reporting and software development processes."
    },
    {
        name: "Decision Making",
        icon: <FaBalanceScale/>,
        description: "Making informed decisions based on data analysis, business needs, and long-term goals, demonstrated through managing financial accounts and tackling software project challenges."
    },
    {
        name: "Teamwork and Independence",
        icon: <FaHandshake/>,
        description: "Balancing the ability to work collaboratively within teams, particularly in project-based environments, and also excelling in independent tasks, both in accounting and development projects."
    },
    {
        name: "Handling Pressure and Multitasking",
        icon: <TiStopwatch/>,
        description: "Managing tight deadlines, balancing multiple tasks efficiently, and staying calm under pressure, skills honed through both accounting tasks with monthly reports and managing multiple development projects."
    },
    {
        name: "Adaptability",
        icon: <HiOutlineRefresh/>,
        description: "Quickly adjusting to new challenges, environments, and technologies, a key skill honed by transitioning from accounting to software development and adapting to evolving tools and methodologies."
    }
];

export default softSkillsData;