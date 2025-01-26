import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Artflix() {
  const tasks = [
    {
      text: "Developed ArtFlix Design, a global platform connecting artists and design enthusiasts.",
      keywords: ["platform", "Developed"],
    },
    {
      text: "Translated creative concepts into responsive, user-friendly web interfaces, enhancing multi-device user experiences.",
      keywords: ["responsive", "multi-device "],
    },
    {
      text: "Improved proficiency in React.js, while fostering a deeper understanding of technology and creativity.",
      keywords: ["React.js"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Frontend Developer Intern{" "}
            <span className="text-AAsecondary">@React.js</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            August 2023 - Septmber 2023
          </span>
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
