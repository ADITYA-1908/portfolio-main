import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon";
import ExternalLink from "../../Icons/ExternalLink";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import Img from "../../smallComp/image/Img";

export default function SomethingIveBuilt() {
  const projects = [
    {
      id: 1,
      title: "The Backyard Cafe",
      type: "E-Commerce",
      description:
        "I had made a website for the Backyard Cafe and delivered it using HTML, CSS, and JavaScript. The project involved creating a responsive and visually appealing design that aligned with the cafe's brand. One notable feature was the integration of an online menu and reservation system, which allowed users to easily browse the menu and book tables online. Additionally, I implemented SEO best practices to improve the cafe's online visibility, resulting in increased web traffic and customer engagement. This project highlighted my ability to deliver functional and attractive web solutions tailored to client needs.",
      stack: ["HTML", "Tailwind", "Java Script", "Firebase", "Twillo"],
      image: "/Backyard-cafe.png",
      liveLink: "https://backyards-cafe-omega.vercel.app/",
      github: "https://github.com/ADITYA-1908/Backyards-Cafe",
    },
    {
      id: 2,
      title: "Nitro Type",
      type: "Learning Platform",
      description:
        "I developed a website using cutting-edge technologies like Next.js, and Algorithms. This project enhances typing skills by tracking progress and providing scores based on speed and accuracy. It helps users improve their typing efficiency through round-by-round performance analysis and detailed statistics, making it easier to achieve professional typing standards of at least 40 WPM, essential for workplace efficiency.",
      stack: ["Next.js", "Tailwind CSS", "TypeScript", "Algorithms"],
      image: "/nitro-type.png",
      liveLink: "https://nitro-typee.vercel.app/",
      github: "https://github.com/ADITYA-1908/nitro-type",
    },
{
  id: 3,
  title: "JSON Tree Visualizer",
  type: "Frontend Web Application",
  description:
    "An advanced interactive web application built with React and React Flow that visualizes JSON data as a hierarchical, color-coded tree structure. It features real-time JSON validation, path-based search, and intuitive visualization that helps developers analyze complex data structures effortlessly. The project emphasizes clean UI design, modular architecture, and smooth navigation using Tailwind CSS, making it both a practical tool and a showcase of frontend engineering skills.",
  stack: ["React.js", "React Flow", "Tailwind CSS", "JavaScript (ES6+)"],
  image: "/JsonTree.png",
  liveLink: "https://json-visualizer-gold.vercel.app/",
  github: "https://github.com/ADITYA-1908/JSON-Visualizer",
},
    {
      id: 4,
      title: "Tomato",
      type: "E-Commers",
      description:
        "This is a comprehensive full-stack food ordering platform built using React.js (Vite), MongoDB Atlas, Node.js, and Express.js. The application features a modern, responsive UI with a user-friendly interface for customers and a robust admin panel for order and menu management. It integrates Stripe for secure online payments and offers essential features like user authentication, shopping cart, and real-time order tracking. This project highlights my ability to create scalable, end-to-end web solutions with real-world functionality.",
      stack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
      ],
      image: "/food-delivery.png",
      liveLink: "https://fooddeliveryapp-frontend-m52c.onrender.com/",
      github: "https://github.com/ADITYA-1908/Food-delivery",
    },

    {
  id: 5,
  title: "Mind Mate",
  type: "AI To-Do App",
  description:
    "Mind Mate is an AI-powered to-do list application that offers smart task suggestions, voice input, and personalized productivity insights. It features secure authentication, full CRUD task management, responsive UI, and integrates GPT-4 for intelligent task categorization, prioritization, and feedback. Built using React.js, Tailwind CSS, Redux Toolkit, and Firebase.",
  stack: ["React.js", "Tailwind CSS", "Redux Toolkit", "Firebase", "OpenAI GPT-4"],
  image: "/MindMate.png", 
  liveLink: "https://mind-mate-lac.vercel.app/",
  github: "https://github.com/ADITYA-1908/MindMate-Pro",
},
    {
      id: 6,
      title: "Storelt",
      type: "File Manager",
      description:
        "I had made a website storelt that replicates and enhances the core functionalities of Google Drive. The platform features secure user authentication using Appwrite, allowing users to sign up, log in, and manage sessions. Users can upload various file types including documents, images, videos, and audio—view them in a new tab, rename, delete, download, or share files with others for easy collaboration. A dynamic dashboard provides insights into total and consumed storage, recent uploads, and a summary of files by type. The app includes global search, sorting options, and a modern, responsive UI built for accessibility across devices.",
      stack: [
        "React.js",
        "Tailwind CSS",
        "Shadcn/UI",
        "Node.js",
        "Express.js",
      ],
      image: "/myDrive.png",
      liveLink: "https://storage-management-solutions.vercel.app/",
      github: "https://github.com/ADITYA-1908/My-drive",
    },

  ];

  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {projects.map((project) =>
          project.id % 2 !== 0 ? (
            // 🔹 Odd ID Layout (Like Project 1)
            <div
              key={project.id}
              data-aos="fade-up"
              className="relative md:grid md:grid-cols-12 w-full md:h-96"
            >
              {/* Left image */}
              <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
                <div className="relative rounded w-full h-full col-start-6 col-span-7">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
                  </a>
                  <Img
                    src={project.image}
                    alt="Project Screenshot"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
                {/* Background for mobile */}
                <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                    <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                    <Img
                      src={project.image}
                      alt="Project Screenshot"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
                  <div className="flex flex-col space-y-1 z-10">
                    <span className="text-AAsecondary text-base">
                      {project.type}
                    </span>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                        {project.title}
                      </span>
                    </a>
                  </div>
                  <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                    <p className="text-gray-300 md:text-gray-400 text-left">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="pr-4 z-10">
                        {tech}
                      </span>
                    ))}
                  </ul>
                  <div className="z-10 flex fle-row space-x-5">
                    <GithubIcon link={project.github} />
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <ExternalLink url={project.liveLink} router={router} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // 🔸 Even ID Layout (Like Project 2)
            <div
              key={project.id}
              data-aos="fade-up"
              className="relative md:grid md:grid-cols-12 w-full md:h-96"
            >
              {/* Left image */}
              <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
                <div className="relative rounded w-full h-full col-span-7">
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
                  </a>
                  <Img
                    src={project.image}
                    alt="Project Screenshot"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
                {/* Background for mobile */}
                <div className="absolute w-full h-full bg-opacity-70 z-0">
                  <div className="relative w-full h-full">
                    <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                    <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                    <Img
                      src={project.image}
                      alt="Project Screenshot"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <div className="absolute w-full rounded ml-4 mt-2 text-end pr-8">
                  <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>

                <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1">
                  <div className="flex flex-col space-y-1 md:items-end z-10">
                    <span className="text-AAsecondary text-base">
                      {project.type}
                    </span>
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                        {project.title}
                      </span>
                    </a>
                  </div>
                  <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                    <p className="text-gray-300 md:text-gray-400 text-left">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="pr-4 z-10">
                        {tech}
                      </span>
                    ))}
                  </ul>
                  <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                    <GithubIcon link={project.github} />
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <ExternalLink url={project.liveLink} router={router} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
