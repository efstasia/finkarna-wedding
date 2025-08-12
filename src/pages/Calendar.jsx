/* eslint-disable */
import { Popup } from 'components/Popup';
import React, { useEffect, useState } from 'react';
import Sparkles from 'react-sparkle';
import backgroundImage from '../images/card-background.png'

export const Calendar = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [apiData, setApiData] = useState({});
  const [statusData, setStatusData] = useState([]);
  const [openPopupId, setOpenPopupId] = useState(null);


  const apiUrl = process.env.REACT_APP_API_URL || 'https://jonathan.inte.fuska.qtkul.lol/api/v1'

  const adventCalendarData = [
    { id: 1, wedding: false, title: '1' },
    { id: 2, wedding: false, title: '2' },
    { id: 3, wedding: false, title: '3' },
    { id: 4, wedding: false, title: '4' },
    { id: 5, wedding: false, title: '5' },
    { id: 6, wedding: true, title: '6' },
  ];

const handleCardClick = (id) => {
  const cardStatus = statusData.find((item) => item.id === id)?.status;

  fetchDoorData(id)
  fetchDoorStatus(id)

  if (cardStatus !== 'open') {
    console.log(`Card ${id} is closed and cannot be flipped.`);
    return;
  } 
  
	setFlippedCards((prev) => ({
		...prev,
		[id]: true, // Flip the current card.
	}));
  setOpenPopupId(id);

};

const fetchDoorData = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/doors/${id}`);

      const result = await response.json();
      
      // Updates the state to store the data for the specific card id.
      setApiData((prevData) => ({
        ...prevData,
        [id]: result.data, // Stores data for the specific card.
      }));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

const fetchDoorStatus = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/doors`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      
      // Updates the state to store the data for the specific card id.
      setStatusData(result.data);

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };


  useEffect(() => {
    adventCalendarData.map(door => fetchDoorData(door.id))
    fetchDoorStatus()
  }, [])

  return (
    <div className='calendar'>
      <Sparkles flicker={false} minSize={12} count={100} color={["#d3a980", "#F5EEE6", "#8e587c8e", "#3d845d"]}/>
      <div className='calendar-grid'>
        {adventCalendarData.map(event => (
          <div
            key={event.id}
            onClick={() => handleCardClick(event.id)}
            className={`calendar__item ${event.wedding ? 'wedding' : ''}`}
          >
            <div className='calendar__item--front'>
              <p className='calendar__item--front-title'>{event.title}</p>
            </div>
            {/* <div className='calendar__item--back'>
              <div className='calendar__item__back-content'>
                {apiData[event.id]?.content && 
                (
                  <Popup trigger={<button> Trigger</button>} position="right center">
                    <p>{apiData[event.id] ? apiData[event.id].content : ''}</p>
                  </Popup>
                )} 
              </div>
            </div> */}

          </div>
        ))}
      </div>
<Popup 
        isOpen={openPopupId !== null} 
        onClose={() => setOpenPopupId(null)}
      >
        <h2>{apiData[openPopupId]?.title}</h2>
        {openPopupId === 2 ? 
          <a 
          href={apiData[openPopupId]?.content} 
          target="_blank" 
          rel="noopener noreferrer"
        >
         Klicka på mig för att komma till toner av kärlek
        </a>
        :
        <p>{apiData[openPopupId]?.content || "Hämtar innehåll..."}</p>
      }
      </Popup>
    </div>
  );
};
