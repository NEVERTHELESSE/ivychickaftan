import Heading from "../component/heading/Heading";
import { Helmet } from "react-helmet";

export default function Wishlist() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>(3) Wishlist</title>
        <link rel="canonical" href="http://localhost:5173/login" />
      </Helmet>
      <Heading title="wishlist" />
      <div className="p-12">
        <p className="text-4xl">No items in your wishlist</p>
      </div>
    </div>
  );
}
