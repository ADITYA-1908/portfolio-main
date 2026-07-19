import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function BDBAI() {
  const tasks = [
    {
      text: "Developing enterprise-grade UI modules for the BDB Data Center, enabling management of data connectors, datasets, metadata, and sandboxes, reducing data onboarding effort by 40%.",
      keywords: [
        "enterprise-grade UI modules",
        "BDB Data Center",
        "data connectors",
        "datasets",
        "metadata",
        "sandboxes",
        "40%",
      ],
    },
    {
      text: "Built UI features for the BDB Kinetic Semantic Layer, allowing users to define business metrics, apply governance rules, and schedule semantic jobs that trigger downstream data pipeline executions.",
      keywords: [
        "BDB Kinetic Semantic Layer",
        "business metrics",
        "governance rules",
        "semantic jobs",
        "data pipeline executions",
      ],
    },
    {
      text: "Integrated the Monaco Code Editor with SQL auto-completion, syntax highlighting, and query validation, improving query development productivity by 35%.",
      keywords: [
        "Monaco Code Editor",
        "SQL auto-completion",
        "syntax highlighting",
        "query validation",
        "35%",
      ],
    },
    {
      text: "Developed reusable components using Angular, TypeScript, and RxJS, and optimized performance through lazy loading and efficient state management, reducing page load time by 30%.",
      keywords: [
        "Angular",
        "TypeScript",
        "RxJS",
        "lazy loading",
        "state management",
        "30%",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Associate Software Engineer{" "}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Nov 2025 - Present
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
