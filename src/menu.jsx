import React from "react";
import "./menu.css";
// import { Menu } from "antd";

export const MenuHeader = () => {
  const menuItems = [
    { key: "1", label: "Products", href: "#products" },
    { key: "2", label: "About", href: "#about" },
    // { key: "3", label: "Gallery", href: "#gallery" },
  ];
  return (
    <nav className="nav">
      <ul className="nav-ul">
        {menuItems.map((item) => (
          <li key={item.key}>
            <a className="nav-ul-a" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
