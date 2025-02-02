import React from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_MEAL } from '../utils/mutations';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sushi1 from '../assets/Sushi1.jpg'
import Logo from '../assets/logo.png'

const Sushi = () => {
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleOrderClick = () => {
    setShowConfirmation(true)
  }

  const [createMeal] = useMutation(CREATE_MEAL);
    
        const handleConfirm = async(input: any) => {
          setShowConfirmation(false);
          alert('It has been ordered to your location');
          await createMeal({
            variables: { input: input },
          })
  }

  return (
    <div className="sushi-container">
      <Link to="/">
        <img src={Logo} alt="Crave-Wave Logo" className="logo" />
      </Link>
      <div className="sushi-card">
        <img src={Sushi1} alt="Fresh Sushi Roll" className="sushi-image" />
        <div className="sushi-content">
          <h2>The Dragon Supreme Crave</h2>
          <p>
            Experience a masterpiece sushi roll featuring fresh eel, cucumber, and avocado, 
            wrapped in premium sushi rice and nori, topped with thinly sliced avocado, 
            unagi sauce, and a sprinkle of toasted sesame seeds. Served with wasabi, 
            pickled ginger, and our signature soy sauce.
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
        .sushi-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .sushi-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .sushi-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
        
        .sushi-content {
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

        .logo {
          position: fixed;
          top: 20px;
          left: 20px;
          width: 125px;
          height: auto;
          z-index: 1000;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
export default Sushi