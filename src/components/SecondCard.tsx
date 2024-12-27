import React from "react";

const SecondCardComponent = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="350"
        height="235"
        viewBox="0 0 350 235"
        fill="none"
      >
        <rect
          width="350"
          height="235"
          rx="25"
          fill="white"
          stroke="rgba(223, 234, 242, 1)"
          strokeWidth="1"
        />
        
        <rect
          x="0"
          y="165"
          width="350"
          height="70"
          fill="url(#paint1_linear)"
          stroke="rgba(223, 234, 242, 1)"
          strokeWidth="1"
        />
        
        <circle cx="297" cy="200" r="15" fill="rgba(145, 153, 175, 0.5)" fillOpacity="0.5" />
        <circle cx="311" cy="200" r="15" fill="rgba(145, 153, 175, 0.5)" fillOpacity="0.5" />
  
        <image
          href="/icons/card-chip-2.svg"
          x="275"
          y="20"
          width="40"
          height="40"
        />
  
        <text
          x="20"
          y="40"
          fontFamily="'Lato', sans-serif"
          fontSize="12px"
          fontWeight="400"
          fill="rgba(113, 142, 191, 1)"
        >
          Balance
        </text>
  
        <text
          x="20"
          y="65"
          fontFamily="'Lato', sans-serif"
          fontSize="20px"
          fontWeight="400"
          fill="rgba(52, 60, 106, 1)"
        >
          $5,756
        </text>
  
        <text
          x="20"
          y="120"
          fontFamily="'Lato', sans-serif"
          fontSize="12px"
          fontWeight="400"
          fill="rgba(113, 142, 191, 1)"
        >
          CARD HOLDER
        </text>
  
        <text
          x="20"
          y="140"
          fontFamily="'Lato', sans-serif"
          fontSize="15px"
          fontWeight="600"
          fill="rgba(52, 60, 106, 1)"
        >
          Eddy Cusuma
        </text>
  
        <text
          x="200"
          y="120"
          fontFamily="'Lato', sans-serif"
          fontSize="12px"
          fontWeight="400"
          fill="rgba(113, 142, 191, 1)"
        >
          VALID THRU
        </text>
  
        <text
          x="200"
          y="140"
          fontFamily="'Lato', sans-serif"
          fontSize="15px"
          fontWeight="600"
          fill="rgba(52, 60, 106, 1)"
        >
          12/22
        </text>
  
        <text
          x="20"
          y="210"
          fontFamily="'Lato', sans-serif"
          fontSize="22px"
          fontWeight="400"
          fill="rgba(52, 60, 106, 1)"
        >
          3778 **** **** 1234
        </text>
  
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="350"
            y2="235"
            gradientUnits="userSpaceOnUse"
          >
          </linearGradient>
  
          <linearGradient
            id="paint1_linear"
            x1="0"
            y1="235"
            x2="0"
            y2="235"
            gradientUnits="userSpaceOnUse"
          >
          </linearGradient>
        </defs>
      </svg>
    );
  };
  
  export default SecondCardComponent;
