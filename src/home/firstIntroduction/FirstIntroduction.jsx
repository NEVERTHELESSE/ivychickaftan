import { useEffect, useState } from "react";
import { displays } from "../../component/header/display";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const renders= displays;

export default function FirstIntroduction() {
  let [index, setIndex] = useState(1);
  const [show, setShow] = useState(renders[index]);

  function changeImage(index) {
    setIndex(index);
  }

   useEffect(() => {
     const interval = setInterval(() => {
        if (index != 3) {
          setIndex(index++);
          setShow(renders[index]);
        } else {
          index = 0;
          setShow(renders[index]);
        }
      }, 2000);
      interval;
      return () => {
        clearInterval(interval);
      };
    }, [index]);

  return (
    <div className="w-full pt-[3rem]  bg-primaryColor flex flex-col">
      <div className="flex">
        <div className="w-[100vw]">
          {show.right ? (
            <div
              className={`sm:flex  py-[3rem] h-[100vh] w-full first-letter: rounded-lg   justify-between items-center ${show.animation}}`}
              style={{
                background: show.color,
                paddingTop: "2rem",
              }}
            >
              <img
                loading="lazy"
                src={show.src}
                alt=""
                className="w-[35rem] smm:w-[25rem] sbp:w-[30rem] border smm:rounded-br-[10rem]"
              />
              <div className="w-[60%] ml-3 ">
                <h2 className="hidden ssm:flex  my-12 text-[2rem] sbp:text-[3rem] fsc:text-[4rem]  leading-[5rem]  font-bold ">
                  {show.title}
                </h2>
                <Link
                  to="/shops"
                  className=" sm:text-2xl sbp:text-5xl fsc:text-4xl flex "
                >
                  View Collection
                  <FaAngleDoubleRight className="bg-black p-1 ml-3 text-white" />
                </Link>
              </div>
            </div>
          ) : (
            <div
              className={`flex rounded-lg h-[100vh]  pl-[3rem] min-w-[100vw]  justify-between items-center } ${show.animation}`}
              style={{
                background: show.color,
                paddingTop: "2rem",
              }}
            >
              <div className="w-[60%] ml-3">
                <h2 className="my-12 text-[4rem] leading-[5rem]  font-bold first">
                  {show.title}
                </h2>
                {show.id != 4 ? (
                  <Link to="/shops" className="text-5xl  first">
                    View Collection
                    <span className="bg-black p-2 text-white"> {">>"}</span>
                  </Link>
                ) : (
                  <Link
                    to="/shops"
                    className="text-3xl text-white px-10  first border bg-primaryColor rounded-full py-2 hover:bg-tertiaryColor duration-200"
                  >
                    Order Now
                  </Link>
                )}
              </div>
              <img
                loading="lazy"
                src={show.src}
                alt=""
                className={` w-[30rem]   ${
                  show.right ? "rounded-br-[10rem]" : "rounded-bl-[10rem]"
                }  `}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex absolute left-[40%] bottom-[1rem]  ">
        {renders.map((render, i) => (
          <img
            src={render.src}
            key={i}
            alt="show"
            className={`size-[3rem] ${
              i == index + 1 && "border-4 "
            } object-cover rounded-full  mx-1`}
            onClick={() => changeImage(i)}
          />
        ))}
      </div>
    </div>
  );
}
