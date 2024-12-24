import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <div className="w-full text-white font-bold text-4xl p-4 bg-secondaryColor flex">
      <marquee>
        <img src="/navigation/10.png" className="h-[5rem] inline-block" />
        <span>Sign up and get up to 10% discount</span>
        <Link
          to="/register"
          className="bg-tertiaryColor rounded-full mx-8 px-8 py-3"
        >
          Register
        </Link>
        <img src="/navigation/cart.png" className="h-[5rem] inline-block" />
      </marquee>
    </div>
  );
}
