import React from 'react';
import Card from '../../components/Card/Card';
import './List.scss';

function List() {
  const data = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/613KABeTdwL._UY741_.jpg",
      img2: "https://m.media-amazon.com/images/I/51OVMS7p9CL._UY741_.jpg",
      title: "Cotton blend half sleeves T-shirt",
      isNew: true,
      oldPrice: 1099,
      price: 294,
    },
    {
      id: 2,
      img:"https://m.media-amazon.com/images/I/61n4DmCEzvL._UY741_.jpg" ,
      img2: "https://m.media-amazon.com/images/I/71Z9fNLQ55L._UY741_.jpg",
      title: "Cotton Hooded Cardigan",
      isNew: true,
      oldPrice: 1899,
      price: 850,
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/41TRg1JUtwL._UY679_.jpg",
      img2: "https://m.media-amazon.com/images/I/51KTx9vKNTL._UY679_.jpg",
      title: "Long Puff Sleeve",
      isNew: false,
      oldPrice: 1799,
      price: 950,
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/718qNWe7F0L._UY741_.jpg",
      img2: "https://m.media-amazon.com/images/I/61ACT9Zwg3L._UY741_.jpg",
      title: "A-Line Knee Length Bodycon",
      isNew: false,
      oldPrice: 1399,
      price: 750,
    },
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/613KABeTdwL._UY741_.jpg",
      img2: "https://m.media-amazon.com/images/I/51OVMS7p9CL._UY741_.jpg",
      title: "Cotton blend half sleeves T-shirt",
      isNew: true,
      oldPrice: 1099,
      price: 294,
    },
    {
      id: 2,
      img:"https://m.media-amazon.com/images/I/61n4DmCEzvL._UY741_.jpg" ,
      img2: "https://m.media-amazon.com/images/I/71Z9fNLQ55L._UY741_.jpg",
      title: "Cotton Hooded Cardigan",
      isNew: true,
      oldPrice: 1899,
      price: 850,
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/41TRg1JUtwL._UY679_.jpg",
      img2: "https://m.media-amazon.com/images/I/51KTx9vKNTL._UY679_.jpg",
      title: "Long Puff Sleeve",
      isNew: false,
      oldPrice: 1799,
      price: 950,
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/718qNWe7F0L._UY741_.jpg",
      img2: "https://m.media-amazon.com/images/I/61ACT9Zwg3L._UY741_.jpg",
      title: "A-Line Knee Length Bodycon",
      isNew: false,
      oldPrice: 1399,
      price: 750,
    },
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/613KABeTdwL._UY741_.jpg",
      img2: "https://m.media-amazon.com/images/I/51OVMS7p9CL._UY741_.jpg",
      title: "Cotton blend half sleeves T-shirt",
      isNew: true,
      oldPrice: 1099,
      price: 294,
    },
    {
      id: 2,
      img:"https://m.media-amazon.com/images/I/61n4DmCEzvL._UY741_.jpg" ,
      img2: "https://m.media-amazon.com/images/I/71Z9fNLQ55L._UY741_.jpg",
      title: "Cotton Hooded Cardigan",
      isNew: true,
      oldPrice: 1899,
      price: 850,
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/41TRg1JUtwL._UY679_.jpg",
      img2: "https://m.media-amazon.com/images/I/51KTx9vKNTL._UY679_.jpg",
      title: "Long Puff Sleeve",
      isNew: false,
      oldPrice: 1799,
      price: 950,
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/718qNWe7F0L._UY741_.jpg",
      img2: "https://m.media-amazon.com/images/I/61ACT9Zwg3L._UY741_.jpg",
      title: "A-Line Knee Length Bodycon",
      isNew: false,
      oldPrice: 1399,
      price: 750,
    },
  ];
  return (
    <div className='list'>
      {data?.map(item=>(
        <Card item= {item} key={item.id}/>
      ))}  
    </div>
  )
}

export default List