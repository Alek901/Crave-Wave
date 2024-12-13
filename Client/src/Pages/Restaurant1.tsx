import React, { useState } from 'react';

const Restaurant1 = () => {
  // Menu items
  const menuItems = [
    { id: 1, name: 'Grilled Chicken Sandwich', price: 9.99, image: '/images/chicken.png' },
    { id: 2, name: 'Cheeseburger', price: 8.99, image: '/images/burger.png' },
    { id: 3, name: 'Caesar Salad', price: 7.99, image: '/images/salad.png' },
  ];

  // Cart state
  const [cart, setCart] = useState<{ id: number; name: string; price: number }[]>([]);

  // Add item to cart
  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>The Grille & Bar</h1>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        {/* Menu Section */}
        <div style={{ flex: 1 }}>
          <h2 style={{ textAlign: 'center' }}>Menu</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {menuItems.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  background: '#fff',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '80px', height: '80px', borderRadius: '8px', marginRight: '1rem' }}
                />
                <div style={{ flex: 1 }}>
                  <strong>{item.name}</strong>
                  <br />
                  ${item.price.toFixed(2)}
                </div>
                <button
                  onClick={() => addToCart(item)}
                  style={{
                    padding: '0.5rem 1.5rem',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    width: '120px',
                  }}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart Section */}
        <div style={{ flex: 1 }}>
          <h2 style={{ textAlign: 'center' }}>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    marginBottom: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    background: '#f9f9f9',
                  }}
                >
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    ${item.price.toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      padding: '0.5rem 1.5rem',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      width: '120px',
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <h3>Total: ${getTotalPrice()}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurant1;
