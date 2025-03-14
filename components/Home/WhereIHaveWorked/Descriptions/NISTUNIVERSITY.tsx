import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function NISTUNIVERSITY() {
  const tasks = [
    {
      text: "Designed and developed a platform to enhance typing speed by tracking user progress and providing scores for speed and accuracy.",
      keywords: ["accuracy", "speed"],
    },
    {
      text: "Utilized Next.js, Tailwind CSS, Framer Motion, and custom algorithms to deliver an engaging and responsive user experience.",
      keywords: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      text: "Implemented features to analyze and visualize typing performance, helping users improve accuracy and efficiency over time.",
      keywords: ["time"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Summer Internship <span className="text-AAsecondary">@NextJS</span>
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
