import { useState } from "react";
import { newFeatures } from "../Newfeatures";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div className="flex  justify-around my-8">
      {newFeatures.map((feature, index) => {
        let [src, setSrc] = useState(feature.otherImages[0]);
        return (
          <div
            key={index}
            className="w-[20rem] h-[10rem] fsc:w-[25rem] fsc:h-[15rem]  rounded-lg overflow-hidden relative "
          >
            <div className="text-white flex justify-between items-center flex-col py-[1rem] px-[5rem] bg-[#00000070] w-full h-[90%] absolute text-center filter">
              <p className="font-bold">Hot Deals</p>
              <p className="capitalize text-2xl fsc:text-3xl font-bold">
                {feature.title}
              </p>
              <div className="flex">
                {feature.otherImages.map((r, i) => (
                  <img
                    key={i}
                    onClick={() => setSrc(r)}
                    src={r}
                    className="size-[2rem] cursor-pointer mx-1 rounded-full"
                    alt=""
                  />
                ))}
              </div>
              <Link
                to={`/category?${feature.link}`}
                className="bg-primaryColor fsc:px-[4rem] p-2  rounded-full hover:bg-tertiaryColor duration-1000"
              >
                Shop Now
              </Link>
            </div>
            <img
              src={src}
              alt={feature.title}
              className="w-full mt-[-7rem] hover-scale-105"
            />
          </div>
        );
      })}
    </div>
  );
}
