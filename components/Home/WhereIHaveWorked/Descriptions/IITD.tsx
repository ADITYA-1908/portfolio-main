// import ArrowIcon from "../../../Icons/ArrowIcon";
// import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

// export default function IITD() {
//   const tasks = [
//     {
//       text: "Developed a Java program that takes the source and destination station information from the user and displays the fare and shortest metro route, accompanied by a metro map for better navigation.",
//       keywords: ["java", "program", "metro", "fare", "shortest","better navigation","route"],
//     },
//     {
//       text: "Implemented the solution using Graph and Heap data structures, where nodes represent metro stations and edges represent the distance and cost between them.",
//       keywords: ["Graph", "Heap data structures", "nodes","edges","cost"],
//     },
//     {
//       text: "Used algorithms like Dijkstra, BFS, and DFS to determine the shortest path, calculating the fare based on the total distance between stations and displaying the metro route.",
//       keywords: ["Dijkstra","BFS","DFS","calculating","distance"],
//     },
    
//   ];

//   return (
//     <>
//       <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
//         <div className="flex flex-col spacey-y-2">
//           {/* Title */}
//           <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
//             Summer Research Intern <span className="text-AAsecondary">@Java </span>
//           </span>
//           {/* Date */}
//           <span className="font-mono text-xs text-gray-500">June 2024 - July 2024</span>
//           {/* <span
//             className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
//             style={{ fontSize: "0.6rem" }}
//             // set on click to open the website
//             onClick={() => window.open("https://www.ens.vision/", "_blank")}
//           >
//             www.ens.vision
//           </span> */}
//         </div>
//         <div className="flex flex-col space-y-4 sm:text-sm text-xs">
//           {/* Tasks Description 1 */}
//           {tasks.map((item, index) => {
//             return (
//               <div key={index} className="flex flex-row space-x-1">
//                 <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
//                 <span
//                   className="text-gray-500 sm:text-sm text-xs"
//                   dangerouslySetInnerHTML={{
//                     __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
//                   }}
//                 ></span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
