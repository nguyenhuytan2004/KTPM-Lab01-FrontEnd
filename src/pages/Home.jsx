import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = ({ username, handleLogout }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://ktpm-lab01-movieservice.onrender.com/api/movies")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 flex flex-col items-center px-4">
            {/* Header with logo and 2 buttons login and register */}
            <div className="flex items-center justify-between w-full px-32 py-8">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/683/683096.png"
                    alt="Cinema Logo"
                    className="w-16 h-16 mr-4"
                />
                {username ? (
                    <div>
                        <span className="text-white font-semibold mr-4">
                            Xin chào, {username}!
                        </span>
                        <button
                            onClick={handleLogout}
                            className="bg-white hover:bg-gray-300 text-violet-700 font-semibold py-2 px-4 rounded-full shadow transition duration-200 cursor-pointer"
                        >
                            Đăng xuất
                        </button>
                    </div>
                ) : (
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
                )}
            </div>
            {/* Banner */}
            <div className="bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center mb-10">
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
            </div>
            {/* Movie List */}
            <div className="grid grid-cols-5 gap-8 w-full max-w-6xl mb-16">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-white/90 rounded-xl p-4 flex flex-col items-center shadow-lg"
                    >
                        <img
                            src={movie.poster}
                            alt={movie.name}
                            className="w-40 h-60 object-cover rounded-lg mb-4"
                        />
                        <h2 className="font-bold text-lg mb-2 text-center">
                            {movie.name}
                        </h2>
                        <p className="text-orange-600 text-center mb-1 mt-auto">
                            Thời lượng: {movie.duration} phút
                        </p>
                        <p className="text-gray-600 text-center mb-4">
                            {movie.description}
                        </p>
                        <Link
                            to={`/movies/${movie.id}/showtimes`}
                            state={{ movie }}
                            className="bg-violet-700 hover:bg-violet-800 text-white font-semibold py-2 px-6 rounded-full shadow transition duration-200 mt-auto"
                        >
                            Đặt vé
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
