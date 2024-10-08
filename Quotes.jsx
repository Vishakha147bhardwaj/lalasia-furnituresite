import * as React from "react";

const Quotes = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none">
      <path
        fill="url(#a)"
        d="M13.483 19.383H5.666c.134-7.783 1.667-9.066 6.45-11.9.55-.333.734-1.033.4-1.6a1.144 1.144 0 0 0-1.583-.4c-5.633 3.333-7.6 5.367-7.6 15.05v8.983c0 2.85 2.317 5.15 5.15 5.15h5c2.933 0 5.15-2.216 5.15-5.15v-5c0-2.916-2.217-5.133-5.15-5.133Z"
      />
      <path
        fill="url(#b)"
        d="M31.516 19.383H23.7c.133-7.783 1.666-9.066 6.45-11.9.55-.333.733-1.033.4-1.6a1.164 1.164 0 0 0-1.6-.4c-5.634 3.333-7.6 5.367-7.6 15.067v8.983c0 2.85 2.316 5.15 5.15 5.15h5c2.933 0 5.15-2.216 5.15-5.15v-5c.016-2.933-2.2-5.15-5.134-5.15Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={20.956}
          x2={-18.534}
          y1={218.376}
          y2={216.745}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.252} stopColor="#40B4A6" />
          <stop offset={0.638} stopColor="#A6D8D2" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={38.972}
          x2={-0.517}
          y1={218.497}
          y2={216.867}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.252} stopColor="#40B4A6" />
          <stop offset={0.638} stopColor="#A6D8D2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Quotes;
