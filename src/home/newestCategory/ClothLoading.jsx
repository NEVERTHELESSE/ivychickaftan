function Loading() {
  return (
    <div className="w-[25rem] m-4 flex flex-col items-center   rounded-3xl animate-pulse h-[35rem]  bg-gray-500">
      <div className="w-full h-[30rem] bg-gray-400 animate-pulse rounded-t-3xl"></div>
      <div className="w-[50%] h-10 my-2 bg-gray-400 animate-pulse rounded-3xl"></div>
      <hr />
      <div className="w-[70%] h-8 my-2 bg-gray-400 animate-pulse rounded-3xl"></div>
    </div>
  );
}

export default function ClothLoading() {
  const manyLoadings = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="flex flex-wrap justify-around">
      {manyLoadings.map((_, index) => (
        <Loading key={index} />
      ))}
    </div>
  );
}
