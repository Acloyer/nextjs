const ThirdCardComponent = () => {
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
        fill="url(#paint0_linear)"
      />
      
      
      <circle cx="297" cy="200" r="15" fill="white" fillOpacity="0.5" />
      <circle cx="311" cy="200" r="15" fill="white" fillOpacity="0.5" />

      <image
        href="/icons/card-chip.svg"
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
        fill="rgba(255, 255, 255, 1)"
      >
        Balance
      </text>

      <text
        x="20"
        y="65"
        fontFamily="'Lato', sans-serif"
        fontSize="20px"
        fontWeight="400"
        fill="rgba(255, 255, 255, 1)"
      >
        $5,756
      </text>

      <text
        x="20"
        y="120"
        fontFamily="'Lato', sans-serif"
        fontSize="12px"
        fontWeight="400"
        fill="rgba(255, 255, 255, 0.7)"
      >
        CARD HOLDER
      </text>

      <text
        x="20"
        y="140"
        fontFamily="'Lato', sans-serif"
        fontSize="15px"
        fontWeight="600"
        fill="rgba(255, 255, 255, 1)"
      >
        Eddy Cusuma
      </text>

      <text
        x="200"
        y="120"
        fontFamily="'Lato', sans-serif"
        fontSize="12px"
        fontWeight="400"
        fill="rgba(255, 255, 255, 0.7)"
      >
        VALID THRU
      </text>

      <text
        x="200"
        y="140"
        fontFamily="'Lato', sans-serif"
        fontSize="15px"
        fontWeight="600"
        fill="rgba(255, 255, 255, 1)"
      >
        12/22
      </text>

      <text
        x="20"
        y="210"
        fontFamily="'Lato', sans-serif"
        fontSize="22px"
        fontWeight="400"
        fill="rgba(255, 255, 255, 1)"
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
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>

      </defs>
    </svg>
  );
};

export default ThirdCardComponent;
