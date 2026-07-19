import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function DomainExpansion() {
  const tasks = [
    {
      text: "Developed responsive React.js interfaces by translating Figma designs into reusable, production-ready components and integrating APIs for a seamless user experience.",
      keywords: [
        "React.js",
        "Figma designs",
        "reusable",
        "production-ready components",
        "APIs",
      ],
    },
    {
      text: "Integrated Swiggy APIs to display live restaurant listings, menu data, and dynamic restaurant details within the application.",
      keywords: [
        "Swiggy APIs",
        "live restaurant listings",
        "menu data",
        "dynamic restaurant details",
      ],
    },
    {
      text: "Implemented client-side routing with React Router to enable smooth navigation between restaurant listings, menus, and other application views.",
      keywords: [
        "React Router",
        "client-side routing",
        "smooth navigation",
        "restaurant listings",
        "menus",
      ],
    },
    {
      text: "Improved React application performance through code splitting, lazy loading, and reusable custom hooks, reducing initial load time and creating a faster user experience.",
      keywords: [
        "code splitting",
        "lazy loading",
        "custom hooks",
        "initial load time",
        "faster user experience",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            ReactJS Developer Intern{" "}
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
