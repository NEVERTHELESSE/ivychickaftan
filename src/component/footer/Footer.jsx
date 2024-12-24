import { BsFillEnvelopeArrowDownFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  const footerMenu = ["FAQ", "About-Us", "Privacy&Policy", "Contact-Us"];
  const accountMenu = ["My-Dashboard", "My-Shop", "Wishlist", "Tracking-Order"];

  return (
    <div className="w-full bg-black text-white ">
      <div className="w-full items-center flex p-3 justify-around ">
        <div>
          <Link to="/">
            <img src="/newlogo.jpg" className="w-[15rem]" />
          </Link>
          <div className="flex items-center">
            <FiPhoneCall color="white" size={30} />
            <p className="ml-3">+1 443-699-8766</p>
          </div>
          <div className="flex items-center">
            <BsFillEnvelopeArrowDownFill color="white" size={30} />
            <p className="ml-3">ivychickaftan@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-2xl uppercase">footer menu</p>
          {footerMenu.map((menu, i) => (
            <Link to={`/${menu}`} className="my-2" key={i}>
              {menu}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="text-2xl uppercase">my account</p>
          {accountMenu.map((menu, i) => (
            <Link to={`/${menu}`} className="my-2" key={i}>
              {menu}
            </Link>
          ))}
        </div>
        <img src="/navigation/worldwide.png" className="w-[8rem]" />
      </div>
      <div className="border-t flex justify-around w-full py-3 px-8">
        <p className="text-2xl">Kaftans Female Cloth Empire 2025</p>
        <img src="/card.jpg" />
      </div>
    </div>
  );
}

export default Footer;
