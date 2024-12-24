export default function MoreCollection() {
  return (
    <div
      className="w-full flex text-center justify-center items-center  h-[100vh] bg-[url('/newCollection/bg2.jpg')]  relative text-white "
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[80%] p-[10rem] font-bold z-10">
        <h2 className="text-[5rem]  font-['eufm10'] swipe">
          kaftan beauty design just for woman
        </h2>
        <p className="slide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          eveniet iusto voluptate, consequatur voluptatibus soluta rem magni
          nesciunt quasi distinctio unde dolore vero ullam. Explicabo magnam,
          suscipit aspernatur, ex iste nihil modi distinctio incidunt nostrum
          facilis expedita, dolores quibusdam soluta minus quae eum. Cupiditate
          sunt, tempore non possimus quo itaque.
        </p>
        <button className="px-20 py-4 my-8 text-2xl border rounded-full slide btn">
          Browse Collection
        </button>
      </div>
      <div className="gradient"></div>
    </div>
  );
}
