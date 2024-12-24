import { Link } from "react-router-dom";
import { navigation } from "./navigation";

function Navigation() {
  return (
    <div className="flex flex-col ">
      {navigation.map((navigate) => (
        <Link
          key={navigate.id}
          to={navigate.link}
          className="text-2xl hover:bg-tertiaryColor duration-500  border-b p-4"
          style={{
            textTransform: "uppercase",
          }}
        >
          {navigate.name}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
