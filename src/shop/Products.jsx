import { useContext, useEffect, useState } from "react";
import NewestCategories from "../home/newestCategory/NewestCategories";
import axios from "axios";
import { cartContext } from "../App";
import { cloths } from "../home/cloths";

export default function Products() {
  const [limit, setLimit] = useState(0);

  const { api } = useContext(cartContext);
  const [products, setProducts] = useState(cloths.slice(0,limit+10));

  // useEffect(() => {
  //   async function data() {
  //     await axios.get(`${api}product/${limit}`).then((res) => {
  //       setCloths(cloths.concat(res.data));
  //     });
  //   }
  //   data();
  // }, [limit]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const maxHeight = document.body.offsetHeight;
      if (scrollPosition >= maxHeight) {
        setLimit((prev) => prev + 6);
        // setProducts(cloths.slice(0,limit))
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-wrap  items-center  justify-around ">
      <NewestCategories title="shops" cloths={products} />
    </div>
  );
}
