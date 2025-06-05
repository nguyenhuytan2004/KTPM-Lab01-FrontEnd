import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Showtimes from "./pages/Showtimes";
import Seats from "./pages/seats";

const App = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("username");
        setUsername("");
        navigate("/login");
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home username={username} handleLogout={handleLogout} />
                }
            />
            <Route path="/movies/:movieId/showtimes" element={<Showtimes />} />
            <Route
                path="/login"
                element={<Login setUsername={setUsername} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/seats" element={<Seats />} />
        </Routes>
    );
};

export default App;
