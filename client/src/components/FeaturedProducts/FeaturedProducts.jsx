import React, { useEffect ,useState} from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from 'axios';
function FeaturedProducts({ type }) {
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://m.media-amazon.com/images/I/613KABeTdwL._UY741_.jpg",
  //     img2: "https://m.media-amazon.com/images/I/51OVMS7p9CL._UY741_.jpg",
  //     title: "Cotton blend half sleeves T-shirt",
  //     isNew: true,
  //     oldPrice: 1099,
  //     price: 294,
  //   },
  //   {
  //     id: 2,
  //     img:"https://m.media-amazon.com/images/I/61n4DmCEzvL._UY741_.jpg" ,
  //     img2: "https://m.media-amazon.com/images/I/71Z9fNLQ55L._UY741_.jpg",
  //     title: "Cotton Hooded Cardigan",
  //     isNew: true,
  //     oldPrice: 1899,
  //     price: 850,
  //   },
  //   {
  //     id: 3,
  //     img: "https://m.media-amazon.com/images/I/41TRg1JUtwL._UY679_.jpg",
  //     img2: "https://m.media-amazon.com/images/I/51KTx9vKNTL._UY679_.jpg",
  //     title: "Long Puff Sleeve",
  //     isNew: false,
  //     oldPrice: 1799,
  //     price: 950,
  //   },
  //   {
  //     id: 4,
  //     img: "https://m.media-amazon.com/images/I/718qNWe7F0L._UY741_.jpg",
  //     img2: "https://m.media-amazon.com/images/I/61ACT9Zwg3L._UY741_.jpg",
  //     title: "A-Line Knee Length Bodycon",
  //     isNew: false,
  //     oldPrice: 1399,
  //     price: 750,
  //   },
    
  // ];
  const [products,setProducts]= useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get(process.env.REACT_APP_API_URL +`/products?populate=*&[filters][type][$eq]=${type}` ,{
           headers: {
              Authorization : "bearer "+ process.env.REACT_APP_API_TOKEN2,
           }
        });
        console.log(response);
        setProducts(response.data.data);
      }
      catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[type]);
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor m, sequi quo rerum. Consectetur, dolor. Nisi omnis
          inventore ut hic quos rerum harum deleniti voluptatem quasi et eum
          ratione, ipsam iure iusto illum quae ducimus delectus enim sapiente
          doloribus nulla provident! Consequuntur quos, repellat reiciendis ad
          saepe ea laboriosam illo harum deserunt animi possimus temporibus
          reprehenderit iste odio provident omnis numquam commodi ducimus quaerat adipisci delectus!
        </p>
      </div>

      <div className="bottom">
        {products.map((item) => (
          <Card key={item.id} item={item.attributes} className='myCard'/>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
