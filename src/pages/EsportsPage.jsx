// File: src/pages/EsportsPage.jsx
import React, { useState } from 'react';
import './AllNewsPage.css'; // Tiếp tục "xài ké" CSS thần thánh này

function EsportsPage({ newsData = [] }) {
  const [visibleCount, setVisibleCount] = useState(6);

  // BÍ QUYẾT: Chỉ lọc ra những bài viết có category là 'ESPORTS'
  const esportsNews = newsData.filter((news) => news.category === 'ESPORTS');

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="all-news-wrapper">
      
      {/* Header riêng cho phần Esports */}
      <div className="all-news-container" style={{ paddingBottom: '80px' }}>
        <h1 className="all-news-title" style={{ fontSize: '4.5rem' }}>ESPORTS</h1>
        {/* Dòng chữ phụ chú từ ảnh của bạn */}
        <p style={{ color: '#fff', marginTop: '20px', fontSize: '1.2rem', letterSpacing: '0.5px' }}>
          Sàn đấu quốc tế dành cho các game thủ Liên Minh Huyền Thoại chuyên nghiệp.
        </p>
      </div>

      {/* Phần Thân Trắng chứa lưới bài viết */}
      <div className="all-news-body">
        <div className="news-grid-page">
          
          {/* Lặp qua mảng esportsNews đã lọc */}
          {esportsNews.slice(0, visibleCount).map((news) => (
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
        {visibleCount < esportsNews.length && (
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

export default EsportsPage;