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
  SiTypescript,
} from "react-icons/si";

export default function WhereIHaveWorked() {
  const tech = [
    { name: "HTML", Icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", Icon: SiCss3, color: "text-blue-500" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "text-purple-600" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-teal-400" },
    { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
    { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500" },

    { name: "React.js", Icon: SiReact, color: "text-sky-400" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-gray-200" },
    { name: "Express.js", Icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-green-600" },
    { name: "Firebase", Icon: SiFirebase, color: "text-yellow-500" },
    { name: "GitHub", Icon: SiGithub, color: "text-gray-200" },
    { name: "Postman", Icon: SiPostman, color: "text-orange-500" },
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10">
        {tech.map((item, index) => {
          const IconComponent = item.Icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 hover:scale-110 duration-300"
            >
              <IconComponent className={`text-5xl ${item.color}`} />

              <span className="text-gray-300 text-sm font-medium">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
