import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Showtimes = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state?.movie;

    const [showtimes, setShowtimes] = useState([]);

    useEffect(() => {
        fetch(
            `https://ktpm-lab01-movieservice.onrender.com/api/movies/${movie.id}/showtimes`,
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("Showtimes fetched:", data);
                setShowtimes(data);
            })
            .catch((error) =>
                console.error("Error fetching showtimes:", error),
            );
    }, [movie.id]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 px-4">
            <div className="bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center">
                <p className="font-bold text-2xl mb-6 text-violet-700">
                    Chọn suất chiếu
                </p>
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-40 h-60 object-cover rounded-lg mb-4"
                />
                <h2 className="text-3xl font-bold mb-2 text-center text-violet-700">
                    {movie.title}
                </h2>
                <p className="text-gray-600 mb-6 text-center">
                    {movie.description}
                </p>
                <div className="flex flex-wrap gap-4 justify-center mb-4">
                    {showtimes.map((showtime) => (
                        <button
                            key={showtime.id}
                            className="bg-violet-600 hover:bg-violet-800 text-white px-4 py-2 rounded-full font-semibold cursor-pointer transition duration-200"
                        >
                            {showtime.startTime.slice(0, 5)} -{" "}
                            {showtime.endTime.slice(0, 5)}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 text-violet-700 hover:underline cursor-pointer"
                >
                    Quay lại
                </button>
            </div>
        </div>
    );
};

export default Showtimes;
