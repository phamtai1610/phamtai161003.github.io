// Thêm header
function addHeader() {
    document.write(`        
	<header>
        <nav>
            <div class="container">
                <ul>
                    <li>
                        <a href="http://127.0.0.1:5500/ThaoTai10/TStore/index.html"><img style="width: 70px;" src="./assets/img/logo.jpg" alt=""></a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropbtn"><i class="fa-solid fa-book"></i> Sản phẩm</a>
                        <div class="dropdown-content">
                            <a href="/ThaoTai10/TStore/DienThoaiAll.html">Điện thoại</a>
                            <a href="/ThaoTai10/TStore/LapTop.html">Laptop</a>
                            <a href="/ThaoTai10/TStore/MayTinhBang.html">Máy tính bảng</a>

                        </div>
                    </li>
                    <li><i class="fa-solid fa-truck"></i><a href="/ThaoTai10/TStore/tracuudonhang.html">Tra cứu đơn hàng</a></li>
                    <li><i class="fa-solid fa-percent"></i><a href="/ThaoTai10/TStore/khuyenmai.html">Khuyến mãi</a></li>

                    <li><i class="fa-solid fa-phone"></i><a href="/ThaoTai10/TStore/HoTro.html">Liên hệ hỗ trợ</a></li>
                    <li><i class="fa-solid fa-user"></i><a href="/ThaoTai10/TStore/dangnhap.html">Đăng Nhập</a></li>

                    <li><input type="text" placeholder="Nhập tên sản phẩm "><i class="fa-solid fa-magnifying-glass"></i></li>
                    <li>
                        <a href="/ThaoTai10/TStore/giohang.html"><button><i class="fa-solid fa-cart-shopping"></i></button></a></li>

                </ul>
            </div>
        </nav>
    </header>
    `)
}

function addFooter() {
    document.write(`
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h4>Liên hệ</h4>
                <ul>
                    <li>Địa chỉ: 235 Hoàng Quốc Việt, Cổ Nhuế, Bắc Từ Liêm, Hà Nội</li>
                    <li>Điện thoại: 0705757122</li>
                    <li>Email: pdtai161003@gmail.com</li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Thông tin</h4>
                <ul>
                    <li><a href="/ThaoTai10/TStore/BaoMat.html">Chính sách bảo mật</a></li>
                    <li><a href="/ThaoTai10/TStore/tempuser.html">Điều khoản sử dụng</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Mạng xã hội</h4>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/huyentrang.bui.31586526?mibextid=LQQJ4d">Facebook</a>
                        <i class="fa-brands fa-facebook" style="color: #3673dd;"></i>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/TTT">Instagram</a>
                        <i class="fa-brands fa-instagram" style="color: #858585;"></i>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/TTT">Twitter</a>
                        <i class="fa-brands fa-twitter"></i>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    `);
}
