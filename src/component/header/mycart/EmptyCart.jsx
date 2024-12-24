import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="p-4">
      <img src="/navigation/noChart.jpeg" className="w-[25rem]" />
      <p className="text-2xl text-center capitalize">
        Awwn no product in your cart start shopping
      </p>
      <Link to="/shops" className="text-blue-700 text-center text-2xl">
        Let Start Shopping
      </Link>
    </div>
  );
}
