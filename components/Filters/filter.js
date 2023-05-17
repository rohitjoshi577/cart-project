import React, { useEffect, useState } from "react";
import "./filter.css";
import PopularSales from "../PopularSales/popularSales";
import toprateslaes from "../../productsData/topratesales";
function Filter() {
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const [data, setData] = useState(toprateslaes.items);

  function searchTerm(searchValue) {
    setSearch(searchValue);
    console.log(searchValue);
  }

  function sortTerm(sortValue) {
    setSorting(sortValue);
    console.log(sortValue);
  }

  useEffect(() => {
    let searchFilteredData = toprateslaes.items.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(searchFilteredData);

    if (sorting == "rating") {
      let SortedData = searchFilteredData.sort((a, b) => b.rating - a.rating);
      setData(SortedData);
    } else if (sorting == "price") {
      let SortedData = searchFilteredData.sort((a, b) => b.price - a.price);
      setData(SortedData);
    }
  }, [search, sorting]);

  return (
    <>
      <div className="search-container" id="search-part">
        <p className="mid-headings">Search</p>
        <br />
        <div>
          <input
            type="text"
            className="search"
            placeholder="search here ..."
            onChange={(e) => {
              searchTerm(e.target.value);
            }}
          />
          <select
            className="sorter"
            onChange={(event) => {
              sortTerm(event.target.value);
            }}
          >
            <option value=""> sort by default</option>
            <option value="rating"> ratings</option>
            <option value="price"> price</option>
          </select>
        </div>
      </div>
      <PopularSales popularsales={data} />
    </>
  );
}

export default Filter;
