import Link from "next/link";
import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon";
import ExternalLink from "../../Icons/ExternalLink";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import Img from "../../smallComp/image/Img";

export default function SomethingIveBuilt() {
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
        {/* // ?----------------------------------------------  Project 1 -------------------------------------------------------*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://edverse.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/Eduverse.png"}
                alt={"Project Screen shot"}
                className={`w-full h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Eduverse.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Learning Platform
                </span>
                <a
                  href="https://edverse.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Nitro Type
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  I had made a website{" "}
                  <span className="text-AAsecondary">Eduverse </span>
                  and delivered it using React.js, Vite, Tailwind CSS, Framer
                  Motion, Email.js. Delivered a responsive and visually
                  appealing platform designed to assist college students in
                  accessing Best video lectures and comprehensive roadmaps for
                  various programming languages and domains. The primary
                  objective of this project was to streamline the study process,
                  helping students save time while preparing for exams. This
                  project demonstrated my ability to deliver effective and
                  engaging web solutions tailored to student needs.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Vite</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Framer Motion</span>
                <span className="pr-4 z-10">Email js</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/ADITYA-1908/e-learning" />
                <a
                  href="https://edverse.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? ------------------------------------------------ Project  2-----------------------------------------------------*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://backyards-cafe-omega.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              {/* <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                <span className="text-AAsecondary text-xl">
                  In initiation...
                </span>
              </div> */}

              <Img
                src={"/Backyard-cafe.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Backyard-cafe.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">
                E-Commerce website
              </span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">E-Commers</span>
                <a
                  href="https://backyards-cafe-omega.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    The Backyard Cafe
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  I had made a website for the Backyard Cafe and delivered it
                  using HTML, CSS, and JavaScript. The project involved creating
                  a responsive and visually appealing design that aligned with
                  the cafe's brand. One notable feature was the integration of
                  an online menu and reservation system, which allowed users to
                  easily browse the menu and book tables online. Additionally, I
                  implemented SEO best practices to improve the cafe's online
                  visibility, resulting in increased web traffic and customer
                  engagement. This project highlighted my ability to deliver
                  functional and attractive web solutions tailored to client
                  needs.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">HTML</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Java Script</span>
                <span className="pr-4 z-10">Firebase</span>
                <span className="pr-4 z-10">Twillo</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/ADITYA-1908/Backyards-Cafe" />
                <a
                  href="https://backyards-cafe-omega.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink
                    url={"https://backyards-cafe-omega.vercel.app/"}
                    router={router}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?----------------------------------------------  Project 3 -------------------------------------------------------*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://nitro-typee.vercel.app/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/nitro-type.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/nitro-type.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Learning Platform
                </span>
                <a
                  href="https://nitro-typee.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Nitro Type
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I developed a website using cutting-edge technologies like{" "}
                  <span className="text-AAsecondary">Next.js </span>, and
                  <span className="text-AAsecondary"> Algorithms</span>. his
                  project enhances typing skills by{" "}
                  <span className="text-AAsecondary">tracking progress </span>
                  and providing{" "}
                  <span className="text-AAsecondary"> scores </span>
                  based on speed and accuracy. It helps users improve their
                  typing efficiency through round-by-round performance analysis
                  and detailed statistics, making it easier to achieve
                  professional typing standards of at least 40 WPM, essential
                  for workplace efficiency.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">Framer Motion </span>
                <span className="pr-4 z-10">Algorithms</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/ADITYA-1908/nitro-type" />
                <a
                  href="https://nitro-typee.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ? -------------------------------------------- Project 4--------------------------------------------------------*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={"/moneymap.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/moneymap.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Expence Tracker
                </span>
                <Link href={"/typing"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Money Map
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  I developed the{" "}
                  <span className="text-AAsecondary">Money Map</span> an expense
                  tracker app that records your monthly income and spending. It
                  provides insights into graph patterns, enabling users to make
                  informed financial decisions and optimize their budgeting. The
                  project aims to help the user to manage finances and monitor
                  spending patterns efficiently. Tech Stack used for the app
                  were React.js, Tailwind CSS, and Drizzle ORM for managing our
                  database.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">Drizzle ORM</span>
                <span className="pr-4 z-10">Clerk</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="" />
                <ExternalLink url={""} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* // ? ------------------------------------------------ Project 5 ------------------------------------------------------*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={""}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"/nist.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/hackme.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Chat App</span>
                <Link href={""}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Alumni Hub
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I developed the{" "}
                  <span className="text-AAsecondary">AlumniHub</span> an online
                  web application designed to help college students connect with
                  alumni for career guidance, networking, and mentorship. The
                  platform enables students to chat with alumni, access
                  optimized job listings, apply for internships, and receive 1:1
                  mentorship, fostering valuable relationships that support
                  their professional growth. The project provides a seamless
                  user experience and valuable career resources, empowering
                  students to take charge of their career development. Built
                  using React.js for the frontend, Node.js and Express.js for
                  the backend, MongoDB for database management, and AWS for
                  cloud infrastructure, AlumniHub offers a reliable and scalable
                  solution for students.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">Twilio</span>
                <span className="pr-4 z-10">stream</span>
                <span className="pr-4 z-10">Typescript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="" />
                {<ExternalLink url={""} router={router} />}
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 6 */}
        {/* <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        > */}
        {/* Left image */}
        {/* <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://github.com/hktitof/CallCenter"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/jirds.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div> */}

        {/* right Content */}
        {/* <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center "> */}
        {/* background for text in mobile responsive */}
        {/* <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/CallCenter.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div> */}

        {/* <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            > */}
        {/* <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://jirds.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    JIRDS Landing Page
                  </span>
                </a>
              </div> */}
        {/* <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  I developed a website for{" "}
                  <span className="text-AAsecondary">JIRDS</span>, an NGO, to
                  help users learn about their services and mission. The website
                  provides detailed information about the organization, its
                  initiatives, and ways to get involved. By creating a
                  user-friendly and informative platform, I enabled JIRDS to
                  effectively communicate their impact and engage with a broader
                  audience. This project highlights my ability to craft tailored
                  web solutions that support the goals of nonprofit
                  organizations.
                </p>
              </div> */}
        {/* <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Email Js</span>
                <span className="pr-4 z-10">React</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Bootstrap</span>
              </ul> */}
        {/* <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com/njrgourav11/JIRDS" />
                <a
                  href="https://jirds.vercel.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
