import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const categories = ["high-fashion", "luxury-bubu-dresses", "kaftans"];

export default function Filter() {
  const [search, setSearch] = useState("");

  function filterProduct(e) {
    window.location.replace(`/category?${e.target.value}`);
  }
  const selectedCategory = window.location.pathname.split("/")[2];

  const isMatch = categories.filter((category) => category == selectedCategory);

  function changeSearchInput(e) {
    setSearch(e.target.value);
  }

  function filterSearchProduct(e) {
    e.preventDefault();
    window.location.replace(`/search?${search}`);
  }

  return (
    <div
      className="hidden sm:flex border   border-tertiaryColor pl-6 px-3   items-center rounded-full "
      style={{
        borderColor: "brown",
      }}
    >
      <form onSubmit={filterSearchProduct} className="hidden sbp:flex">
        <input
          onChange={changeSearchInput}
          type="text"
          placeholder="Search for products"
          className="focus:outline-none"
        />
      </form>
      <select
        name="cloths "
        id="cloths"
        className=" border-x md:border focus:outline-none bg-transparent border-tertiaryColor capitalize py-3 px-6 mx-4"
        onChange={filterProduct}
      >
        <option value="select category" hidden>
          {isMatch.length != 0 ? isMatch[0] : "select category"}
        </option>
        {categories.map((category, index) => (
          <option value={category} key={index} className="capitalize p-2 ">
            {category}
          </option>
        ))}
      </select>
      <abbr title="search" className="hidden sbp:flex">
        <FiSearch
          size={30}
          className="bg-black rounded-full p-1 text-white hidden md:flex"
        />
      </abbr>
    </div>
  );
}
