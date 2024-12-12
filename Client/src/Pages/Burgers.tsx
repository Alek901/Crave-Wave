
import React, { useState } from 'react';
import Burger1 from '../assets/Burger1.jpg';



const Burgers = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleOrderClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    alert('It has been ordered to your location');
  };

  return (
    <div className="burger-container">
      <div className="burger-card">
        <img src={Burger1} alt="Juicy Burger" className="burger-image" />
        <div className="burger-content">
          <h2>The Ultimate Crave Burger</h2>
          <p>
            Savor our signature burger featuring a perfectly grilled Angus beef patty,
            topped with cheddar cheese, pickles, fresh lettuce, sliced tomatoes, onions,
             a light mayo sauce and served on a brioche bun.
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
        .burger-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .burger-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .burger-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        
        .burger-content {
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

export default Burgers;
