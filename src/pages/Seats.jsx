import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Seats = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie, showtime } = location.state || {};

    const [seats, setSeats] = useState([]);

    useEffect(() => {
        if (!showtime || !showtime.id) return;

        // TODO: Replace with your actual API endpoint
        fetch(`http://localhost:8080/api/showtimes/${showtime.id}/seats`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Seats fetched:", data);
                setSeats(data);
            })
            .catch((err) => {
                console.error("Error fetching seats:", err);
            });
    }, [showtime]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 px-4">
            <div className="bg-white/90 rounded-3xl shadow-2xl p-8 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-center text-violet-700 mb-4">
                    Chọn chỗ ngồi cho: {movie?.title}
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Giờ chiếu: {showtime?.startTime?.slice(0, 5)} -{" "}
                    {showtime?.endTime?.slice(0, 5)}
                </p>

                <div className="grid grid-cols-8 gap-2 justify-center items-center mb-6">
                    {seats.map((seat) => (
                        <div
                            key={seat.id}
                            className={`w-10 h-10 rounded-md flex items-center justify-center font-bold ${
                                seat.available
                                    ? "bg-green-400 hover:bg-green-600 cursor-pointer"
                                    : "bg-gray-400 cursor-not-allowed"
                            }`}
                        >
                            {seat.label}
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => navigate(-1)}
                    className="text-violet-700 hover:underline cursor-pointer"
                >
                    Quay lại
                </button>
            </div>
        </div>
    );
};

export default Seats;
