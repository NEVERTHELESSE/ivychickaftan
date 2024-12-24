import React from "react";
import { Link } from "react-router-dom";



export default function CategoryNotFound() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <p className="text-6xl p-4 text-center">
        <b>{props.category}</b>
        is not in our category
      </p>
      <p className="text-4xl ">Kindly browse our other category</p>
      <div className="flex flex-col text-5xl text-blue-600">
        <Link to="/category?luxury-bubu-dresses">Luxury-bubu-dresses</Link>
        <Link to="/category?kaftans">kaftans</Link>
        <Link to="/category?high-fashion">high fashion</Link>
      </div>
    </div>
  );
}
