import React, { useState, useEffect } from "react";

const menuItems = [
  { name: "Angus Burger", price: 8.99, category: "burger" },
  { name: "Tuna Steak Burger", price: 15.0, category: "burger" },
  { name: "Bacon Burger", price: 11.5, category: "burger" },
  { name: "Southwest Chicken Burger", price: 9.99, category: "burger" },
  { name: "Mozzarella Burger", price: 12.5, category: "burger" },
  { name: "Cesar Salad", price: 6.5, category: "salad" },
  { name: "BBQ Chicken Salad", price: 13.99, category: "salad" },
  { name: "Garden Salad", price: 9.99, category: "salad" },
  { name: "Veggie Lasagna", price: 17.99, category: "pasta" },
  { name: "Spaghetti & Meatballs", price: 17.99, category: "pasta" },
  { name: "Fettuccine Alfredo", price: 17.99, category: "pasta" },
];

function App() {
  const [cart, setCart] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    alanBtn({
      key: "ALAN_STUDIO_KEY",
      onCommand: (commandData) => {
        if (commandData.command === "getMenu") {
          setMenuItems(commandData.data);
        }
      },
    });
  }, []);

  const addToCart = (menuItem) => {
    setCart((oldCart) => {
      return [...oldCart, menuItem];
    });
  };

  return (
    <div className="App">
      {menuItems.map((menuItem) => (
        <li key={menuItem.name}>
          {menuItem.name} - ${menuItem.price} - {menuItem.category}
          <button onClick={() => addToCart(menuItem)}>add to cart</button>
        </li>
      ))}
      <h2>Cart</h2>
      {cart.map((cartItem) => (
        <li key={cartItem.name}>
          {cartItem.name} - ${cartItem.price} - {cartItem.category}
        </li>
      ))}
    </div>
  );
}

export default App;
