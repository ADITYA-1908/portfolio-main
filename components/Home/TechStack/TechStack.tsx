import {
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMapbox,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

export default function TechStack() {
  const tech = [
    { name: "HTML", Icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", Icon: SiCss3, color: "text-blue-500" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "text-purple-600" },
    { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
    
    { name: "React.js", Icon: SiReact, color: "text-sky-400" },
    { name: "Angular", Icon: SiAngular, color: "text-red-600" },
    { name: "Node.js", Icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express.js", Icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", Icon: SiMongodb, color: "text-green-600" },
    { name: "Socket.io", Icon: SiSocketdotio, color: "text-gray-200" },
    { name: "Redis", Icon: SiRedis, color: "text-red-500" },
    { name: "Mapbox", Icon: SiMapbox, color: "text-gray-200" },
    { name: "GitHub", Icon: SiGithub, color: "text-gray-200" },
    { name: "Postman", Icon: SiPostman, color: "text-orange-500" },
  ];

  return (
    <div
      id="techstack"
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-20 bg-AAprimary"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-gray-200 tracking-wider">
        My Tech Stack
      </h2>
      <p className="mt-3 mb-10 px-4 text-center text-sm text-gray-400 md:text-base">
        Technologies and frameworks I work with to build modern, scalable
        applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-10">
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
