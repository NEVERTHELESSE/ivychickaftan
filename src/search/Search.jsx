export default function Search() {
  const searchResult = window.location.search.split("?")[1];

  return <div className="p-12">{searchResult}</div>;
}
