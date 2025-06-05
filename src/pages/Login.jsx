import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsername }) => {
    const [inputUsername, setInputUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://ktpm-lab01-userservice.onrender.com/api/user/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: inputUsername,
                        password: password,
                    }),
                },
            );
            const data = await response.text();
            if (response.ok) {
                localStorage.setItem("username", inputUsername);
                setUsername(inputUsername);
                navigate("/");
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
                    Đăng nhập
                </h2>
                <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label
                            className="block text-gray-700 font-semibold mb-1"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Nhập tên đăng nhập"
                            required
                            value={inputUsername}
                            onChange={(e) => setInputUsername(e.target.value)}
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
                    <button
                        type="submit"
                        className="mt-2 bg-violet-700 hover:bg-violet-800 text-white font-semibold py-2 rounded-full shadow transition duration-200 cursor-pointer"
                    >
                        Đăng nhập
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-red-600 font-semibold">
                        {message}
                    </div>
                )}
                <div className="mt-4 text-sm text-gray-600">
                    Chưa có tài khoản?{" "}
                    <a
                        href="/register"
                        className="text-violet-700 font-semibold hover:underline"
                    >
                        Đăng ký
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
