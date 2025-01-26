import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Orufy() {
  const tasks = [
    {
      text: "Built a vendor website from scratch, handling 100% of the front-end and back-end implementation, ensuring seamless functionality.",
      keywords: ["100%"],
    },
    {
      text: "Integrated REST APIs (20% of the work) to enable efficient communication between the front-end and back-end.",
      keywords: [" REST APIs", "20%"],
    },
    {
      text: "Developed a full-stack web application using React.js,Material-UI, Redux.js, and Node.js, contributing 60% to front-end and 40% to back-end development.",
      keywords: [
        "React.js",
        "Material-UI",
        "Redux.js",
        "Node.js",
        "60%",
        "40%",
      ],
    },
    {
      text: "Launched a responsive SAAS platform, ensuring accessibility, SEO optimization, and seamless user experience by collaborating with the design team.",
      keywords: ["SAAS", "accessibility", "SEO"],
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
            November 2023 - December 2023
          </span>
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
