import React from 'react';
import Navbar from '../commons/navbar';
import Menu from '../menu/menu';
import './homeScreen.css'; // Ensure this includes the new styles
import VideoComponent from '../commons/video';
import LottieAnimation from '../commons/video'; // Import the Lottie animation

function Homepage() {
  return (
    <div>
      <div className="background-container">
        <VideoComponent />
        <div className="background-image"></div>
        <div className="overlay">
          <div className="welcome-box">
            <div className="welcome-text">
              <h1>Hello there!</h1>
              <h2>Welcome to Food Adda!</h2>
            </div>
          </div>
          <LottieAnimation />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
