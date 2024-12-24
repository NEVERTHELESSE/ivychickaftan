import { Link } from "react-router-dom";
import { navigation } from "../navigation";
import { MdCancel } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useRef } from "react";

function Menu({ setmenu, menu }) {
  const menuRef = useRef(null);
  function cancel() {
    menuRef.current.classList.add("hide");
    setTimeout(() => {
      setmenu(false);
    }, 300);
  }

  const location = window.location.pathname.split("/")[1];
  return (
    <div className="cover fixed flex  z-[100]">
      <div
        className=" duration-500 bg-white h-full menu  shadow border"
        ref={menuRef}
      >
        <Link
          to="/"
          className="text-center sm:text-3xl md:text-6xl m-6 text-tertiaryColor font-bold font-['eufm10'] my-10"
        >
          Ivychickaftans
        </Link>
        <div className="flex flex-col ">
          {navigation.map((navigate) => (
            <Link
              onClick={cancel}
              key={navigate.id}
              to={navigate.link}
              className={`sm:text-2xl uppercase flex items-center hover:bg-primaryColor duration-500  border-b p-4 ${
                navigate.active == location &&
                "bg-primaryColor text-white font-bold"
              }`}
            >
              <navigate.icon />
              <p className="ml-3">{navigate.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-full " onClick={cancel}></div>
    </div>
  );
}

export default Menu;
