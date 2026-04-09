import React, { useState, useEffect } from 'react';
import './App.css';
import AllNewsPage from './pages/AllNewsPage'; 
import { HashRouter, Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import GameUpdatesPage from './pages/GameUpdatesPage';
import EsportsPage from './pages./EsportsPage';
import DevTeamPage from './pages/DevTeamPage';
import MediaPage from './pages/MediaPage';
import CommunityPage from './pages/CommunityPage';
import RiotGamesPage from './pages/RiotGamesPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage'; 

// ==========================================
// 1. DỮ LIỆU (DATA)
// ==========================================
const newsData = [
  {
    id: 1, image: './Es1.avif', category: 'ESPORTS', date: '24/3/2026',
    title: 'Kỳ 2 LCP 2026', description: '2 suất tham dự MSI đang chờ đợi khi các đội tuyển trở lại LCP.'
  },
  {
    id: 2, image: './Es2.avif', category: 'ESPORTS', date: '22/3/2026',
    title: 'Top Các Pha Xử Lý - Bán Kết', description: 'Những pha xử lý kiến tạo meta cháy máy: hãy cùng xem lại highlight từ Bán Kết First Stand 2026.'
  },
  {
    id: 3, image: './Es3.avif', category: 'ESPORTS', date: '22/3/2026',
    title: 'Cập Nhật Về MSI Và CKTG', description: 'Địa điểm thi đấu, thông tin về vé tham dự và hơn thế nữa!'
  },
  {
    id: 4, image: './Es4.avif', category: 'ESPORTS', date: '21/3/2026',
    title: 'Top Các Pha Xử Lý - Group Stage', description: 'Hãy sẵn sàng theo dõi các đội dẫn đầu cuộc đua trong những trận đấu đầu tiên của First Stand 2026.'
  },
  {
    id: 5, image: './Es5.avif', category: 'CẬP NHẬT TRÒ CHƠI', date: '18/3/2026',
    title: 'Thông Tin Bản Cập Nhật Liên Minh Huyền Thoại 26.6', description: 'Đã đến thời điểm cho First Stand và cập nhật của Shyvana!'
  },
  {
    id: 6, image: './Es6.avif', category: 'CẬP NHẬT TRÒ CHƠI', date: '4/3/2026',
    title: 'Trailer Mùa 1 Phần II', description: 'Vương Quốc đang vẫy gọi. Liệu bạn có sẵn sàng chiến đấu? Mùa 1: Vì Demacia tiếp tục với Phần II.'
  },
  {
    id: 7, image: './Es7.avif', category: 'CẬP NHẬT TRÒ CHƠI', date: '4/3/2026',
    title: 'Thông Tin Bản Cập Nhật 26.5', description: 'Chào mừng đến với bản cập nhật chính thức của First Stand - giải đấu quốc tế lớn đầu tiên trong năm!'
  },
  {
    id: 8, image: './Es8.avif', category: 'CẬP NHẬT TRÒ CHƠI', date: '3/3/2026',
    title: 'Tiêu Điểm Tướng Shyvana', description: 'Giải phóng cơn thịnh nộ với cập nhật mới cho Shyvana, Long Nữ.'
  },
  {
    id: 9, image: './Es9.avif', category: 'ĐỘI NGŨ PHÁT TRIỂN', date: '2/3/2026',
    title: 'Đội Ngũ Phát Triển: Phân Bổ Từ MMR đến Xếp Hạng', description: 'Mục tiêu của chúng tôi dành cho chế độ Xếp Hạng, cùng một số điều chỉnh nhằm đảm bảo hành trình leo hạng của bạn luôn công bằng và giàu tính cạnh tranh.'
  },
  {
    id: 10, image: './Es10.avif', category: 'ĐỘI NGŨ PHÁT TRIỂN', date: '2/3/2026',
    title: '/đnpt: Lệnh Cấm Vì Lạm Dụng Chat Nghiêm Trọng', description: 'Chúng tôi sẽ có biện pháp xử lý cho hành vi lạm dụng chat nghiêm trọng bắt đầu từ phiên bản 26.5.'
  },
  {
    id: 11, image: './Es11.avif', category: 'ESPORTS', date: '2/3/2026',
    title: 'Giải Thích Thể Thức First Stand 2026', description: '7 ngày. 6 khu vực. 1 nhà vô địch. Đây là những điều cần biết về giải đấu lớn đầu tiên của năm 2026.'
  },
  {
    id: 12, image: './Es12.avif', category: 'ESPORTS', date: '2/3/2026',
    title: 'Giới Thiệu FST 2026', description: 'Những điều bạn cần biết về giải đấu FST tại São Paulo!'
  },
  {
    id: 13, 
    image: './Es13.avif', 
    category: 'CẬP NHẬT TRÒ CHƠI', 
    date: '19/2/2026',
    title: 'Thông Tin Bản Cập Nhật Liên Minh Huyền Thoại 26.4', 
    description: 'Chúc mừng Tết Nguyên Đán, chào mừng đến với bản cập nhật 26.4!'
  },
  {
    id: 14, 
    image: './Es14.avif', 
    category: 'CẬP NHẬT TRÒ CHƠI', 
    date: '4/2/2026',
    title: 'Thông Tin Bản Cập Nhật 26.3', 
    description: 'Hòa chung không khí Tết trong Bản Cập Nhật 26.3 🎊'
  },
  {
    id: 15, 
    image: './Es15.avif', 
    category: 'CẬP NHẬT TRÒ CHƠI', 
    date: '28/1/2026',
    title: 'Tết Nguyên Đán 2026', 
    description: 'Chung vui năm mới rực rỡ như pháo hoa. Sự kiện Tết Nguyên Đán bắt đầu trong Phiên Bản 26.03'
  },
  {
    id: 16, 
    image: './Es16.avif', 
    category: 'CẬP NHẬT TRÒ CHƠI', 
    date: '22/1/2026',
    title: 'Viego Quỷ Vực Quân Vương | Trailer Ra Mắt - Liên Minh Huyền Thoại', 
    description: 'Chúng nghĩ rằng cái chết là dấu chấm hết cho hắn. Nhưng chúng đã lầm.'
  },
  {
    id: 17, 
    image: './Es17.jpg', 
    category: 'CẬP NHẬT TRÒ CHƠI', 
    date: '22/1/2026',
    title: 'Thông Tin Bản Cập Nhật 26.2', 
    description: 'Bản Cập Nhật 26.2 đã sẵn sàng khai nòng!'
  },
  {
    id: 18, 
    image: './Es18.avif', 
    category: 'CẬP NHẬT TRÒ CHƠI', 
    date: '16/1/2026',
    title: 'EP1: Vũ Điệu Tài Lộc | Tết Nguyên Đán 2026', 
    description: 'Irelia Thần Thoại Đột Phá khởi động dịp ăn mừng bằng một màn biểu diễn sắc sảo.'
  },
  {
    id: 19, 
    image: './Es19.avif', 
    category: 'CẬP NHẬT TRÒ CHƠI', 
    date: '9/1/2026',
    title: 'Trang Phục Trác Việt: Viego Quỷ Vực Quân Vương', 
    description: 'Bảy lưỡi kiếm. Một vị vua. Không thương cảm. Viego Quỷ Vực Quân Vương hiện đã ra mắt trong Bản Cập Nhật 26.02.'
  },
  {
    id: 20, 
    image: './Es20.avif', 
    category: 'CẬP NHẬT TRÒ CHƠI', 
    date: '8/1/2026',
    title: 'Cập Nhật Từ ĐNPT: Vì Demacia', 
    description: "Pabro và Meddler chia sẻ về Mùa Đầu Tiên của năm 2026: Shyvana, các biện pháp can thiệp tình trạng 'hostage lobby', cùng nhiều cập nhật khác"
  },
  {
    id: 21, 
    image: './Es21.avif', 
    category: 'ESPORTS', 
    date: '16/1/2026',
    title: 'VCS 2026 CÔNG BỐ QUY TRÌNH TÌM KIẾM ĐỐI TÁC CHO SUẤT THAM DỰ KHÁCH MỜI', 
    description: 'Ban Tổ Chức giải đấu Vietnam Championship Series 2026 (VCS 2026) chính thức thông báo việc bắt đầu tiếp nhận đăng ký cho các đội tuyển khách mời.'
  },
  {
    id: 22, 
    image: './Es22.avif', 
    category: 'ESPORTS', 
    date: '16/1/2026',
    title: 'Co-streamer Trực Tuyến Cho Kỳ 1 LCP 2026', 
    description: 'Công bố danh sách co-streamer chính thức cho Kỳ 1 LCP 2026'
  },
  {
    id: 23, 
    image: './Es23.avif', 
    category: 'ESPORTS', 
    date: '15/1/2026',
    title: 'GIỚI THIỆU VCS 2026', 
    description: 'Sau đây là tất cả những điều bạn cần biết về mùa giải VCS 2026.'
  },
  {
    id: 24, 
    image: './Es24.avif', 
    category: 'ESPORTS', 
    date: '8/1/2026',
    title: 'Khởi Động Mùa Giải 2026: Esports LMHT', 
    description: 'Chào mừng đến với sự khởi đầu của Mùa Giải 2026!'
  },
  {
    id: 25, 
    image: './Es25.avif', 
    category: 'ESPORTS', 
    date: '5/1/2026',
    title: 'Giới Thiệu Mùa Giải LCP 2026', 
    description: 'Sau đây là tất cả những điều bạn cần biết về mùa giải LCP 2026!'
  },
  {
    id: 26, 
    image: './Es26.avif', 
    category: 'ESPORTS', 
    date: '22/12/2025',
    title: 'Ground Zero Gaming Sẽ Gia Nhập LCP Trong Mùa Giải 2026', 
    description: '' 
  },
  {
    id: 27, 
    image: './Es27.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '2/3/2026',
    title: 'Tóm Tắt Cập Nhật Từ ĐNPT', 
    description: 'Tóm tắt ngắn các thay đổi trong Cập Nhật Từ ĐNPT hôm nay.'
  },
  {
    id: 28, 
    image: './Es28.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '2/3/2026',
    title: 'Cập Nhật Từ ĐNPT: Xếp Hạng, Shyvana & Cập Nhật Khác', 
    description: 'Pabro, Meddler, Riot Memurr nói về phân bổ MMR, cập nhật Shyvana, ARAM: Hỗn Loạn và nội dung khác.'
  },
  {
    id: 29, 
    image: './Es29.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '8/1/2026',
    title: 'Tóm Tắt: Cập Nhật Từ ĐNPT - Vì Demacia', 
    description: 'Tóm tắt ngắn các thay đổi trong Cập Nhật Từ ĐNPT hôm nay.'
  },
  {
    id: 30, 
    image: './Es30.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '1/12/2025',
    title: 'ĐNPT: Mùa 1 2026 - Chủ Đề, Lối Chơi & Cập Nhật Khác', 
    description: 'Pabro và Meddler trò chuyện về Mùa 1 2026 với chủ đề, lối chơi, Đấu Siêu Tốc, WASD và hơn thế nữa.'
  },
  {
    id: 31, 
    image: './Es31.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '1/12/2025',
    title: 'Tóm Tắt: Mùa 1 2026 - Chủ Đề, Lối Chơi & Cập Nhật Khác Từ ĐNPT', 
    description: 'Tóm tắt ngắn các thay đổi trong Cập Nhật Từ ĐNPT hôm nay.'
  },
  {
    id: 32, 
    image: './Es32.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '1/12/2025',
    title: '/đnpt: Đấu Siêu Tốc Nhanh Hơn', 
    description: 'Cách chúng tôi sẽ đẩy nhanh mọi thứ trong năm sau.'
  },
  {
    id: 33, 
    image: './Es33.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '1/12/2025',
    title: '/đnpt: Tổng Quan Lối Chơi Mùa 1 năm 2026', 
    description: "Bài viết tổng quan về các thay đổi trong lối chơi sẽ được cập nhật trong Summoner's Rift mùa 2026."
  },
  {
    id: 34, 
    image: './Es34.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '14/11/2025',
    title: 'Lịch Trình Phát Triển ĐTCL: Truyền Thuyết & Huyền Thoại', 
    description: 'Sống lại lịch sử của Runeterra, khi mỗi khu vực là một tộc hệ, và mở khóa các tướng với cơ chế mới.'
  },
  {
    id: 35, 
    image: './Es35.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '14/10/2025',
    title: 'Phác Thảo Từ Nhà Phát Triển: ARAM', 
    description: 'Từ các trận đấu tùy chọn do người chơi tạo cho tới chế độ lâu đời của LMHT, đây là chuyện về ARAM.'
  },
  {
    id: 36, 
    image: './Es36.avif', 
    category: 'ĐỘI NGŨ PHÁT TRIỂN', 
    date: '6/10/2025',
    title: 'ARAM Hỗn Loạn, Smurf và Cập Nhật Khác Từ ĐNPT', 
    description: 'Các nhà phát triển chia sẻ về ARAM Hỗn Loạn, vấn đề smurf, Sinh Nhật Arcane và Chung Kết Thế Giới.'
  },
  {
    id: 37, 
    image: './Es37.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '27/2/2026',
    title: 'Shyvana, Long Nữ', 
    description: 'Đừng sợ hãi ngọn lửa bên trong. Hãy thuần phục nó.'
  },
  {
    id: 38, 
    image: './Es38.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '4/2/2026',
    title: 'Trailer Tết Nguyên Đán 2026', 
    description: 'Hoa xuân hé nở, thắp lại tình bạn. Sự kiện Tết Nguyên Đán bắt đầu trong Phiên Bản 26.03.'
  },
  {
    id: 39, 
    image: './Es39.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '7/1/2026',
    title: 'Sự Cứu Rỗi | Phim Ngắn Mùa 1 2026', 
    description: 'Trong thời khắc đen tối nhất, ánh sáng hy vọng luôn chiếu rọi.'
  },
  {
    id: 40, 
    image: './Es40.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '20/11/2025',
    title: 'Nhạc Chủ Đề Tướng Zaahen', 
    description: 'Rèn tâm cho thép. Rèn xác cho vững. Diệt kẻ Sa Ngã. Lắng nghe nhạc chủ đề chính thức của Zaahen.'
  },
  {
    id: 41, 
    image: './Es41.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '15/11/2025',
    title: 'Phim Ngắn Mini K/DA Ahri Đột Phá', 
    description: 'Mọi khoảnh khắc đã dẫn tới giây phút này.'
  },
  {
    id: 42, 
    image: './Es42.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '9/11/2025',
    title: 'Phim Ngắn ĐTCL: Truyền Thuyết & Huyền Thoại', 
    description: 'To lớn, nhỏ bé hay đâu đó ở giữa... tất cả huyền thoại cùng hòa vang khắp Đồng Quy Giới.'
  },
  {
    id: 43, 
    image: './Es43.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '7/11/2025',
    title: 'Phim Ngắn Mùa 3: Hoàng Hôn Lụi Tàn', 
    description: 'Nhiều thế kỷ trước, Zaahen đã lựa chọn. Giờ đây, Xin Zhao phải đưa ra lựa chọn của chính anh.'
  },
  {
    id: 44, 
    image: './Es44.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '13/10/2025',
    title: 'Video Âm Nhạc Bài Hát Chủ Đề CKTG 2025', 
    description: 'Hãy xem video âm nhạc của bài hát "Sacrifice" ft. G.E.M. (鄧紫棋) ngay!'
  },
  {
    id: 45, 
    image: './Es45.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '29/8/2025',
    title: 'Nhạc Chủ Đề Tướng Xin Zhao', 
    description: 'Một chiến binh, một vệ thần. Lắng nghe bản nhạc chủ đề mới của Xin Zhao, Tể Tướng Demacia.'
  },
  {
    id: 46, 
    image: './Es46.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '25/8/2025',
    title: 'Bắt Đầu Từ Kết Thúc', 
    description: 'Một cơn ác mộng khủng khiếp... hay là viễn cảnh về những điều sắp xảy ra?'
  },
  {
    id: 47, 
    image: './Es47.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '19/7/2025',
    title: 'Nhạc Chủ Đề Tướng Yunara', 
    description: 'Khúc ca hoàn hảo để giải phóng linh lực ngàn năm và trút nó xuống đầu kẻ địch.'
  },
  {
    id: 48, 
    image: './Es48.avif', 
    category: 'TRUYỀN THÔNG', 
    date: '11/7/2025',
    title: 'Mở Đầu K.O. Đại Chiến Anh Hùng | Phim Ngắn Mùa', 
    description: 'Xem Fighter!! ngay'
  },
  {
    id: 49, 
    image: './Es49.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '28/8/2025',
    title: 'K.O. Coliseum Community Zine', 
    description: 'Check out the beautiful works from talented community members.'
  },
  {
    id: 50, 
    image: './Es50.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '13/5/2025',
    title: 'Ăn Mừng Sự Kiện Sắc Màu Hân Hoan 2025: LMHT & ĐTCL', 
    description: 'Cùng chúng tôi ăn mừng sự kiện Sắc Màu Hân Hoan với toàn thể cộng đồng!'
  },
  {
    id: 51, 
    image: './Es51.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '21/10/2024',
    title: 'Tiêu Điểm Son Heung-min', 
    description: 'Từ sân cỏ đến Đấu Trường: Hành trình của Son Heung-min trong bóng đá, Liên Minh và cuộc đời.'
  },
  {
    id: 52, 
    image: './Es52.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '23/9/2024',
    title: 'Ngày Tôn Vinh Người Chơi LMHT', 
    description: 'Tất cả những thông tin bạn cần biết về sự kiện mừng cộng đồng sắp tới.'
  },
  {
    id: 53, 
    image: './Es53.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '25/5/2024',
    title: 'Lee Sin - Tác Phẩm Cộng Đồng', 
    description: 'Cộng đồng đã gửi chút yêu thương đến Lee Sin bằng những tác phẩm nghệ thuật nhân dịp ASU của anh được cập nhật. Hãy cùng bắt đầu với vài tác phẩm cực đỉnh nào!'
  },
  {
    id: 54, 
    image: './Es54.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '13/5/2024',
    title: 'Ăn Mừng Sự Kiện Sắc Màu Hân Hoan 2024: LMHT & ĐTCL', 
    description: 'Ăn mừng sự kiện Sắc Màu Hân Hoan cùng chúng tôi!'
  },
  {
    id: 55, 
    image: './Es55.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '16/4/2024',
    title: 'Danh Hiệu Game Của Năm Đã Rất Gần', 
    description: 'Bình chọn cho Đấu trường Chân Lý tại Vietnam Gameverse 2024.'
  },
  {
    id: 56, 
    image: './Es56.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '24/11/2023',
    title: 'Cất lên tiếng nói của bạn. Lựa chọn tổ chức từ thiện bạn muốn.', 
    description: 'Bỏ phiếu để quyết định nơi mà 5,4 triệu Đô La Mỹ từ Quỹ Tác Động Xã Hội Của Riot Games sẽ được phân bổ.'
  },
  {
    id: 57, 
    image: './Es57.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '3/10/2023',
    title: 'Cùng Bình Chọn Chủ Đề Cho Trang Bị Mới!', 
    description: 'Hãy bình chọn cho chủ đề bạn muốn chúng tôi áp dụng cho trang bị mới, sắp ra mắt vào tháng 01/2024!'
  },
  {
    id: 58, 
    image: './Es58.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '3/10/2023',
    title: 'Bình Chọn Chủ Đề Cho Trang Bị Mới!', 
    description: 'Hãy bình chọn cho chủ đề bạn muốn chúng tôi áp dụng cho trang bị mới, sắp ra mắt vào tháng 01/2024!'
  },
  {
    id: 59, 
    image: './Es59.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '12/8/2023',
    title: 'Hướng Dẫn Cosplay Tinh Võ Sư: Vòng 2', 
    description: 'Thể hiện linh hồn của Tinh Võ bằng trang phục cosplay của bạn!'
  },
  {
    id: 60, 
    image: './Es60.avif', 
    category: 'CỘNG ĐỒNG', 
    date: '27/7/2023',
    title: 'Hướng Dẫn Cosplay Tinh Võ Sư: Vòng 1', 
    description: 'Hóa thân vào Linh Hồn của những Võ Sư này bằng trang phục cosplay của bạn!'
  },
  {
    id: 61, 
    image: './Es61.avif', 
    category: 'RIOT GAMES', 
    date: '17/1/2025',
    title: 'Hỗ Trợ Cứu Trợ Cháy Rừng Ở LA', 
    description: 'Từ 23/01 - 05/02, toàn bộ doanh thu của Riot từ trang phục Tristana Lính Cứu Hỏa cùng một khoản x3 số tiền này sẽ được gửi tới Quỹ Tác Động Xã Hội của Riot Games.'
  },
  {
    id: 62, 
    image: './Es62.avif', 
    category: 'RIOT GAMES', 
    date: '20/5/2024',
    title: 'BÀI KIỂM TRA SỨC MẠNH CUỐI CÙNG | MSI 2024', 
    description: 'Trận Chung Kết Tổng #MSI2024 đã đến. Hãy theo dõi để chứng kiến trận tái đấu để đời này.'
  },
  {
    id: 63, 
    image: './Es63.avif', 
    category: 'RIOT GAMES', 
    date: '9/12/2022',
    title: 'Liên Kết Tài Khoản Riot & Xbox Game Pass Ngay Để Mở Đặc Quyền', 
    description: 'Riot Games sắp có mặt trên Xbox Game Pass! Liên kết Tài Khoản Riot của bạn với Xbox Game Pass để mở khóa các đặc quyền chỉ dành cho thành viên.'
  }
];

const championData = [
  { id: 1, image: './Garen.jpg', name: 'GAREN', title: 'SỨC MẠNH CỦA DEMACIA', role: 'ĐẤU SĨ' },
  { id: 2, image: './Ashe.jpg', name: 'ASHE', title: 'CUNG THỦ BĂNG GIÁ', role: 'XẠ THỦ' },
  { id: 3, image: './Lux.jpg', name: 'LUX', title: 'TIỂU THƯ ÁNH SÁNG', role: 'PHÁP SƯ' },
  { id: 4, image: './Jinx.jpg', name: 'JINX', title: 'KHẨU PHÁO NỔI LOẠN', role: 'XẠ THỦ' }
];

const gameModes = [
  { id: 0, thumb: './mode1-thumb.jpg', video: './mode1-vid.mp4' },
  { id: 1, thumb: './mode2-thumb.jpg', video: './mode2-vid.mp4' },
  { id: 2, thumb: './mode3-thumb.jpg', video: './mode3-vid.mp4' }
];

// ==========================================
// 2. CÁC THÀNH PHẦN (COMPONENTS)
// ==========================================

function Header({ onOpenModal, isLoggedIn, handleLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="header-container">
        <div className="left-side">
          <div className="logo-group">
            <div className="riot-games" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              RIOT GAMES <span className="arrow-down">▼</span>
            </div>
            <div className="separator-line"></div>
            <div className="lol-logo-wrapper" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <img src="./LOGO_LOL-removebg-preview.png" alt="LOL Logo" className="lol-icon-img" />
            </div>
          </div>

          <div className="menu-group">
            <div className="menu-item has-dropdown active">TRÒ CHƠI</div>
            <div className="menu-item"><span>TƯỚNG</span></div>
            <div className="menu-item has-dropdown">
              <span>TIN TỨC</span> <span className="arrow">▼</span>
              <div className="dropdown-panel">
                <div className="dropdown-panel-item" onClick={() => navigate('/tin-tuc')} style={{ cursor: 'pointer' }}>TẤT CẢ</div>
                <div className="dropdown-panel-item" onClick={() => navigate('/cap-nhat-tro-choi')} style={{ cursor: 'pointer' }}>CẬP NHẬT TRÒ CHƠI</div>
                <div className="dropdown-panel-item" onClick={() => navigate('/esports')} style={{ cursor: 'pointer' }}>ESPORTS</div>
                <div className="dropdown-panel-item" onClick={() => navigate('/doi-ngu-phat-trien')} style={{ cursor: 'pointer' }}>ĐỘI NGŨ PHÁT TRIỂN</div>
                <div className="dropdown-panel-item" onClick={() => navigate('/truyen-thong')} style={{ cursor: 'pointer' }}>TRUYỀN THÔNG</div>
                <div className="dropdown-panel-item" onClick={() => navigate('/cong-dong')} style={{ cursor: 'pointer' }}>CỘNG ĐỒNG</div>
                <div className="dropdown-panel-item" onClick={() => navigate('/riot-games')} style={{ cursor: 'pointer' }}>RIOT GAMES</div>
              </div>
            </div>
            <div className="menu-item" onClick={() => navigate('/cap-nhat-tro-choi')} style={{ cursor: 'pointer' }}><span>CHI TIẾT CẬP NHẬT</span></div>
            <div className="menu-item"><span>ESPORTS</span> <span className="ext-icon">↗</span></div>
             <div className="menu-item has-dropdown">
              <span>THÊM</span> <span className="arrow">▼</span>
              <div className="dropdown-panel">
                <div className="dropdown-panel-item" style={{ cursor: 'pointer' }}><span>VŨ TRỤ</span> <span className="ext-icon">↗</span></div>
                <div className="dropdown-panel-item" style={{ cursor: 'pointer' }}><span>HỖ TRỢ</span> <span className="ext-icon">↗</span></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="action-group">
          <div className="action-icons">
            <span className="search-icon">🔍</span>
            <span className="globe-icon">🌐</span>
          </div>
          
          {isLoggedIn ? (
            <div className="account-dropdown-wrapper">
              <button className="account-btn">Tài khoản của tôi ▴</button>
              <div className="account-dropdown-panel">
                <div className="account-dropdown-header">Tài Khoản Của Tôi</div>
                <div className="account-dropdown-item">Tải Trò Chơi</div>
                <div className="account-dropdown-item">Cài Đặt</div>
                <div className="account-dropdown-item" onClick={handleLogout}>Đăng Xuất</div>
              </div>
            </div>
          ) : (
            <button className="signin-button" onClick={onOpenModal}>CHƠI NGAY</button>
          )}
          
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
            ☰
          </button>
        </div>
      </nav>

      {/* MENU ĐIỆN THOẠI */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-logo-wrap">
             <img src="./LOGO_LOL-removebg-preview.png" alt="LOL" className="mobile-lol-logo" />
             <span className="mobile-logo-text">LEAGUE OF LEGENDS</span>
          </div>
          <button className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        </div>
        <div className="mobile-search-box">
          <span className="mobile-search-icon">🔍</span>
          <input type="text" placeholder="Tìm kiếm" className="mobile-search-input" />
          <span className="mobile-search-clear">✕</span>
        </div>
        <div className="mobile-menu-list">
          <div className="mobile-menu-row">TRÒ CHƠI</div>
          <div className="mobile-menu-row">TƯỚNG</div>
          <div className="mobile-menu-row" onClick={() => { navigate('/tin-tuc'); setIsMobileMenuOpen(false); }}>
            TIN TỨC <span className="mobile-arrow">▼</span>
          </div>
          <div className="mobile-menu-row">CHI TIẾT CẬP NHẬT</div>
          <div className="mobile-menu-row">ESPORTS <span className="mobile-ext">↗</span></div>
          <div className="mobile-menu-row">VŨ TRỤ <span className="mobile-ext">↗</span></div>
          <div className="mobile-menu-row">HỖ TRỢ <span className="mobile-ext">↗</span></div>
        </div>
        <div className="mobile-play-wrap">
          <button className="mobile-play-now-btn" onClick={() => {
            setIsMobileMenuOpen(false);
            onOpenModal();              
          }}>CHƠI NGAY</button>
        </div>
      </div>
    </>
  );
}

function HeroSection({ onOpenModal }) {
  return (
    <section className="hero-container">
      <video autoPlay loop muted className="hero-video">
        <source src="./videoplayback.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">LIÊN MINH HUYỀN THOẠI</h1>
        <p className="hero-subtitle">
          LIÊN MINH HUYỀN THOẠI - TỰA GAME MOBA 5V5, NƠI MỖI ĐỘI CẦN PHÁ HỦY NHÀ CHÍNH CỦA ĐỐI THỦ ĐỂ CHIẾN THẮNG
        </p>
        <button className="hero-btn" onClick={onOpenModal}>CHƠI MIỄN PHÍ</button>
      </div>
    </section>
  );
}

function FinalCtaSection({ onOpenModal }) {
  return (
    <section className="final-cta-container">
      <video autoPlay loop muted className="final-cta-video">
        <source src="./final-video.mp4" type="video/mp4" />
      </video>
      <div className="final-cta-overlay"></div>
      <div className="final-cta-content">
        <button className="final-cta-btn" onClick={onOpenModal}>CHƠI MIỄN PHÍ</button>
      </div>
    </section>
  );
}

function HomeContent({ onOpenModal }) {
  return (
    <>
      <HeroSection onOpenModal={onOpenModal} />
      <NewsSection />
      <ChampionShowcase />
      <SkinSection />
      <GameModeSection />
      <FinalCtaSection onOpenModal={onOpenModal} />
    </>
  );
}

function NewsSection() {
  // Lấy 3 tin tức đầu tiên, bỏ qua vì bạn đã có sẵn data ở trên
  return (
    <section className="news-container">
      <div className="news-content">
        <h2 className="news-heading">TIN TỨC TIÊU BIỂU</h2>
        <div className="news-grid">
          {newsData && newsData.slice(0, 3).map((news) => (
            <div className="news-card" key={news.id}>
              <div className="news-image-wrapper">
                <img src={news.image} alt={news.title} className="news-image" />
              </div>
              <div className="news-info">
                <div className="news-meta">
                  <span className="news-category">{news.category}</span>
                  <span className="news-divider">|</span>
                  <span className="news-date">{news.date}</span>
                </div>
                <h3 className="news-title">{news.title}</h3>
                <p className="news-desc">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChampionShowcase() {
  return (
    <section className="champion-container">
      <div className="champion-content">
        <h2 className="champion-heading">HÃY CHỌN NGAY MỘT TƯỚNG</h2>
        <p className="champion-subheading">Với hơn 160 vị tướng, bạn sẽ luôn tìm được lối chơi phù hợp với mình.</p>
        <div className="champion-grid">
          {championData && championData.map((champion) => (
            <div className="champion-card" key={champion.id}>
              <div className="champion-image-wrapper">
                <img src={champion.image} alt={champion.name} className="champion-image" />
              </div>
              <div className="champion-info-overlay">
                <span className="champion-role">{champion.role}</span>
                <h3 className="champion-name">{champion.name}</h3>
                <p className="champion-title">{champion.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkinSection() {
  return (
    <section className="skin-section">
      <div className="skin-container">
        <div className="skin-image-col">
          <div className="gold-frame"></div>
          <img src="./5bfcb6ba05ba33d7363258a98bec2956-removebg-preview.png" alt="Akali Skin" className="character-img" />
        </div>
        <div className="skin-text-col">
          <h4 className="skin-subtitle">HẠ GỤC KẺ ĐỊCH</h4>
          <h2 className="skin-title">MỘT CÁCH <br /> SANG CHẢNH</h2>
          <p className="skin-description">Thay đổi diện mạo các vị tướng yêu thích với trang phục để tạo nên điểm nhấn của riêng bạn.</p>
          <button className="skin-btn">CHƠI NGAY</button>
        </div>
      </div>
    </section>
  );
}

function GameModeSection() {
  const [activeMode, setActiveMode] = useState(0);
  return (
    <section className="gamemode-section">
      <div className="gamemode-container">
        <div className="gamemode-left">
          <h4 className="gamemode-subtitle">RẤT NHIỀU CÁCH</h4>
          <h2 className="gamemode-title">CHƠI</h2>
          <button className="gamemode-btn">CHƠI NGAY</button>
          <div className="thumbnail-row">
            {gameModes && gameModes.map((mode, index) => (
              <img 
                key={mode.id}
                src={mode.thumb} 
                alt={`Mode ${index}`} 
                className={`mode-thumbnail ${activeMode === index ? 'active' : ''}`}
                onClick={() => setActiveMode(index)}
              />
            ))}
          </div>
        </div>
        <div className="gamemode-right">
          <div className="circle-frame">
            <video key={activeMode} autoPlay loop muted className="circle-video">
              <source src={gameModes[activeMode].video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterLinks() {
  return (
    <section className="footer-links-section">
      <div className="footer-links-content">
        <span className="footer-link">VỀ LIÊN MINH HUYỀN THOẠI</span>
        <span className="footer-link">HỖ TRỢ</span>
        <span className="footer-link">TRANG ESPORTS CHÍNH</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-section">
      <div className="social-icons">
        <div className="social-circle">f</div>
        <div className="social-circle">ig</div>
        <div className="social-circle">yt</div>
      </div>
      <div className="partner-logos">
        <img src="./riot-gray-removebg-preview.png" alt="Riot Games" className="riot-footer-logo" />
        <img src="./vng-logo.png" alt="VNG Games" className="footer-logo" />
      </div>
      <div className="footer-legal-text">
        <p>© 2009-2022 bởi Tập Đoàn Riot Games.</p>
      </div>
      <div className="footer-bottom-links">
        <span className="bottom-link">CHÍNH SÁCH BẢO MẬT</span>
        <span className="bottom-link">ĐIỀU KHOẢN SỬ DỤNG (RIOT)</span>
        <span className="bottom-link">TÙY CHỌN COOKIES</span>
      </div>
      <div className="age-warning">
        <img src="./age-18.png" alt="18+" className="age-img" />
      </div>
    </footer>
  );
}

// ==========================================
// 3. LẮP RÁP TOÀN BỘ APP BẰNG BROWSER ROUTER
// ==========================================
function AppContent() {
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/tao-tai-khoan' || location.pathname === '/dang-nhap';

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.location.href = '/'; 
  };

  return (
    <div>
      {!isAuthPage && <Header onOpenModal={() => setIsPlayModalOpen(true)} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
      
      <Routes>
        <Route path="/" element={<HomeContent onOpenModal={() => setIsPlayModalOpen(true)} />} />
        <Route path="/tin-tuc" element={<AllNewsPage newsData={newsData} />} />
        <Route path="/cap-nhat-tro-choi" element={<GameUpdatesPage newsData={newsData} />} />
        <Route path="/esports" element={<EsportsPage newsData={newsData} />} />
        <Route path="/doi-ngu-phat-trien" element={<DevTeamPage newsData={newsData} />} />
        <Route path="/truyen-thong" element={<MediaPage newsData={newsData} />} />
        <Route path="/cong-dong" element={<CommunityPage newsData={newsData} />} />
        <Route path="/riot-games" element={<RiotGamesPage newsData={newsData} />} />
        <Route path="/tao-tai-khoan" element={<SignupPage />} />
        <Route path="/dang-nhap" element={<LoginPage />} />
      </Routes>

      {!isAuthPage && (
        <>
          <FooterLinks />
          <Footer />
        </>
      )}

      {isPlayModalOpen && (
        <div className="play-modal-overlay">
          <div className="play-modal-content">
            <button className="play-modal-close" onClick={() => setIsPlayModalOpen(false)}>
              ✕
            </button>
            <h2 className="play-modal-title">CHUẨN BỊ SẴN SÀNG ĐỂ CHƠI</h2>
            <div className="play-modal-options">
              <div className="play-modal-option">
                <p>Tôi không có Tài Khoản Riot</p>
                <button 
                  className="btn-create-acc" 
                  onClick={() => {
                    setIsPlayModalOpen(false);
                    navigate('/tao-tai-khoan'); 
                  }}
                >
                  TẠO TÀI KHOẢN
                </button>
              </div>
              <div className="play-modal-option">
                <p>Tôi có Tài Khoản Riot</p>
                {/* Đã cập nhật class tại đây để ăn CSS nút bo tròn */}
                <button className="btn-login-acc-modal" onClick={() => {
                      setIsPlayModalOpen(false);
                      navigate('/dang-nhap');
                }}>
                  ĐĂNG NHẬP
                </button>
              </div>
            </div>
            <div className="play-modal-bottom-line"></div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;