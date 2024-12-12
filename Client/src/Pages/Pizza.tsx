import React, { useState } from 'react';
import Pizza1 from '../assets/Pizza1.jpg';

const Pizza = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleOrderClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    alert('It has been ordered to your location');
  };

  return (
    <div className="pizza-container">
      <div className="pizza-card">
        <img src={Pizza1} alt="Deluxe Pizza" className="pizza-image" />
        <div className="pizza-content">
          <h2>The Supreme Crave Pizza</h2>
          <p>
            Experience our mouthwatering signature pizza featuring a perfect blend of 
            premium mozzarella cheese, fresh basil, spicy pepperoni, Italian sausage, 
            bell peppers, mushrooms, and black olives, all on our hand-tossed artisanal crust 
            with our secret recipe tomato sauce.
          </p>
          <button className="order-button" onClick={handleOrderClick}>
            Order
          </button>
        </div>
      </div>

      {showConfirmation && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Are you sure you want to CRAVE this item?</p>
            <div className="modal-buttons">
              <button onClick={handleConfirm}>Yes</button>
              <button onClick={() => setShowConfirmation(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .pizza-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .pizza-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .pizza-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        
        .pizza-content {
          padding: 20px;
        }
        
        .order-button {
          background: #ff4d4d;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.3s;
        }
        
        .order-button:hover {
          background: #ff3333;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .modal {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        
        .modal-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 15px;
        }
        
        .modal-buttons button {
          padding: 8px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          background: #ff4d4d;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Pizza;
