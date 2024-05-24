import React, { useState } from 'react';
import './App.css';
import photo_1 from './images/photo_1.jpg';

const App = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleNext = () => {
    setShowMessage(false);
    setShowQuestion(true);
  };

  const handleAnswer = (answer) => {
    if (answer === 'Yes') {
      setShowAnswer(true);
    }
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedMovies((prevSelectedMovies) => [...prevSelectedMovies, value]);
    } else {
      setSelectedMovies((prevSelectedMovies) => prevSelectedMovies.filter(movie => movie !== value));
    }
  };

  const images = [photo_1];

  return (
    <div className="App">
      {showMessage && (
        <div className="message">
          <p className='name'>Nicholas Kokorudz, </p> 
          <p>You make my life so eventful and filled with joy. Spending time with you is never a dull moment. I appreciate how you can always find the 80s music for the moment with your cheeky comments. You're one of the kindest and most considerate people I know. I'm thankful that your family always being so nice to me. Thank you for being such a wonderful person and bringing joy into my life.</p>
          <p>- Chen Qian</p>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {showQuestion && (
        <div className="question">
          <p>Ready for your birthday gift? 😊</p>
          <div>
            <button className="yesButton" onClick={() => handleAnswer('Yes')}>Yes</button>
            <button className="noButton">No</button>
          </div>
        </div>
      )}
      {showAnswer && (
        <div className="answer">
          <div className="image-container">
            <img src={images[currentIndex]} alt={`Wilde ${currentIndex + 1}`} />
            <div className="image-buttons">
              <button onClick={handlePrevImage}>&lt;</button>
              <button onClick={handleNextImage}>&gt;</button>
            </div>
          </div>
          <div className="checklist">
            <h3>See you on June 2, 2024 at Ukrainian Festival, BYOF ❤️</h3>
            <h5>Which movie do you want to watch?</h5>
            <ul>
              <li>
                <input
                  type="checkbox"
                  id="yesterday"
                  value="Yesterday"
                  onChange={handleCheckboxChange}
                  checked={selectedMovies.includes('Yesterday')}
                />
                <label htmlFor="yesterday">Yesterday</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="armageddon"
                  value="Armageddon"
                  onChange={handleCheckboxChange}
                  checked={selectedMovies.includes('Armageddon')}
                />
                <label htmlFor="armageddon">Armageddon</label>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;