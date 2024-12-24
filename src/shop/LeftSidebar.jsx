import { useState } from "react";
import { clothCategory } from "./clothCategory";

export default function LeftSidebar() {
  const [selected, setSelected] = useState("all");
  return (
    <div className="w-[20%] h-full">
      <div className="w-full"></div>
      <div className="fixed w-[20%]mr-3 p-2 overflow-y-auto border rounded-lg bg-primaryColor">
        {clothCategory.map((cloth) => (
          <div key={cloth.id} className="px-4 m-2 text-2xl capitalize">
            <p className="text-3xl font-bold">{cloth.title}</p>
            <div>
              {cloth.categories.map((category) => (
                <div
                  onClick={() => setSelected(category.name)}
                  className={`flex  px-2 rounded-lg cursor-pointer hover:bg-tertiaryColor duration-200 items-center ${
                    category.name == selected && "bg-secondaryColor"
                  }`}
                >
                  <img
                    src={category.src}
                    alt="cloth"
                    className="size-[2.5rem]"
                  />
                  <p key={category.id} className="pr-8 ">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
