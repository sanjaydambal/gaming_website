import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Breadcrumb } from 'react-bootstrap'; // Import Bootstrap 5 breadcrumb component
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
    <div>
      <Breadcrumb>
        <Breadcrumb.Item active>
          <Link to="/news">News</Link>
       
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="news-container">
        {news.map((item) => (
          <div className="news-card" key={item.news_id}>
            <p>{item.short_description}</p>
            <Link to={`/news/${item.news_id}`} className="news-title">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
