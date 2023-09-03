import React from "react";
import Card from "../../components/Card/Card";
import "./List.scss";
import useFetch from "../../hooks/useFetch";

function List({ sort, catId, maxPrice, selectedCategory }) {
  console.log(typeof(catId));
  const { data, isLoading,error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${selectedCategory?.map(
      (item) =>`&[filters][sub_categories][id][$eq]=${item}`
    )}`
  );
  return (
    <div className="list">
      {isLoading
        ? "Loading data...."
        : data?.map((item) => <Card item={item.attributes} key={item.id} />)}
    </div>
  );
}
export default List;
