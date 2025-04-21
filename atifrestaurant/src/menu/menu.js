import React, { useEffect, useState } from 'react';

import './menu.css';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() =>  {
    const fetchMenu = async ()=>{
     try  { 
        const response = await fetch("/api/admin/menu-items");
        const data = await response.json();
        setMenuItems(data);
} catch (error) {
    console.error("Error fetching employee: ", error.message);
  }
    }
    fetchMenu()
     
  }, []);

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-items">
        {menuItems.length === 0 ? (
          <p>Loading...</p>
        ) : (
          menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.name || "Menu Item"} className="menu-item-image" />
              ) : (
                <div className="menu-item-placeholder">No Image</div>
              )}
              <div className="menu-item-details">
                <h2>{item.name || "Unnamed Item"}</h2>
                <p>{item.description || "No description available."}</p>
                <p><strong>₹{item.price.toFixed(2)}</strong></p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;