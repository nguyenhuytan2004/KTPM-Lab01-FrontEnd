const Home = () => {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 flex flex-col items-center px-4">
            {/* Header with logo and 2 buttons login and register */}
            <div className="flex items-center justify-between w-full px-32 py-8">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/683/683096.png"
                    alt="Cinema Logo"
                    className="w-16 h-16 mr-4"
                />
                <div className="flex space-x-4">
                    <a
                        href="/login"
                        className="bg-white hover:bg-gray-300 text-violet-700  font-semibold py-2 px-4 rounded-full shadow transition duration-200"
                    >
                        Đăng nhập
                    </a>
                    <a
                        href="/register"
                        className="bg-violet-700 hover:bg-violet-800 text-white font-semibold py-2 px-4 rounded-full shadow transition duration-200"
                    >
                        Đăng ký
                    </a>
                </div>
            </div>
            <div className="bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/683/683096.png"
                    alt="Cinema Logo"
                    className="w-20 h-20 mb-6"
                />
                <h1 className="text-5xl font-extrabold text-violet-700 mb-4 text-center drop-shadow">
                    Movie Ticket Booking
                </h1>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Đặt vé xem phim nhanh chóng, tiện lợi và hiện đại.
                    <br />
                    Khám phá các bộ phim hot, chọn suất chiếu và vị trí yêu
                    thích của bạn!
                </p>
                <a
                    href="/booking"
                    className="bg-violet-700 hover:bg-violet-800 text-white font-semibold py-3 px-8 rounded-full text-lg shadow transition duration-200"
                >
                    Đặt vé ngay
                </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 w-full max-w-5xl">
                <div className="bg-white/80 rounded-xl p-6 flex flex-col items-center shadow">
                    <span className="text-3xl mb-2">🎬</span>
                    <h2 className="font-bold text-xl mb-1">Phim mới nhất</h2>
                    <p className="text-gray-600 text-center">
                        Cập nhật liên tục các bộ phim bom tấn, đa dạng thể loại.
                    </p>
                </div>
                <div className="bg-white/80 rounded-xl p-6 flex flex-col items-center shadow">
                    <span className="text-3xl mb-2">🕒</span>
                    <h2 className="font-bold text-xl mb-1">Chọn suất chiếu</h2>
                    <p className="text-gray-600 text-center">
                        Linh hoạt lựa chọn thời gian và rạp chiếu phù hợp.
                    </p>
                </div>
                <div className="bg-white/80 rounded-xl p-6 flex flex-col items-center shadow">
                    <span className="text-3xl mb-2">💺</span>
                    <h2 className="font-bold text-xl mb-1">Đặt chỗ dễ dàng</h2>
                    <p className="text-gray-600 text-center">
                        Chọn vị trí ngồi yêu thích chỉ với vài cú click.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
