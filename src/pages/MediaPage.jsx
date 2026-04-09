// File: src/pages/MediaPage.jsx
import React, { useState } from 'react';
import './AllNewsPage.css'; 

function MediaPage({ newsData = [] }) {
  const [visibleCount, setVisibleCount] = useState(6);

  // BỘ LỌC: Nhắm thẳng vào category 'TRUYỀN THÔNG'
  const filteredNews = newsData.filter((news) => news.category === 'TRUYỀN THÔNG');

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="all-news-wrapper">
      
      {/* Header Truyền Thông theo đúng ảnh bạn chụp */}
      <div className="all-news-container" style={{ paddingBottom: '80px' }}>
        <h1 className="all-news-title" style={{ fontSize: '4.5rem' }}>TRUYỀN THÔNG</h1>
        {/* Giới hạn chiều rộng chữ một chút cho giống bản gốc */}
        <p style={{ color: '#fff', marginTop: '20px', fontSize: '1.2rem', letterSpacing: '0.5px', maxWidth: '800px' }}>
          Khám phá tiêu chí sáng tạo và các thông tin hậu trường của phim ngắn, âm nhạc cùng nhiều nội dung thú vị khác.
        </p>
      </div>

      <div className="all-news-body">
        <div className="news-grid-page">
          {filteredNews.slice(0, visibleCount).map((news) => (
            <div className="news-card-item" key={news.id}>
              <div className="news-image-box">
                <img src={news.image} alt={news.title} className="news-img" />
                <div className="news-icon-corner">
                  <span className="corner-icon">↗</span> 
                </div>
              </div>
              <div className="news-text-box">
                <div className="news-meta-info">
                  <span className="news-cate">{news.category}</span>
                  <span className="news-div">|</span>
                  <span className="news-dt">{news.date}</span>
                </div>
                <h3 className="news-headline">{news.title}</h3>
                <p className="news-snippet">{news.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nút Hiện Thêm */}
        {visibleCount < filteredNews.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={handleLoadMore}>
              HIỆN THÊM <span className="plus-icon">+</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaPage;