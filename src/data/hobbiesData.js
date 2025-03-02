import { LuGamepad2, LuMountain } from "react-icons/lu";
import { GiShuttlecock } from "react-icons/gi";
import { FaSwimmer } from "react-icons/fa";
import { CiDumbbell } from "react-icons/ci";
import { RiStairsLine } from "react-icons/ri";

const hobbiesData = [
    // title: "Hobbies",
    // description: "This is hobbies content"
    {
        icon: <LuGamepad2/>,
        name: "Video Game",
        descriptiion: "Love exploring virtual worlds, solving puzzles, and enjoying the thrill of competitive gaming."
    },
    {
        icon: <GiShuttlecock/>,
        name: "Badminton",
        descriptiion: "Enjoy playing badminton as a way to stay active, improve reflexes, and have fun."
    },
    {
        icon: <LuMountain/>,
        name: "Hiking",
        descriptiion: "Short hiking trip to enjoy nature, clear the mind, and recharge energy for the week."
    },
    {
        icon: <FaSwimmer/>,
        name: "Swimming",
        descriptiion: "Swimming is a hobby I built up since childhood. I earned a third-grade sportsman certificate in China, making it a significant part of my life."
    },
    {
        icon: <CiDumbbell/>,
        name: "Gym",
        descriptiion: "Focus on building strength and endurance through regular workouts at the gym."
    },
    {
        icon: <RiStairsLine/>,
        name: "Personal Development",
        descriptiion: "Constantly learning new skills, such as coding, and exploring ways to grow both professionally and personally."
    },

];

export default hobbiesData;