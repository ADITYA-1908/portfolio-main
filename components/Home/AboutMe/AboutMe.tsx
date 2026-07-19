import ArrowIcon from "../../../components/Icons/ArrowIcon";
import Img from "../../../components/smallComp/image/Img";
export default function AboutMe(props) {
  const technologies = [
    ["Angular", "React.js", "Next.js", "TypeScript"],
    ["Node.js", "Express.js", "MongoDB", "GraphQL"],
  ];
  const highlightWords = [
    "Aditya",
    "Basantia",
    "Associate",
    "Software",
    "Engineer",
    "BizViz",
    "Technologies",
    "Angular",
    "TypeScript",
    "RxJS",
    "Monaco",
    "Editor",
    "MERN",
    "Stack",
    "Socket.io",
    "JWT",
    "OAuth",
    "GraphQL",
    "REST",
    "Redis-based",
    "Razorpay",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind",
    "CSS",
    "Java",
    "Spring",
    "Boot",
    "Microservices",
    "System",
    "Design",
  ];
  const paragraphs = [
    "Hi, I'm Aditya Basantia, an Associate Software Engineer based in Bangalore, India, passionate about building scalable, high-performance web applications.",
    "I currently work at BizViz Technologies, where I develop enterprise-grade applications using Angular, TypeScript, RxJS, and Monaco Editor. Previously, I worked as a Full Stack Developer Intern, building production-ready applications with the MERN Stack, GraphQL, REST APIs, Redis, Socket.io, JWT authentication, and Razorpay integration.",
    "I enjoy creating clean, reusable, and efficient software—from responsive frontend interfaces to scalable backend services. Along the way, I've built several full-stack projects, including an E-Commerce Platform, a cloud-based file management system, and this portfolio website.",
    "I'm continuously expanding my skills in Java, Spring Boot, Microservices, Data Structures & Algorithms, and System Design. My goal is to become a well-rounded Full Stack Software Engineer and contribute to building impactful products that solve real-world problems.",
  ];
  // Function to highlight specific words in a given text
  const highlightText = (text) => {
    return text.split(" ").map((word, index) => {
      const cleanedWord = word.replace(/^[^\w]+|[^\w]+$/g, "");
      if (highlightWords.includes(cleanedWord)) {
        return (
          <span key={index} className="text-AAsecondary">
            {word}{" "}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            {paragraphs.map((paragraph, index) => (
              <div key={index} className="font-Header">
                <span className="text-gray-400">{highlightText(paragraph)}</span>
              </div>
            ))}
            {/* <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary"> a huge manufacturing company</span>,
                <span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">export-import companies</span>, also
                <span className="text-AAsecondary"> freelancing</span> and recently as Lead for the{" "}
                <span className="text-AAsecondary">Google Developer Student club</span>. Experienced in Desktop & Web
                Development, lately with Arduino Development. My main focus these days is creating and testing{" "}
                <span className="text-AAsecondary">Smart Contracts</span> with Hardhat.
              </span>
            </div> */}

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently
                :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-1.9 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/me.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/me.JPG"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
