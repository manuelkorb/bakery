import React from "react";
import "./products.css";

const initProducts = [
  {
    id: "1",
    model: "Roll",
    color: "#D0683A3",
    img: "/assets/product1.jpg",
    price: 15.0,
  },
  {
    id: "2",
    model: "Tiramisu Cake",
    color: "#A67244",
    img: "/assets/product2.jpg",
    price: 25.0,
  },
  {
    id: "3",
    model: "Cheesecake",
    color: "#7698AB",
    img: "/assets/product3.jpg",
    price: 25.0,
  },
  {
    id: "4",
    model: "Croissant",
    color: "#7698AB",
    img: "/assets/product4.jpg",
    price: 10.0,
  },
  {
    id: "5",
    model: "Cheese bread",
    color: "#7698AB",
    img: "/assets/product5.jpg",
    price: 15.0,
  },
  {
    id: "6",
    model: "Macarons",
    color: "#7698AB",
    img: "/assets/product6.jpg",
    price: 35.0,
  },
  {
    id: "7",
    model: "Cookies",
    color: "#7698AB",
    img: "/assets/product7.jpg",
    price: 10.0,
  },
  {
    id: "8",
    model: "Muffines",
    color: "#7698AB",
    img: "/assets/product8.jpg",
    price: 12.0,
  },
  {
    id: "9",
    model: "Donuts",
    color: "#7698AB",
    img: "/assets/product9.jpg",
    price: 10.0,
  },
];

const ProductItem = ({ product }) => {
  return (
    <div className="product">
      <img
        className="product-img"
        src={product.img}
        alt={`Product ${product.id}`}
      />
      <p className="product-model">{product.model}</p>
      <p className="product-price">${product.price}.00</p>
    </div>
  );
};

export function ProductList({ title, paragraph }) {
  const products = initProducts;
  return (
    <>
      <h1 className="title-productlist">{title}</h1>
      <p className="paragraph-productlist">{paragraph}</p>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
