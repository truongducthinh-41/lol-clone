// File: src/pages/DevTeamPage.jsx
import React, { useState } from 'react';
import './AllNewsPage.css'; 

function DevTeamPage({ newsData = [] }) {
  const [visibleCount, setVisibleCount] = useState(6);

  // BỘ LỌC: Chỉ lấy những bài có category là 'ĐỘI NGŨ PHÁT TRIỂN'
  const filteredNews = newsData.filter((news) => news.category === 'ĐỘI NGŨ PHÁT TRIỂN');

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="all-news-wrapper">
      
      {/* Header Đội ngũ phát triển dựa theo ảnh bạn gửi */}
      <div className="all-news-container" style={{ paddingBottom: '80px' }}>
        <h1 className="all-news-title" style={{ fontSize: '4.5rem' }}>ĐỘI NGŨ PHÁT TRIỂN</h1>
        <p style={{ color: '#fff', marginTop: '20px', fontSize: '1.2rem', letterSpacing: '0.5px' }}>
          Những thông tin thú vị từ đội ngũ phát triển Liên Minh Huyền Thoại.
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

export default DevTeamPage;