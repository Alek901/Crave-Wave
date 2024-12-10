import React from 'react';
import './Restaurants.css';

const Restaurants = () => {
  const restaurantList = [
    { id: 1, name: 'The Pizza Place', location: 'Downtown' },
    { id: 2, name: 'Burger Haven', location: 'City Center' },
    { id: 3, name: 'Sushi World', location: 'Uptown' },
  ];

  return (
    <div className="app-container">
      <div className="restaurants-container">
        <h1 className="restaurants-title">Restaurants</h1>
        <ul className="restaurant-list">
          {restaurantList.map((restaurant) => (
            <li key={restaurant.id} className="restaurant-item">
              <h2 className="restaurant-name">{restaurant.name}</h2>
              <p className="restaurant-location">{restaurant.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurants;
