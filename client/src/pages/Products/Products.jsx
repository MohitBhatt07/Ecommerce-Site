import React, { useState } from "react";
import './Products.scss';
import List from "./List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {

  const [filterRange, setFilterRange] = useState(1000);
  const [sort , setSort] = useState("asc");
  const catId = parseInt(useParams().id);   
  const [filterList ,setFilterList] = useState([]);
  const {data}  = useFetch(`/sub-categories? [filters][categories][id][$eq]=${catId}`);


  const filterListHandler = (event)=>{
    const value = event.target.value;
    const isChecked = event.target.checked;

    setFilterList(isChecked ?[...filterList,value] : filterList.filter((item)=> item !== value));
    
  }

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Products categories</h2>
          {
            data?.map((item)=>(
              <div className="inputItem" key={item.id}>
                <input type="checkbox" id={item.id} value={item.id} onChange={filterListHandler}/>
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))
          }
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
            <input type="radio" value="asc" id="asc" name="price" defaultChecked onChange={()=>setSort('asc')}/>
            <label htmlFor="asc">Price  (LowestFirst)</label>
          </div>
          <div className="inputItem">
            <input type="radio" value="desc" id="desc" name="price"  onChange={()=>setSort('desc')}/>
            <label htmlFor="desc">Price  (HighestFirst)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="categoryImg" src="https://img.freepik.com/premium-photo/happy-women-with-shopping-bags_661495-20327.jpg?w=826" alt=""/>
        <List sort={sort} catId={catId} maxPrice={filterRange} selectedCategory={filterList}/>
      </div>
    </div>
  );
};

export default Products;
