import React, { useState } from 'react';

const Restaurant3 = () => {
  const menuItems = [
    { id: 1, name: 'Pepperoni Pizza', price: 12.99, image: '/images/pizzapep.png' },
    { id: 2, name: 'Italian Hoagie', price: 8.99, image: '/images/italian.png' },
    { id: 3, name: 'Meatball Hoagie', price: 9.49, image: '/images/meatball.png' },
  ];

  const [cart, setCart] = useState<{ id: number; name: string; price: number }[]>([]);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(to bottom, #f7f8fc, #e0f7fa)',
        minHeight: '100vh',
        padding: '2rem',
        color: '#333',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', color: '#2c3e50' }}>
        Pizza & Hoagie Heaven
      </h1>

      {/* Layout */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '2rem',
        }}
      >
        {/* Menu */}
        <div style={{ width: '60%' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#34495e' }}>Menu</h2>
          {menuItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid #ddd',
                width: '100%',
                maxWidth: '600px',
                boxSizing: 'border-box',
                margin: '0 auto',
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />

              {/* Details */}
              <div
                style={{
                  flex: 1,
                  marginLeft: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <strong style={{ fontSize: '1.2rem', color: '#333' }}>{item.name}</strong>
                <span style={{ color: '#00796b', fontSize: '1rem' }}>${item.price.toFixed(2)}</span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(item)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  minWidth: '120px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div style={{ width: '35%' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#34495e' }}>Your Cart</h2>
          <div
            style={{
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '1.5rem',
              minHeight: '300px',
            }}
          >
            {cart.length === 0 ? (
              <p style={{ textAlign: 'center', fontSize: '1rem', color: '#999' }}>Your cart is empty.</p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {cart.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem',
                      borderBottom: '1px solid #eee',
                      paddingBottom: '0.5rem',
                    }}
                  >
                    <div>
                      <strong style={{ color: '#333' }}>{item.name}</strong>
                      <br />
                      <span style={{ color: '#00796b' }}>${item.price.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      style={{
                        padding: '0.3rem 1rem',
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {cart.length > 0 && (
              <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '1.2rem' }}>
                <strong>Total: ${getTotalPrice()}</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant3;

