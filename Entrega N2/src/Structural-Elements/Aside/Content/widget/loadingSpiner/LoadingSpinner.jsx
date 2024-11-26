import React from 'react';
import { ClipLoader } from 'react-spinners';
import "./spiner.css"

const LoadingSpinner = () => (
  <div className="spinner">
    <ClipLoader color="#007bff" size={50} />
  </div>
);

export default LoadingSpinner;