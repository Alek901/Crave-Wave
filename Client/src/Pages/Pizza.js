import React from 'react';
//import './Food.css';
const Food = () => {
    const foodItems = [
        { id: 1, name: 'Pizza', description: 'Cheesy and delicious.', price: '$12.99' },
        { id: 2, name: 'Burger', description: 'Juicy and satisfying.', price: '$9.99' },
        { id: 3, name: 'Sushi', description: 'Fresh and flavorful.', price: '$15.99' },
    ];
    return (<div className="app-container">
      <div className="food-container">
        <h1 className="food-title">Food Menu</h1>
        <ul className="food-list">
          {foodItems.map((item) => (<li key={item.id} className="food-item">
              <h2 className="food-name">{item.name}</h2>
              <p className="food-description">{item.description}</p>
              <p className="food-price">{item.price}</p>
            </li>))}
        </ul>
      </div>
    </div>);
};
export default Food;
