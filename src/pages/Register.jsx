import React from "react";

const Register = () => {
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
                            htmlFor="name"
                        >
                            Họ và tên
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Nhập họ và tên"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 font-semibold mb-1"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            placeholder="Nhập email"
                            required
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
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 bg-violet-700 hover:bg-violet-800 text-white font-semibold py-2 rounded-full shadow transition duration-200"
                    >
                        Đăng ký
                    </button>
                </form>
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
