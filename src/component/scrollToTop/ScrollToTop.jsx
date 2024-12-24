import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function ScrollToTop() {
  function scrollUp() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  const [show, setSHow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setSHow(true);
      } else {
        setSHow(false);
      }
    });
  });

  return (
    <div>
      {show && (
        <div
          className=" bg-secondaryColor border left-3 z-[30] size-[4rem] rounded-full  grid place-items-center fixed bottom-5 cursor-pointer hover:bg-secondaryColor duration-700"
          style={{
            zIndex: 20,
          }}
          onClick={scrollUp}
        >
          <FaAngleDoubleDown color="black" size={30} />
        </div>
      )}
    </div>
  );
}
