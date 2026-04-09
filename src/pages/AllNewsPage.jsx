// File: src/pages/AllNewsPage.jsx
import React, { useState } from 'react';
import './AllNewsPage.css';

function AllNewsPage({ newsData = [] }) {
  // BƯỚC MỚI: Tạo state để quản lý số bài viết hiển thị (Mặc định hiển thị 6 bài)
  const [visibleCount, setVisibleCount] = useState(6);

  // Hàm xử lý khi bấm nút "Hiện Thêm" (Tăng thêm 6 bài mỗi lần bấm)
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="all-news-wrapper">
      
      {/* 1. Phần Header tối màu */}
      <div className="all-news-container">
        <h1 className="all-news-title">TIN TỨC</h1>
      </div>

      {/* 2. Phần Thân trắng tinh chứa các bài viết */}
      <div className="all-news-body">
        
        {/* Lưới bài viết */}
        <div className="news-grid-page">
          {/* SỬ DỤNG .slice(0, visibleCount) ĐỂ CẮT ĐÚNG SỐ LƯỢNG BÀI CẦN HIỂN THỊ */}
          {newsData.slice(0, visibleCount).map((news) => (
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

        {/* 3. NÚT HIỆN THÊM (Chỉ hiện ra nếu số bài đang hiển thị nhỏ hơn tổng số bài) */}
        {visibleCount < newsData.length && (
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

export default AllNewsPage;