import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function SignupPage() {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false); 
  const navigate = useNavigate();

  // --- LOGIC KIỂM TRA MẬT KHẨU ---
  const isLengthValid = password.length >= 8;
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);
  const typesCount = [hasLetters, hasNumbers, hasSymbols].filter(Boolean).length;
  const hasTwoTypes = typesCount >= 2;
  const isStrongEnough = isLengthValid && hasTwoTypes && password.length >= 10;

  return (
    <div className="signup-page-wrapper">
      
      {/* --- LOGO --- */}
      <div className="signup-logo-top-left">
        <img src="/lol-clone/riot-gray-removebg-preview.png" alt="Riot Games" />
      </div>

      {/* --- CHÂN TRANG --- */}
      <div className="signup-left-footer">
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

      {/* --- CHỮ TẠO TÀI KHOẢN --- */}
      <h1 className="signup-hero-text">TẠO TÀI<br/>KHOẢN</h1>

      {/* --- BẢNG TRẮNG NẰM BÊN PHẢI --- */}
      <div className="signup-form-panel">
        <div className="signup-form-container">
          
          {/* THANH TIẾN TRÌNH */}
          <div className="signup-progress">
            <span className={`step ${step >= 1 ? "active" : ""}`}></span>
            <span className={`step ${step >= 2 ? "active" : ""}`}></span>
            <span className={`step ${step >= 3 ? "active" : ""}`}></span>
            <span className={`step ${step >= 4 ? "active" : ""}`}></span>
          </div>

          {/* ==================== BƯỚC 1: EMAIL ==================== */}
          {step === 1 && (
            <>
              <h2 className="signup-title">Email của bạn là gì?</h2>
              <p className="signup-subtitle">Đừng lo, chúng tôi sẽ không tiết lộ với ai đâu.</p>

              <input type="email" className="signup-input" placeholder="EMAIL" />

              <div className="signup-checkbox-wrapper">
                  <label className="signup-checkbox-label">
                      <input type="checkbox" id="consent1" />
                      <p>Đồng ý, Riot có thể gửi cho tôi tin tức về các bản cập nhật trò chơi, sự kiện, đợt ra mắt trang phục và các nội dung khác.</p>
                  </label>
                  <label className="signup-checkbox-label">
                      <input type="checkbox" id="consent2" />
                      <p>Đồng ý, Riot có thể chia sẻ thông tin cá nhân của tôi với các đối tác bên thứ ba cho mục đích tiếp thị và quảng cáo cá nhân hóa về các trò chơi, tính năng và nội dung mới.</p>
                  </label>
              </div>

              <div className="signup-social-section">
                  <p className="social-text-title">BẠN CŨNG CÓ THỂ TẠO TÀI KHOẢN VỚI</p>
                  <div className="social-buttons-row">
                      <button className="soc-btn fb">f</button>
                      <button className="soc-btn gg">G</button>
                      <button className="soc-btn ap"></button>
                      <button className="soc-btn xb">X</button>
                      <button className="soc-btn ps">P</button>
                  </div>
              </div>

              <div className="signup-next-action">
                  <button className="signup-next-btn" onClick={() => setStep(2)}>→</button>
              </div>
            </>
          )}

          {/* ==================== BƯỚC 2: NGÀY SINH ==================== */}
          {step === 2 && (
            <>
              <h2 className="signup-title">Chọn tên người dùng</h2>
              <p className="signup-subtitle">Được sử dụng để đăng nhập tất cả trò chơi của chúng tôi.</p>

              <input type="email" className="signup-input" placeholder="TÊN NGƯỜI DÙNG" />

              <div className="signup-next-action">
                  <button className="signup-next-btn" onClick={() => setStep(3)}>→</button>
              </div>
            </>
          )}

          {/* ==================== BƯỚC 3: MẬT KHẨU ==================== */}
          {step === 3 && (
            <>
              <h2 className="signup-title">Chọn mật khẩu</h2>
              <p className="signup-subtitle">Hãy đảm bảo mật khẩu đủ mạnh.</p>

              {isStrongEnough && (
                <p style={{ color: '#1ad2ad', fontWeight: 'bold', width: '100%', textAlign: 'left', marginBottom: '5px' }}>Mạnh</p>
              )}

              <input 
                type="password" 
                className="signup-input" 
                placeholder="MẬT KHẨU" 
                style={{ marginBottom: '15px' }} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ backgroundColor: isStrongEnough ? '#1ad2ad' : '#e5e5e5', color: 'white', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', flexShrink: 0 }}>{isStrongEnough ? '✔' : '✖'}</span>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: isStrongEnough ? '#111' : '#7e7e7e', fontWeight: 500 }}>Cần phải đạt mức Trung bình trở lên.</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ backgroundColor: isLengthValid ? '#1ad2ad' : '#e5e5e5', color: 'white', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', flexShrink: 0 }}>{isLengthValid ? '✔' : '✖'}</span>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: isLengthValid ? '#111' : '#7e7e7e', fontWeight: 500 }}>Mật khẩu phải dài ít nhất 8 kí tự.</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ backgroundColor: hasTwoTypes ? '#1ad2ad' : '#e5e5e5', color: 'white', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px', flexShrink: 0 }}>{hasTwoTypes ? '✔' : '✖'}</span>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: hasTwoTypes ? '#111' : '#7e7e7e', fontWeight: 500 }}>Mật khẩu phải chứa hai trong số các ký tự sau: chữ cái, số hoặc ký hiệu.</p>
                  </div>
              </div>

              <input type="password" className="signup-input" placeholder="XÁC NHẬN MẬT KHẨU" />

              <div className="signup-next-action">
                  <button className="signup-next-btn" onClick={() => setStep(4)}>→</button>
              </div>
            </>
          )}

          {/* ==================== BƯỚC 4: ĐIỀU KHOẢN (ĐÃ FIX KÍCH THƯỚC) ==================== */}
          {step === 4 && (
            <>
              {/* Tiêu đề gọn lại */}
              <h2 className="signup-title" style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Điều Khoản Sử Dụng</h2>
              
              {/* HỘP CUỘN VĂN BẢN ĐƯỢC GIẢM CHIỀU CAO XUỐNG 180px */}
              <div className="terms-scroll-box" style={{ 
                width: '100%', 
                height: '180px', /* BÍ QUYẾT LÀ Ở ĐÂY: Thu nhỏ hộp lại để không bị tràn */
                overflowY: 'auto', 
                paddingRight: '10px', 
                textAlign: 'left', 
                fontSize: '0.75rem', /* Chữ nhỏ lại xíu cho dễ nhìn */
                lineHeight: '1.5', 
                color: '#555', 
                borderBottom: '1px solid #eee', 
                marginBottom: '15px' 
              }}>
                <p><strong>Cập nhật lần cuối: Ngày 01 tháng 12 năm 2024</strong></p>
                <p>Thân gửi tới các người chơi,</p>
                <p>Các điều khoản dịch vụ này (sau đây gọi tắt là “Điều khoản”) quy định các điều khoản và điều kiện mà Riot Games áp dụng khi cung cấp cho người chơi quyền truy cập để sử dụng và trải nghiệm các trò chơi, ứng dụng, trang web và các dịch vụ khác của chúng tôi (sau đây gọi tắt là “Các Dịch vụ của Riot”). Riot Games là một công ty game toàn cầu có trụ sở tại Los Angeles với các văn phòng hoạt động trên khắp thế giới. Khi chúng tôi đề cập đến “Riot Games” là chúng tôi đang nói đến các công ty Riot Games chịu trách nhiệm cung cấp Các Dịch vụ của Riot trong khu vực của người chơi (xem Phần 18 bên dưới) và các Điều khoản này là một thỏa thuận giữa người chơi và các công ty đó.</p>
                
                <p>Vui lòng đọc kỹ các Điều khoản này và đặc biệt chú ý đến các mục sau đây:</p>
                <p>• <strong>Giải quyết tranh chấp.</strong> Nếu bạn cư trú tại Hoa Kỳ, vui lòng đọc điều khoản về ràng buộc trọng tài và điều khoản từ bỏ các khiếu nại tập thể trong Mục A của Phần 16. Điều khoản này ảnh hưởng đến phương thức giải quyết tranh chấp giữa bạn và Riot Games.</p>
                <p>• <strong>Nội dung ảo.</strong> Khi người chơi nhấn vào nút để mua, kiếm được hoặc được tặng Nội dung ảo, người chơi chỉ nhận được quyền truy cập Nội dung ảo. Quyền sở hữu Nội dung ảo không được chuyển giao tới người chơi, và người chơi không được quyền chuyển giao Nội dung ảo sang cho người chơi khác. Nội dung ảo không có giá trị tiền tệ, thường là trò chơi điện tử và người chơi không được đổi Nội dung ảo lấy bất kỳ loại tiền nào trên “thế giới thực”. Bạn có thể đọc thêm về điều này (bao gồm ý nghĩa của "Nội dung ảo") trong Phần 4.</p>
                <p>• <strong>Chính sách hoàn trả.</strong> Người chơi không có quyền thay đổi quyết định, hủy đơn hàng và được hoàn lại tiền sau khi đã truy cập hoặc tải xuống nội dung số đã mua. Tuy nhiên, có một số trường hợp ngoại lệ nằm ngoài phạm vi quy định của chính sách này, nhưng chúng tôi áp dụng một chính sách nghiêm ngặt về hoàn trả. Vui lòng tham khảo tại đây.</p>
                <p>• <strong>Quy tắc người chơi.</strong> Người chơi đồng ý tuân thủ Quy tắc người chơi (Phần 7), được áp dụng với các hành vi trong trò chơi và một số hành vi ngoài trò chơi trong thời gian sử dụng Các Dịch vụ của Riot. Phần 7 cũng giải thích các chế tài cho việc vi phạm Quy tắc người chơi (ví dụ: các biện pháp kỷ luật bao gồm cấm tạm thời, đình chỉ hoặc chấm dứt và xóa tài khoản, hoặc cấm phần cứng).</p>
                <p>• <strong>Pháp luật khu vực.</strong> Một số quốc gia có thẩm quyền tài phán (ví dụ như Australia và New Zealand) có thể có pháp luật cho phép trao quyền cho người chơi ngoài những gì được quy định trong Điều khoản này, tùy thuộc vào địa điểm mà bạn truy cập hoặc sử dụng Các Dịch vụ của Riot. Trong phạm vi các quy định của bất kỳ pháp luật áp dụng nào xung đột với bất kỳ phần nào trong Điều khoản này, thì các quy định đó sẽ được ưu tiên áp dụng.</p>
                
                <p><strong>Chú ý tới các bậc phụ huynh!</strong></p>
                <p>Chúng tôi có cung cấp thông tin đánh giá lứa tuổi phù hợp để tham gia trò chơi của chúng tôi trên trang web. Chúng tôi cũng khuyến khích các bậc phụ huynh giám sát các hoạt động trực tuyến của con bạn, xem lại lịch sử truy cập, và nếu có thể, giám sát các tương tác xã hội của trẻ. Để biết thêm thông tin về xếp hạng trò chơi và mô tả nội dung, vui lòng truy cập vào hệ thống đánh giá của chúng tôi.</p>
                
                <p><strong>MỤC LỤC</strong></p>
                <p>1. TÀI KHOẢN<br/>2. CHẤM DỨT TÀI KHOẢN<br/>3. HẠN CHẾ QUYỀN<br/>4. HÀNG HÓA ẢO, TIỀN ẢO VÀ GIAO DỊCH MUA BÁN<br/>5. PHÍ & THUẾ<br/>6. CHÍNH SÁCH VỀ ĐÓNG GÓP Ý TƯỞNG KHÔNG THEO YÊU CẦU<br/>7. QUY TẮC NGƯỜI DÙNG<br/>8. NỘI DUNG TẠO BỞI NGƯỜI DÙNG<br/>9. GIÁM SÁT & CHỐNG GIAN LẬN<br/>10. CẬP NHẬT VÀ CHỈNH SỬA<br/>11. LIÊN KẾT<br/>12. THÔNG BÁO VÀ THỦ TỤC KHIẾU NẠI BẢN QUYỀN<br/>13. ĐIỀU KHOẢN LOẠI TRỪ BẢO HÀNH<br/>14. GIỚI HẠN TRÁCH NHIỆM<br/>15. LUẬT ĐIỀU CHỈNH<br/>16. GIẢI QUYẾT TRANH CHẤP<br/>17. ĐIỀU KHOẢN BỔ SUNG ÁP DỤNG CHO DỊCH VỤ CỦA RIOT<br/>18. CÁC PHÁP NHÂN CỦA RIOT<br/>19. ĐIỀU KHOẢN KHÁC</p>
                
                <p><strong>1. TÀI KHOẢN</strong></p>
                <p><strong>1.1. Tôi có được tạo tài khoản và sử dụng Các Dịch vụ của Riot không?</strong><br/>Bạn cần có một tài khoản Riot Games để truy cập vào các dịch vụ của chúng tôi. Để tạo một tài khoản và sử dụng Các Dịch vụ Riot, bạn phải: (i) là người lớn; (ii) là trẻ vị thành niên không phụ thuộc; hoặc (iii) có sự đồng ý của cha mẹ hoặc người giám hộ hợp pháp theo quy định của Điều khoản này. Trường hợp bạn không phải là người lớn hoặc trẻ vị thành niên, hoặc bạn không hiểu nội dung quy định tại Phần này, vui lòng xin ý kiến từ các vị phụ huynh hoặc người giám hộ hợp pháp của bạn để yêu cầu giúp đỡ. Khi cha mẹ hoặc người giám hộ hợp pháp của trẻ vị thành niên tạo tài khoản, các vị phụ huynh hoặc người giám hộ hợp pháp và trẻ vị thành niên chấp nhận và đồng ý bị ràng buộc bởi các Điều khoản quy định tại đây. Bạn cũng chịu trách nhiệm cho các hành vi liên quan đến việc sử dụng tài khoản và cam kết tuân thủ thủ các Điều khoản liên quan, bao gồm tất cả các giao dịch mua bán được thực hiện trên tài khoản. Bạn không được tạo hoặc sử dụng tài khoản hoặc sử dụng Các Dịch vụ của Riot thay cho cá nhân hoặc pháp nhân khác hoặc sử dụng vào mục đích thương mại.</p>
                
                <p><strong>1.2. Tôi có thể tạo tài khoản bằng cách nào?</strong><br/>Bạn có thể tạo tài khoản với thông tin đăng nhập riêng biệt trên các trang web của chúng tôi hoặc đăng nhập vào Các Dịch vụ Riot bằng tài khoản mạng xã hội hiện có (nếu có).</p>
                
                <p><strong>1.3. Tôi có cần cung cấp tên thật của mình và các thông tin cá nhân khác không?</strong><br/>Bạn phải luôn luôn cung cấp cho chúng tôi thông tin chính xác và đầy đủ, bao gồm cả tên thật của mình.</p>
                
                <p><strong>1.4. Tôi có rất nhiều tài khoản email khác nhau. Việc tôi sử dụng tài khoản email nào để đăng ký tài khoản có ảnh hưởng gì không?</strong><br/>Chúng tôi sẽ gửi thông báo liên quan đến tài khoản, pháp lý và dịch vụ đến địa chỉ email đã đăng ký tạo tài khoản. Các thông báo này có thể chứa các thông tin quan trọng (VD: thông báo chúng tôi sẽ chấm dứt tài khoản của bạn do bạn ngừng chơi), vì vậy, bạn nên giữ địa chỉ email mà bạn đã sử dụng để đăng ký và xác minh (khi có yêu cầu) tài khoản. Nếu bạn tạo tài khoản đăng nhập vào Các Dịch vụ Riot thông qua tài khoản mạng xã hội, email đăng ký tài khoản Riot Games của bạn sẽ là địa chỉ email được liên kết với tài khoản mạng xã hội đó.</p>

                <p><strong>1.5. Tôi có thể chia sẻ hoặc bán tài khoản của mình hoặc thông tin đăng nhập không?</strong><br/>Khi bạn tạo một tài khoản với chúng tôi, bạn có trách nhiệm đăng ký một tên truy cập và mật khẩu phân biệt (sau đây gọi chung là “Thông tin đăng nhập”). Bạn đồng ý rằng:<br/>
                • Không chia sẻ tài khoản hoặc thông tin đăng nhập của bạn với bất kỳ ai.<br/>
                • Không được bán, chuyển nhượng hoặc cho phép bất kỳ người nào khác truy cập vào tài khoản của bạn hoặc sử dụng Thông tin đăng nhập của bạn hoặc đề nghị người khác thực hiện hành vi tương tự.<br/>
                • Giữ bí mật Thông tin đăng nhập.<br/>
                Bạn có trách nhiệm thông báo cho chúng tôi ngay khi phát hiện hành vi vi phạm bảo mật, bao gồm mọi hành vi truy cập tài khoản trái phép hoặc khi xảy ra mất mát, trộm cắp, sử dụng trái phép hoặc tiết lộ Thông tin đăng nhập hoặc thông tin thanh toán của bạn để Riot có thể kịp thời thực hiện các biện pháp bảo mật thích hợp. Người chơi chịu trách nhiệm cho tất cả các tổn thất (bao gồm việc mất hoặc sử dụng Nội dung ảo) trên tài khoản của bạn, khi bạn chia sẻ Thông tin đăng nhập hoặc không bảo mật tài khoản đăng nhập hoặc Thông tin đăng nhập của bạn.</p>

                <p><strong>1.6 Tôi có cần phải kích hoạt hệ thống xác thực đa tần tài khoản?</strong><br/>Để đảm bảo tính toàn vẹn của Các Dịch vụ Riot và/hoặc tài khoản của bạn, chúng tôi có thể yêu cầu bạn kích hoạt hệ thống xác thực đa tần tài khoản.</p>
                
                <p><em>(Cuộn xuống để xem toàn bộ các điều khoản từ Phần 2 đến Phần 19...)</em></p>
                
                <p><strong>BẠN CHẤP NHẬN VÀ ĐỒNG Ý ĐÃ ĐỌC VÀ HIỂU CÁC QUY ĐỊNH TRONG ĐIỀU KHOẢN NÀY, BẰNG VIỆC ẤN NÚT “ĐỒNG Ý” BÊN DƯỚI ĐÂY HOẶC BẮT ĐẦU SỬ DỤNG CÁC DỊCH VỤ CỦA RIOT, BẠN ĐỒNG Ý VÀ CHẤP THUẬN CÁC QUY ĐỊNH ĐƯỢC NÊU TRONG THỎA THUẬN NÀY.</strong></p>
              </div>

              {/* CHECKBOX ĐỒNG Ý */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', width: '100%', marginBottom: '15px' }}>
                  <input 
                    type="checkbox" 
                    id="agreeTerms" 
                    style={{ width: '16px', height: '16px', cursor: 'pointer', marginTop: '2px', flexShrink: 0 }} 
                    checked={agreed} 
                    onChange={(e) => setAgreed(e.target.checked)} 
                  />
                  <label htmlFor="agreeTerms" style={{ fontSize: '0.75rem', color: '#333', lineHeight: 1.4, cursor: 'pointer', textAlign: 'left', fontWeight: 600 }}>
                      Tôi đồng ý với Điều Khoản Dịch Vụ, bao gồm thỏa thuận trọng tài và từ bỏ quyền khởi kiện tập thể trong Mục 16 để giải quyết bất kỳ tranh chấp nào. Tôi đã đọc và công nhận <span style={{ color: '#d13639' }}>Chính Sách Quyền Riêng Tư.</span>
                  </label>
              </div>

              {/* NÚT CHẤP NHẬN */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                  <button 
                    disabled={!agreed}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: agreed ? '2px solid #111' : '2px solid #e5e5e5', 
                      background: agreed ? '#fff' : '#f9f9f9', 
                      color: agreed ? '#111' : '#b0b0b0', 
                      fontSize: '1rem', 
                      fontWeight: 'bold', 
                      cursor: agreed ? 'pointer' : 'not-allowed',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => {
                      alert("CHÚC MỪNG! BẠN ĐÃ TẠO TÀI KHOẢN THÀNH CÔNG.");
                      
                      // 1. Lưu thẻ VIP
                      localStorage.setItem('isLoggedIn', 'true');
                      
                      // 2. Chuyển về trang chủ bằng lệnh chuẩn của React (nhớ là chữ n viết thường)
                      navigate('/'); 
                      
                      // 3. Đợi 0.1 giây cho trang chuyển hẳn rồi mới F5 để cập nhật Header
                      setTimeout(() => {
                        window.location.reload();
                      }, 100);
                    }}
                  >
                    Chấp nhận
                  </button>
                  <p style={{ fontSize: '0.7rem', color: '#777', marginTop: '10px', marginBottom: 0 }}>
                    Vui lòng cuộn xuống dưới cùng để đồng ý và chấp nhận.
                  </p>
              </div>
            </>
          )}

          {/* ====== Link "ĐÃ CÓ SẴN TÀI KHOẢN" CHỈ HIỆN Ở BƯỚC 1 ====== */}
          {step === 1 && (
            <div className="signup-bottom-link">
              <Link to="/dang-nhap">ĐÃ CÓ SẴN TÀI KHOẢN?</Link>
            </div>
          )}

        </div>
      </div>
      
    </div>
  );
}

export default SignupPage;