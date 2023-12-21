import React from "react";
import './App.css';

const apiKey = process.env.GOOGLE_PLACES_API_KEY;

function CafeData() {
  
  const cafes = ['ChIJ6QWDIpu4woARPQxBk1EEm5o','ChIJ6zjVBYS4woARoaYdxb5SL-Y','ChIJl6y2jHzHwoARxLEubtk4EoU','ChIJ3-g8oIC4woARwe83pu7NGPI','ChIJI-ZLyNzHwoAREaAC-3iY7IA','ChIJhS5hSHO5woAR77b1-q4AFNk','ChIJa0rNRXrHwoARuRqq_F1Tf6M','ChIJH92kKx7HwoARRV2xuwL-NuY','ChIJQQU4LZ24woARpwr9WPyLBOo','ChIJvd1nkc25woAR3c8hqveCZUA','ChIJ1-lyfN-5woARRaEuG3pBKqQ','ChIJ5TiPf0PHwoAReB-r4pYavF8','ChIJ5VMTSJC4woAR4iUaTuFwSoo','ChIJf-qF4HzHwoAR6MJpZLjmjlw','ChIJGS22BPu5woARFx0PZQ0XDfE','ChIJeYExzzi5woARWbIxCd1oPEs','ChIJ6dxGa-XHwoARA2YS0yaI0z8','ChIJZ9vwTpu4woARXb23iIdA5Lg','ChIJH8GwoxPFNEwRrQ0EqoDiqiE','ChIJgYa07TbHwoAR7QxBwNaHYa0','ChIJGWOvBJm4woARepticznDRJQ','ChIJWzvL0Sa5woAR9Q-VY1iqRcY','ChIJr_ve94a4woARt7g2USdso2k','ChIJFZM_Xou5woARBBkUAo3QHmY','ChIJK5hYwHHHwoARdQkAJhn2iAM','ChIJRfhnd8S5woARu5PMA7fyVwQ','ChIJq64VYlC5woARc_1zCpAP_vY','ChIJt-O3JJC4woARNlSEGH77DT0','ChIJtxwdHqW4woARwz7ZIGfOQqc'];
  
  function googlePlacesAPI(placeID){
    const apiUrl = 'https://places.googleapis.com/v1/places/'+placeID+'?fields=id,displayName,formattedAddress,googleMapsUri,currentOpeningHours,nationalPhoneNumber,userRatingCount,rating,websiteUri,editorialSummary,parkingOptions,outdoorSeating,&key=${apiKey}';

    // Make a GET request to the API
    fetch(apiUrl)
      .then(response => {
        // Check if the response status is OK (200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status} ${response.error_message}`);
        }

        // Parse the response JSON
        return response.json();
      })
      .then(data => {
        // Handle the API response data

        sendPostRequest(JSON.stringify(data));
        console.log('API Response:', data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error making API call:', error.message);
      });
  }

  const sendPostRequest = async (data) => {

    console.log(data);
    // make a post to backend
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}),
    });

    const data1 = await response.json();
    console.log(data1.message);
  };

  React.useEffect(() => {

    cafes.forEach((cafe) =>
      googlePlacesAPI(cafe)
    )

  }, []);

  return (
    <div>
    </div>
  );
}

export default CafeData;
