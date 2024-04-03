/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Counter from "./helpers/Counter";

const Primary = () => {
  const [mode, setMode] = useState(125);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: ".2rem 2rem",
        alignItems: "center",
        
    
      }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="2.5rem"
          height="3rem"
        >
          <linearGradient
            id="XtP4BkwNXDck6u-FOmT5ha"
            x1="40"
            x2="40"
            y1="59.276"
            y2="6.276"
            gradientTransform="matrix(1 0 0 -1 0 65.276)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#6dc7ff" />
            <stop offset="1" stop-color="#e6abff" />
          </linearGradient>
          <path
            fill="url(#XtP4BkwNXDck6u-FOmT5ha)"
            d="M56.461,19.801C56.819,18.729,57,17.62,57,16.5C57,10.71,52.29,6,46.5,6	c-2.689,0-5.21,1.001-7.161,2.831C37.26,8.354,34.133,8.064,32,8v22c1,0,2.638,0,4.5,0c3.038,0,5.5,2.239,5.5,5s-2.462,5-5.5,5	c-1.862,0-3.505-0.843-4.5-2.131V38l-4,2v3l4,1v-5h1c0,0,0,1,3,1v3.845c0.926,0.088,1.637,0.469,1.836,1.095	c0.334,1.053-0.888,2.381-2.73,2.966c-1.192,0.379-2.345,0.349-3.106-0.002V59c15.528-0.466,29-11.734,29-25.5	C61,28.62,59.433,23.896,56.461,19.801z M40,43l-3,1v-3l3-1V43z M36,28l6-5c0,0-2,6,4,3c0,0,6-4,7-6l-6,11c0,0,1-3,0-4s-5,3-5,3	S42,26,36,28z M44,41l-3,2v-5l3-1V41z M48,39l-3,2v-4l3-1V39z M49,38v-3l5-4C53,35,49,38,49,38z M25,27c0,1.657-1.343,3-3,3	s-3-1.343-3-3s1.343-3,3-3S25,25.343,25,27z"
          />
          <path
            fill="none"
            d="M42,30c0,0,4-4,5-3s0,4,0,4l6-11c-1,2-7,6-7,6c-6,3-4-3-4-3l-6,5C42,26,42,30,42,30z"
          />
          <linearGradient
            id="XtP4BkwNXDck6u-FOmT5hb"
            x1="32"
            x2="32"
            y1="59.276"
            y2="6.276"
            gradientTransform="matrix(1 0 0 -1 0 65.276)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1a6dff" />
            <stop offset="1" stop-color="#c822ff" />
          </linearGradient>
          <path
            fill="url(#XtP4BkwNXDck6u-FOmT5hb)"
            d="M32,59C16.01,59,3,47.561,3,33.5	c0-4.88,1.567-9.604,4.539-13.699C7.181,18.729,7,17.62,7,16.5C7,10.71,11.71,6,17.5,6c2.689,0,5.21,1.001,7.161,2.831	c4.807-1.104,9.871-1.104,14.678,0C41.29,7.001,43.811,6,46.5,6C52.29,6,57,10.71,57,16.5c0,1.12-0.181,2.229-0.539,3.301	C59.433,23.896,61,28.62,61,33.5C61,47.561,47.99,59,32,59z M17.5,8C12.813,8,9,11.813,9,16.5c0,1.055,0.199,2.098,0.593,3.101	c0.128,0.324,0.077,0.692-0.134,0.97C6.542,24.413,5,28.885,5,33.5C5,46.458,17.112,57,32,57s27-10.542,27-23.5	c0-4.615-1.542-9.087-4.459-12.93c-0.211-0.277-0.262-0.646-0.134-0.97C54.801,18.598,55,17.555,55,16.5c0-4.687-3.813-8.5-8.5-8.5	c-2.333,0-4.511,0.932-6.131,2.624c-0.248,0.259-0.617,0.363-0.963,0.279c-4.838-1.199-9.975-1.199-14.812,0	c-0.346,0.085-0.714-0.021-0.963-0.279C22.011,8.932,19.833,8,17.5,8z M32,38.761C33.076,40.109,34.915,41,37,41	c3.309,0,6-2.243,6-5c0-3.859-3.141-7-7-7h-8c-3.859,0-7,3.141-7,7c0,0.474,0.085,0.931,0.233,1.366	c-0.076,0.093-0.141,0.197-0.182,0.318c-1.823,5.47,3.518,9.098,6.632,10.265c1.695,0.565,3.2,0.799,4.529,0.799	c6.324,0,8.679-5.288,8.706-5.354c0.153-0.357,0.085-0.772-0.175-1.062c-0.262-0.29-0.668-0.399-1.038-0.287	c-6.201,1.908-9.066,1.179-10.382,0.23c-0.603-0.435-0.926-0.953-1.105-1.388C29.789,40.615,31.14,39.838,32,38.761z M37.548,44.688	c-1.557,1.488-4.428,2.962-9.195,1.376c-0.266-0.1-5.985-2.331-5.635-6.569c0.9,0.765,2.092,1.287,3.424,1.447	c0.203,0.81,0.703,1.987,1.961,2.916C30.129,45.354,33.3,45.631,37.548,44.688z M27,39c-2.206,0-4-1.346-4-3c0-2.757,2.243-5,5-5h8	c2.757,0,5,2.243,5,5c0,1.654-1.794,3-4,3c-1.904,0-3.494-1.004-3.896-2.342C34.363,36.062,36,34.816,36,34c0-1.105-1.791-2-4-2	s-4,0.895-4,2c0,0.816,1.637,2.062,2.896,2.658C30.494,37.996,28.904,39,27,39z"
          />
        </svg>
      </div>
      <div><Counter/></div>
    </div>
  );
};

export default Primary;
