import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function NISTUNIVERSITY() {
  const tasks = [
    {
      text: "Developed Graduate Us, an online platform that connects college students with alumni, featuring real-time chat, a job and internship portal",
      keywords: ["Graduate Us", "connects", "chat", "job", "internship"],
    },
    {
      text: "Built using React.js, Material UI, Node.js, MongoDB, and AWS for a seamless user experience and robust data management.",
      keywords: ["React.js", "AWS", "Material UI", "Node.js", "MongoDB"],
    },
    {
      text: "Integrated powerful backend support with cloud functionality to enhance platform scalability and performance.",
      keywords: ["backend", "scalability"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Summer Internship{" "}
            <span className="text-AAsecondary">@Full Stack</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2024</span>
          {/* <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.trouvetavoie.io/", "_blank")}
          >
            www.trouvetavoie.io
          </span> */}
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
