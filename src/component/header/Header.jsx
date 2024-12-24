import { lazy, Suspense, useEffect, useRef, useState } from "react";
import User from "./User";
import Logo from "./Logo";
import Filter from "./filter/Filter";
import MenuButton from "./menu/MenuButton";
import LoadingSpinner from "../../loading/LoadingSpinner";

const Menu = lazy(() => import("./menu/Menu"));

export default function Header() {
  const [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(true);
  }

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const headerRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       setShowHeader(false);
  //     } else {
  //       setShowHeader(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  return (
    <div>
      {menu && (
        <Suspense fallback={<LoadingSpinner />}>
          <Menu setmenu={setMenu} menu={menu} />
        </Suspense>
      )}
      <header
        ref={headerRef}
        className={`w-[100vw] py-2 z-50 shadow flex ${
          showHeader && "fixed"
        } text-black   justify-between items-center fsc:px-4 bg-white `}
      >
        <div className="flex items-center w-[24%] justify-between">
          <Logo />
          <MenuButton openmenu={openMenu} />
        </div>
        <Filter />
        <User />
      </header>
      <div className="w-full h-[3rem]"></div>
    </div>
  );
}
