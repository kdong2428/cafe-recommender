import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make a POST request to the server
    try {
      const response = await fetch('/getCafeRecs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Server response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="mb-4">Cafe Recommender</h1>
          <FontAwesomeIcon className="mb-4 coffeeLogo" icon={faCoffee} />
          <form onSubmit={handleSubmit}>
          <label>
            <p>What kind of cafe experience are you in the mood for today?</p> 
            <p>You can specify your preferences such as ambiance, late hours, or any specific features you'd like, and I'll recommend cafes that matches your preferences!</p>
              <textarea
                name="cafeDescription"
                value={userInput}
                onChange={handleInputChange}
                className="form-control" 
                rows="4"
                style={{ resize: 'none' }}
              ></textarea>
            </label>
            <br />
            <button type="submit" id="submitBtn" className="btn btn-primary">Get Recommendations</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
