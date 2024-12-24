import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

const Products = lazy(() => import("./Products"));

export default function Shop() {
  return (
    <div className="w-full px-[5rem] pt-[5rem] ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shops - Kaftans</title>
        <link rel="canonical" href="http://localhost:5173/login" />
      </Helmet>
      <Suspense fallback={"loading"}>
        <Products />
      </Suspense>
    </div>
  );
}
