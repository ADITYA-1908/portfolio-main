import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

export default function WhereIHaveWorked() {
  const tech = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    
    { name: "React.js", icon: <SiReact className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-200" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  ];

  return (
    <div
      id="techstack"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-20 bg-AAprimary"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-gray-200 tracking-wider mb-10">
        My Tech Stack
      </h2>

      {/* EXACT GRID: 7 per row on large screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10">
        {tech.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 hover:scale-110 duration-300"
          >
            <div className="text-5xl">{item.icon}</div>
            <span className="text-gray-300 text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
