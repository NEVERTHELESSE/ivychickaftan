import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="pt-12 flex justify-around">
      <img src="/navigation/notFound.png" className="w-[40rem]" />
      <div className="my-10">
        <p className="text-6xl">page not found</p>
        <Link to="/" className="text-4xl text-primaryColor font-bold mx-2">
          Home
        </Link>
        <span>|</span>
        <Link to="/shops" className="text-4xl text-primaryColor font-bold mx-2">
          SHops
        </Link>
      </div>
    </div>
  );
}
