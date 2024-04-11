import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios'; // Import axios for making HTTP requests

function Dashboard() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    // Fetch entities data when the component mounts
    fetchEntities();
  }, []);

  const fetchEntities = async () => {
    try {
      const response = await axios.get('http://localhost:3001/entities');
      setEntities(response.data);
    } catch (error) {
      console.error('Error fetching entities:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="header">
        {/* Header content */}
      </div>
      <div className="content">
        <div className="section organizations">
          <h2>Organizations</h2>
          <div className="entity-list">
            {entities.map((entity, index) => (
              <div key={index} className="entity">
                <img src={`data:image/jpeg;base64,${entity.logo}`} alt={entity.name} />
                <p>{entity.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section game-studios">
          <h2>Game Studios</h2>
          <div className="entity-list">
            {entities.map((entity, index) => (
              <div key={index} className="entity">
                <img src={`data:image/jpeg;base64,${entity.logo}`} alt={entity.name} />
                <p>{entity.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="section games">
          {/* Games content */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
