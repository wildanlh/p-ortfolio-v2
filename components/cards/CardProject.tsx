import React from "react";
import { CardImage } from "./CardImage";
import { CardDesc } from "./CardDesc";
import { projects } from "@/content";
import { Card } from "./Card";

export const CardProject: React.FC = () => {
  return (
    // <>
    //   {projects.map((value, index) => (
    //     <div className="flex flex-col relative mb-72" key={index}>
    //       {index % 2 === 0 ? (
    //         <>
    //           <div className="w-3/4">
    //             <CardImage image={value.image} title={value.title} />
    //           </div>
    //           <div className="w-2/5 absolute right-0">
    //             <CardDesc
    //               title={value.title}
    //               description={value.description}
    //               tags={value.tags}
    //               github={value.github}
    //               demo={value.demo}
    //               className="text-right justify-end"
    //               variants={-300}
    //             />
    //           </div>
    //         </>
    //       ) : (
    //         <>
    //           <div className="w-2/5 absolute left-0">
    //             <CardDesc
    //               title={value.title}
    //               description={value.description}
    //               tags={value.tags}
    //               github={value.github}
    //               demo={value.demo}
    //               variants={300}
    //             />
    //           </div>
    //           <div className="w-3/4 ml-auto">
    //             <CardImage image={value.image} title={value.title} />
    //           </div>
    //         </>
    //       )}
    //     </div>
    //   ))}
    // </>
    <>
      {projects.map((value, index) => (
        <div key={index}>
          <Card
            title={value.title}
            description={value.description}
            tags={value.tags}
            image={value.image}
            github={value.github}
            demo={value.demo}
          />
        </div>
      ))}
    </>
  );
};
