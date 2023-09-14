import React from 'react'
import './Cards.css';
import CardItem from './CardItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive, } from "./data";

function Cards() {
  const product = productData.map((item) => (
    <CardItem
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="cards">
      <h1>Gallery</h1>
      
      <p>If you are an enjoyer of art or simply an entrepreneur looking for a new stream of passive income, AI-generated art can be an easy way to earn money.
      However, there are key steps in this process that must be executed correctly in order to gain the most income from your business.</p>

      
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}

export default Cards;
