'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCreditCard } from 'react-icons/fa';

const CardList = () => {
  const cardDetails = [
    {
      type: 'Secondary',
      bank: 'DBL Bank',
      cardNumber: '**** **** 5600',
      name: 'William',
      bgColor: '#EEF7FF',
      iconColor: '#2D60FF',
    },
    {
      type: 'Secondary',
      bank: 'BRC Bank',
      cardNumber: '**** **** 4300',
      name: 'Michel',
      bgColor: '#FFF3F1',
      iconColor: '#FF6C37',
    },
    {
      type: 'Secondary',
      bank: 'ABM Bank',
      cardNumber: '**** **** 7560',
      name: 'Edward',
      bgColor: '#FFFBEA',
      iconColor: '#F5A623',
    },
  ];

  return (
    <div
      className=" rounded p-4"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="d-flex flex-column gap-3">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="p-3 d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
            }}
          >
            <div className="d-flex align-items-center">
              <div
                className="d-flex justify-content-center align-items-center rounded"
                style={{
                  backgroundColor: card.bgColor,
                  width: '40px',
                  height: '40px',
                  marginRight: '16px',
                }}
              >
                <FaCreditCard size={18} color={card.iconColor} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    margin: 0,
                  }}
                >
                  Card Type
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#1F2937',
                    margin: 0,
                  }}
                >
                  {card.type}
                </p>
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  margin: 0,
                }}
              >
                Bank
              </p>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#1F2937',
                  margin: 0,
                }}
              >
                {card.bank}
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  margin: 0,
                }}
              >
                Card Number
              </p>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#1F2937',
                  margin: 0,
                }}
              >
                {card.cardNumber}
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  margin: 0,
                }}
              >
                Namain Card
              </p>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#1F2937',
                  margin: 0,
                }}
              >
                {card.name}
              </p>
            </div>

            <div>
              <p style={{ margin: 0, visibility: 'hidden', fontSize: '14px' }}>
                &nbsp;
              </p>
              <button
                className="btn btn-link p-0"
                style={{
                  fontSize: '12px',
                  color: '#2D60FF',
                  textDecoration: 'none',
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
