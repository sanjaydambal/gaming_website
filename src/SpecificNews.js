import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SpecificNews = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const token = localStorage.getItem('token'); 
        console.log('Token:', token); // Log token to verify its value
        const response = await axios.get(`http://localhost:3001/news/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Ensure token is prefixed with "Bearer "
          },
        });
        setNewsItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news item:', error);
        setError('Error fetching news item');
        setLoading(false);
      }
    };
    

    fetchNewsItem();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.short_description}</p>
      {/* Display other details of the news item */}
    </div>
  );
};

export default SpecificNews;
