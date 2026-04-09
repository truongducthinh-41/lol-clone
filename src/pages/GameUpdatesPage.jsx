// File: src/pages/GameUpdatesPage.jsx
import React, { useState } from 'react';
import './AllNewsPage.css'; // Mượn lại CSS của trang All News cho nhanh!

function GameUpdatesPage({ newsData = [] }) {
  const [visibleCount, setVisibleCount] = useState(6);

  // BÍ QUYẾT TẠI ĐÂY: Lọc ra CHỈ những bài viết thuộc chuyên mục "CẬP NHẬT TRÒ CHƠI"
  const gameUpdatesNews = newsData.filter((news) => news.category === 'CẬP NHẬT TRÒ CHƠI');

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="all-news-wrapper">
      
      {/* Header riêng cho phần Cập Nhật Trò Chơi */}
      <div className="all-news-container" style={{ paddingBottom: '80px' }}>
        <h1 className="all-news-title" style={{ fontSize: '4.5rem' }}>CẬP NHẬT TRÒ CHƠI</h1>
        {/* Dòng chữ phụ chú (Subtitle) giống trong ảnh */}
        <p style={{ color: '#fff', marginTop: '20px', fontSize: '1.2rem', letterSpacing: '0.5px' }}>
          Nguồn thông tin đáng tin cậy nhất về tất cả cập nhật trong trò chơi.
        </p>
      </div>

      {/* Phần Thân Trắng */}
      <div className="all-news-body">
        <div className="news-grid-page">
          
          {/* SỬ DỤNG MẢNG ĐÃ LỌC (gameUpdatesNews) THAY VÌ MẢNG GỐC */}
          {gameUpdatesNews.slice(0, visibleCount).map((news) => (
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
        {visibleCount < gameUpdatesNews.length && (
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

export default GameUpdatesPage;