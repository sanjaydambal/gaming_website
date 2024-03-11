import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; // Import the CSS file for styling

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:3001/news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <div >
      <h1>News</h1>
      <div className="news-container">
        {news.map((item) => (
          <div className="news-card" key={item.news_id}>
            <h2>{item.title}</h2>
            <p>{item.short_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
