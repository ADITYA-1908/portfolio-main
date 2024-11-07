import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Orufy() {
  const tasks = [
    {
      text: "Developed key features for the Orufy project by integrating REST APIs and building dynamic web pages using React.js.",
      keywords: [" REST APIs","React.js","Orufy"],
    },
    {
      text: "Optimized loading time by 15%, improving overall project performance.",
      keywords: ["Optimized loading","15%","performance"],
    },
    {
      text: "Implemented dynamic tables and CRUD applications, enhancing data management and user experience.",
      keywords: ["CRUD applications","dynamic tables"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Software Development Engineer Intern <span className="text-AAsecondary">@Full Stack</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">November 2024 - December 2024</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
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
