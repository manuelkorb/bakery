import React from "react";
import "./chefs.css";

const team = [
  {
    id: "1",
    name: "Juan Carlos",
    rol: "Founder&Chef",
    img: "/assets/chef1.jpg",
  },
  {
    id: "2",
    name: "Matias",
    rol: "Chef",
    img: "/assets/chef2.jpg",
  },
  {
    id: "3",
    name: "Luciano",
    rol: "Chef",
    img: "/assets/chef3.jpg",
  },
];

const ChefItem = ({ chef }) => {
  return (
    <div className="chef">
      <img className="chef-img" src={chef.img} alt={`Chef ${chef.id}`} />
      <p className="chef-rol">{chef.rol}</p>
      <p className="chef-name">{chef.name}</p>
    </div>
  );
};

export function ChefList() {
  const chefs = team;
  return (
    <div className="chef-list-container">
      <h1 className="title-cheflist">The Bakery Team</h1>
      <div className="chef-list">
        {chefs.map((chefs) => (
          <ChefItem key={chefs.id} chef={chefs} />
        ))}
      </div>
    </div>
  );
}
