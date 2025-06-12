import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Seats = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { movie, showtime } = location.state || {};

    const [bookedSeats, setBookedSeats] = useState(new Set());
    const [selectedSeat, setSelectedSeat] = useState(null); // ghế được chọn chờ xác nhận

    const allSeats = [];
    const rows = "ABCDEFG";
    for (let r of rows) {
        for (let i = 1; i <= 9; i++) {
            allSeats.push(`${r}${i}`);
        }
    }

    const formatTime = (timeStr) =>
        timeStr.length === 5 ? `${timeStr}:00` : timeStr;
    const startTime = formatTime(showtime?.startTime || "");
    const endTime = formatTime(showtime?.endTime || "");

    const fetchBookedSeats = () => {
        fetch(
            `https://ktpm-lab01-apigateway.onrender.com/api/seats?startTime=${startTime}&endTime=${endTime}`,
        )
            .then((res) => res.json())
            .then((data) => {
                const booked = new Set(data.map((seat) => seat.seatCode));
                setBookedSeats(booked);
            })
            .catch((err) => {
                console.error("Error fetching seats:", err);
            });
    };

    useEffect(() => {
        if (!startTime || !endTime) return;
        fetchBookedSeats();
    }, [startTime, endTime]);

    const handleSeatClick = (seatCode) => {
        if (bookedSeats.has(seatCode)) return;
        setSelectedSeat(seatCode); // Hiện popup xác nhận
    };

    const confirmBooking = () => {
        fetch("https://ktpm-lab01-apigateway.onrender.com/api/book", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                seatCode: selectedSeat,
                startTime,
                endTime,
            }),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Đặt chỗ thất bại");
                return res.json();
            })
            .then(() => {
                fetchBookedSeats();
                setSelectedSeat(null); // Đóng popup sau khi đặt thành công
            })
            .catch((err) => {
                console.error("Lỗi khi đặt chỗ:", err);
                alert("Ghế đã được đặt hoặc có lỗi xảy ra.");
                setSelectedSeat(null); // Đóng popup nếu lỗi
            });
    };

    const cancelBooking = () => {
        setSelectedSeat(null);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 px-4 relative">
            <div className="bg-white/90 rounded-3xl shadow-2xl p-8 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-center text-violet-700 mb-4">
                    Chọn chỗ ngồi cho: {movie?.title}
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Giờ chiếu: {showtime?.startTime?.slice(0, 5)} -{" "}
                    {showtime?.endTime?.slice(0, 5)}
                </p>

                <div className="grid grid-cols-9 gap-2 justify-center items-center mb-6">
                    {allSeats.map((seatCode) => {
                        const isBooked = bookedSeats.has(seatCode);
                        return (
                            <div
                                key={seatCode}
                                onClick={() => handleSeatClick(seatCode)}
                                className={`w-10 h-10 rounded-md flex items-center justify-center font-bold transition ${
                                    isBooked
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-green-400 hover:bg-green-600 cursor-pointer"
                                }`}
                            >
                                {seatCode}
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={() => navigate(-1)}
                    className="text-violet-700 hover:underline cursor-pointer"
                >
                    Quay lại
                </button>
            </div>

            {/* Popup xác nhận đặt chỗ */}
            {selectedSeat && (
                <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                    {/* Bỏ lớp nền đen, chỉ popup */}
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg pointer-events-auto">
                        <h3 className="text-xl font-semibold mb-4">
                            Xác nhận đặt chỗ {selectedSeat}
                        </h3>
                        <p className="mb-6">
                            Giá vé: <strong>70,000 VND</strong>
                        </p>
                        <div className="flex justify-around">
                            <button
                                onClick={confirmBooking}
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                            >
                                Xác nhận
                            </button>
                            <button
                                onClick={cancelBooking}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Seats;
