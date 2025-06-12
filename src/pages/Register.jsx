import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://ktpm-lab01-apigateway.onrender.com/api/user/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username,
                        password,
                        confirmPassword,
                    }),
                },
            );
            const data = await response.text();
            if (response.ok) {
                navigate("/login");
            } else {
                setMessage(data);
            }
        } catch (error) {
            setMessage("Internal server error.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 px-4">
            <div className="bg-white/90 rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/683/683096.png"
                    alt="Cinema Logo"
                    className="w-16 h-16 mb-4"
                />
                <h2 className="text-3xl font-bold text-violet-700 mb-6">
                    Đăng ký
                </h2>
                <form className="w-full flex flex-col gap-4">
                    <div>
                        <label
                            className="block text-gray-700 font-semibold mb-1"
                            htmlFor="username"
                        >
                            Tên đăng nhập
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Nhập tên đăng nhập"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 font-semibold mb-1"
                            htmlFor="password"
                        >
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Nhập mật khẩu"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 font-semibold mb-1"
                            htmlFor="confirm-password"
                        >
                            Xác nhận mật khẩu
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Nhập lại mật khẩu"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleRegister}
                        className="mt-2 bg-violet-700 hover:bg-violet-800 text-white font-semibold py-2 rounded-full shadow transition duration-200 cursor-pointer"
                    >
                        Đăng ký
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-red-600 font-semibold">
                        {message}
                    </div>
                )}
                <div className="mt-4 text-sm text-gray-600">
                    Đã có tài khoản?{" "}
                    <a
                        href="/login"
                        className="text-violet-700 font-semibold hover:underline"
                    >
                        Đăng nhập
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
