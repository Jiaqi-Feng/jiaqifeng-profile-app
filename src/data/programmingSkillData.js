
import { FaHtml5, FaCss3Alt, FaPhp, FaDatabase,FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

const programmingSkillData = [
    // title: "My Skills",
    // description: "Exploring the diverse range of skills I've developed."
    {
        name: "HTML",
        icon: <FaHtml5/>,
        description: "Used to structure web pages in projects, including creating personal websites and dynamic content layouts. Mastered at an intermediate level."
    },
    {
        name: "CSS",
        icon: <FaCss3Alt/>,
        description: "Applied for styling and responsive design, including the use of Tailwind CSS for efficient and modern UI development. Proficient at an intermediate level."
    },
    {
        name: "JavaScript",
        icon: <TbBrandJavascript/>,
        description: "Utilized for adding interactivity and dynamic functionality to web projects, such as contact forms and user interfaces. Proficient at an intermediate level."
    },
    {
        name: "JavaFx",
        icon: <FaJava />,
        description: "Used to create interactive desktop applications with graphical user interfaces in Java-based projects. Proficient at an intermediate level."
    },
    {
        name: "PHP",
        icon: <FaPhp/>,
        description: "Implemented in backend development for dynamic websites, including form handling and database integration. Basic proficiency."
    },
    {
        name: "SQL",
        icon: <FaDatabase/>,
        description: "Used for managing databases, such as storing and querying contact information in applications. Proficient at an intermediate level."
    },
    {
        name: "Java",
        icon: <FaJava />,
        description: "The most frequently used language, applied in multiple projects, including desktop and web applications, with advanced-level mastery."
    },
    {
        name: "C#",
        icon: <img src="/cSharpLogo.png" alt="JavaFx-Logo" style={{width:"70px", height:"24px"}}/>,
        description: "Used for building cross-platform applications, including a .NET MAUI contact list app with SQLite integration. Proficient at an intermediate level."
    }
];

export default programmingSkillData;