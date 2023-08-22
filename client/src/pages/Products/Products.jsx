import React, { useState } from "react";

const Products = () => {
  const [filterRange, setFilterRange] = useState(1000);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Products categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" />
            <label for="1">hat</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" />
            <label for="2">shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" />
            <label for="3">shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" />
            <label htmlFor="4">T-shirts</label>
          </div>
        </div>

        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(event) => setFilterRange(event.target.value)}
            />
            <span>{filterRange}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" value="asc" id="asc" name="price" />
            <label htmlFor="asc">Price  (LowestFirst)</label>
          </div>
          <div className="inputItem">
            <input type="radio" value="desc" id="desc" name="price" />
            <label htmlFor="desc">Price  (HighestFirst)</label>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Products;
