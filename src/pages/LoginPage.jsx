import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Cấp "thẻ VIP" đăng nhập thành công
    localStorage.setItem('isLoggedIn', 'true');
    // Chuyển hướng về trang chủ
    Navigate('/');
  };

  return (
    <div className="login-page-wrapper">
      
      {/* --- ẢNH NỀN (Bạn có thể dùng ảnh giống hình gốc) --- */}
      {/* Nhớ thay đổi đường dẫn /login-bg.jpg thành tên file ảnh của bạn */}

      {/* --- LOGO GÓC TRÁI --- */}
      <div className="signup-logo-top-left">
        <img src="/riot-gray-removebg-preview.png" alt="Riot Games" />
      </div>

      {/* --- CHÂN TRANG GÓC TRÁI DƯỚI --- */}
      <div className="signup-left-footer login-footer">
        <div className="signup-footer-links">
          <span>HỖ TRỢ</span>
          <span>CHÍNH SÁCH QUYỀN RIÊNG TƯ</span>
          <span>ĐIỀU KHOẢN SỬ DỤNG</span>
          <span>TÙY CHỌN COOKIES</span>
          <button className="lang-btn">EN 🌐</button>
        </div>
        <p className="signup-footer-legal">
          TRANG WEB NÀY ĐƯỢC BẢO MẬT BỞI HCAPTCHA VÀ TUÂN THỦ THEO <a href="#">CHÍNH SÁCH QUYỀN RIÊNG TƯ</a> VÀ <a href="#">ĐIỀU KHOẢN DỊCH VỤ</a> CỦA HCAPTCHA.
        </p>
      </div>

      {/* --- BẢNG TRẮNG ĐĂNG NHẬP Ở CHÍNH GIỮA --- */}
      <div className="login-form-panel">
        <div className="login-form-container">
          <h2 className="login-title">Đăng nhập</h2>

          <input 
            type="text" 
            className="signup-input login-input" 
            placeholder="TÊN NGƯỜI DÙNG" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input 
            type="password" 
            className="signup-input login-input" 
            placeholder="MẬT KHẨU" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="login-social-row">
            <button className="soc-login-btn fb">f</button>
            <button className="soc-login-btn gg">G</button>
            <button className="soc-login-btn ap"></button>
            <button className="soc-login-btn xb">X</button>
            <button className="soc-login-btn ps">P</button>
          </div>

          <div className="login-checkbox-wrapper">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Lưu đăng nhập</label>
          </div>

          <div className="login-submit-wrapper">
            {/* Nút mũi tên: Sẽ tô màu đỏ và nhấp được khi cả username và password đều đã được điền */}
            <button 
              className={`login-submit-btn ${(username && password) ? 'active' : ''}`}
              onClick={handleLogin}
              disabled={!username || !password}
            >
              →
            </button>
          </div>

          <div className="login-bottom-links">
            <Link to="#" className="forgot-link">KHÔNG THỂ ĐĂNG NHẬP?</Link>
            <Link to="/tao-tai-khoan" className="create-link">TẠO TÀI KHOẢN</Link>
          </div>

        </div>
      </div>

    </div>
  );
}

export default LoginPage;