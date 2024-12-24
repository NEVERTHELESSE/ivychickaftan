import { lazy, Suspense, useState } from "react";

const Order = lazy(() => import("./order/Order"));
const User = lazy(() => import("./user/User"));
const Product = lazy(() => import("./product/Product"));

export default function Admin() {
  const options = [
    {
      id: 1,
      title: "products",
      component: (
        <Suspense fallback={"loading"}>
          <Product />
        </Suspense>
      ),
    },
    {
      id: 2,
      title: "order",
      component: (
        <Suspense fallback={"loading"}>
          <Order />
        </Suspense>
      ),
    },
    {
      id: 3,
      title: "user",
      component: (
        <Suspense fallback={"loading"}>
          <User />
        </Suspense>
      ),
    },
  ];

  const [view, setView] = useState(1);

  function changeSelected(selected) {
    setView(selected);
  }

  return (
    <div className="w-full pt-10">
      <div className="flex  ">
        <div className="fixed h-[100vh] bg-primaryColor min-w-[20rem] my-2 rounded-tr-3xl p-2 text-white mr-4">
          {options.map((r) => (
            <div key={r.id} className="flex ">
              <p
                className={`text-4xl cursor-pointer w-full rounded-2xl px-4 py-2 capitalize ${
                  r.id == view && "bg-secondaryColor "
                }`}
                onClick={() => changeSelected(r.id)}
              >
                {r.title}
              </p>
            </div>
          ))}
        </div>
        <div className="min-w-[20rem] h-full"></div>
        {options.map((p) => (
          <div>{p.id == view && <div>{p.component}</div>}</div>
        ))}
      </div>
    </div>
  );
}
