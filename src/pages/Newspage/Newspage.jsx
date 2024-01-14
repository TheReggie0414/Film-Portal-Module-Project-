import React, { useState, useEffect } from 'react';
import './Newspage.css';

export const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?q=movie&apiKey=4086c870aa084eb5a760dd6eae9ca833');
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                console.error('Ошибка при получении новостей:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-container">
            {news.map((item) => (
                <div key={item.url} className="news-item">
                    <img src={item.urlToImage} alt={item.title} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            Докладніше
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default News;