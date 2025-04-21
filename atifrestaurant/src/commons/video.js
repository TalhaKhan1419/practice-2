import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from '../assets/a.json'; // Adjust the path
import './video.css'

const LottieAnimation = () => {
    return (
      <div className="lottie-container">
        <Lottie loop animationData={animationData} play style={{ width: '50%', height: 'auto' }} />
      </div>
    );
  };
  

export default LottieAnimation;
