import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="hidden ssc:flex border-r">
      <img
        src="/logo2.jpg"
        alt="logo"
        className="object-cover w-[10rem] h-[4rem]"
      />
    </Link>
  );
}
