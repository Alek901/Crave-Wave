import React, { useState } from 'react';

const Restaurant2 = () => {
  const menuItems = [
    { id: 1, name: 'Sushi Platter', price: 14.99, image: '/images/sushi.png' },
    { id: 2, name: 'Miso Soup', price: 3.99, image: '/images/miso.png' },
    { id: 3, name: 'Green Tea Ice Cream', price: 5.49, image: '/images/greentea.png' },
  ];

  const [cart, setCart] = useState<{ id: number; name: string; price: number }[]>([]);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

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
      {/* Restaurant Title */}
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', color: '#2c3e50' }}>
        Sushi Delight
      </h1>

      {/* Main Layout */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1000px',
          margin: '0 auto',
          gap: '2rem',
        }}
      >
        {/* Menu Section */}
        <div style={{ width: '48%' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#34495e' }}>Menu</h2>
          {menuItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid #ddd',
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
              <div style={{ flex: 1, margin: '0 1rem' }}>
                <strong style={{ fontSize: '1.2rem', marginBottom: '0.5rem', display: 'block' }}>
                  {item.name}
                </strong>
                <span style={{ color: '#00796b', fontSize: '1rem' }}>${item.price.toFixed(2)}</span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(item)}
                style={{
                  padding: '0.5rem 0',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  width: '120px',
                  textAlign: 'center',
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div style={{ width: '48%' }}>
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

export default Restaurant2;


