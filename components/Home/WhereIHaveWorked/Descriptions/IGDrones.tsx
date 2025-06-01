import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Delbird() {
  const tasks = [
    {
      text: "Collaborated on Project Amgen, integrating APIs to enhance functionality, utilizing React.js  for seamless data management.",
      keywords: ["Amgen", "React.js", "APIs"],
    },
    {
      text: "Developed and optimized multiple features on the landing page of Amgens, improving user interface and overall user experience.",
      keywords: ["landing page"],
    },
    {
      text: "implified various components within the project, significantly reducing load time and enhancing performance for smoother user interactions.",
      keywords: ["reducing load time"],
    },
    {
      text: "• Optimized the project loading time by 15%, implemented dynamic tables and CRUD applications",
      keywords: ["15%", "CRUD"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Development Engineer Intern{" "}
            <span className="text-AAsecondary">@Full Stack</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            January 2024 - March 2024
          </span>
          {/* <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https:///www.fevertokens.io", "_blank")}
          >
            www.fevertokens.io
          </span> */}
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
