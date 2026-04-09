import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; /* <--- 1. Import công cụ chuyển trang */
import './HomePage.css'; 

function HomePage() {
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const navigate = useNavigate(); /* <--- 2. Khởi tạo công cụ */

  return (
    <div className="home-page-container">
      <div className="hero-section">
        <button 
          className="play-free-btn" 
          onClick={() => setIsPlayModalOpen(true)}
        >
          CHƠI MIỄN PHÍ
        </button>
      </div>
      
      {isPlayModalOpen && (
        <div className="play-modal-overlay">
          <div className="play-modal-content">
            <button className="play-modal-close" onClick={() => setIsPlayModalOpen(false)}>
              ✕
            </button>
            <h2 className="play-modal-title">CHUẨN BỊ SẴN SÀNG ĐỂ CHƠI</h2>

            {/* Hai cột lựa chọn */}
            <div className="play-modal-options">
              
              {/* Cột 1: Chưa có tài khoản */}
              <div className="play-modal-option">
                <p>Tôi không có Tài Khoản Riot</p>
                <button 
                  className="btn-create-acc"
                  onClick={() => {
                    setIsPlayModalOpen(false); /* Tắt bảng đen đi */
                    navigate('/dang-ky');      /* Chuyển sang trang đăng ký */
                  }}
                >
                  TẠO TÀI KHOẢN
                </button>
              </div>

              {/* Cột 2: Đã có tài khoản */}
              <div className="play-modal-option">
                <p>Tôi có Tài Khoản Riot</p>
                <button 
                  className="btn-login-acc"
                  onClick={() => {
                    setIsPlayModalOpen(false); /* Tắt bảng đen đi */
                    navigate('/dang-nhap');    /* Chuyển sang trang đăng nhập */
                  }}
                >
                  ĐĂNG NHẬP
                </button>
              </div>
              
            </div>

            {/* Đường viền xanh lá mỏng ở đáy theo đúng ảnh 2 */}
            <div className="play-modal-bottom-line"></div>
          </div>
        </div>
      )}

    </div>
  );
}

export default HomePage;