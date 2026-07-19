import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SSPvtLtd() {
  const tasks = [
    {
      text: "Developed a full-stack Bus Management System supporting ticket booking, seat reservation, and bus rentals using the MERN Stack, with backend services exposed through GraphQL and REST APIs.",
      keywords: [
        "Bus Management System",
        "ticket booking",
        "seat reservation",
        "bus rentals",
        "MERN Stack",
        "GraphQL",
        "REST APIs",
      ],
    },
    {
      text: "Implemented real-time bus tracking using Socket.io for live communication, Redis (Pub/Sub) for scalable event distribution and location caching, and Mapbox for live route visualization and map rendering.",
      keywords: [
        "real-time bus tracking",
        "Socket.io",
        "Redis",
        "Pub/Sub",
        "location caching",
        "Mapbox",
        "live route visualization",
      ],
    },
    {
      text: "Built secure authentication using JWT and Google OAuth, and integrated the Razorpay Payment Gateway for secure online payments with encrypted transactions and payment verification.",
      keywords: [
        "JWT",
        "Google OAuth",
        "Razorpay Payment Gateway",
        "encrypted transactions",
        "payment verification",
      ],
    },
    {
      text: "Improved application performance by 15% through optimized Redux state management, reusable custom React hooks, list virtualization, and MongoDB indexing for faster database queries.",
      keywords: [
        "performance",
        "15%",
        "Redux",
        "custom React hooks",
        "list virtualization",
        "MongoDB indexing",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer Intern{" "}

          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            May 2025 - Nov 2025
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
