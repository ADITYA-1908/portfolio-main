import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function DomainExpansion() {
  const tasks = [
    {
      text: "Played a key role in developing a responsive SAAS platform by seamlessly integrating APIs and converting Figma designs into functional code, enhancing collaboration between clients and agencies.",
      keywords: ["SAAS", "APIs", "Figma"],
    },
    {
      text: "Improved the platform's usability and functionality, resulting in a 25% boost in user engagement.",
      keywords: ["25%", "boost"],
    },
    {
      text: "Utilized React.js and Bootstrap to upgrade static web pages, ensuring they were responsive and adaptable to various devices.",
      keywords: ["React.js", "Bootstrap", "responsive"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            ReactJS Developer Intern{" "}
            <span className="text-AAsecondary">@ReactJS</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2025 - Present
          </span>
          {/* <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.ens.vision/", "_blank")}
          >
            www.ens.vision
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
