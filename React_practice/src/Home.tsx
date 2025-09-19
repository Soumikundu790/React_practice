import "./index.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Cube from "./Cube";
import Database from "./database";
import Clock from "./Clock";

function HomePage() {
    return (
        <div className="bg-zinc-900 min-h-dvh text-white flex items-center justify-center flex-col gap-10">
            <div className="flex flex-col gap-6 items-center w-64">
                <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>

                {/* Cube Button */}
                <Link
                    className="bg-blue-500 text-white font-semibold px-12 py-2 rounded text-sm hover:bg-blue-600 w-full text-center"
                    to="/cube"
                >
                    Cube
                </Link>

                {/* Clock Button */}
                <Link
                    className="bg-blue-500 text-white font-semibold px-12 py-2 rounded text-sm hover:bg-blue-600 w-full text-center"
                    to="/clock"
                >
                    Clock
                </Link>

                {/* Database Button */}
                <Link
                    className="bg-blue-500 text-white font-semibold px-12 py-2 rounded text-sm hover:bg-blue-600 w-full text-center"
                    to="/database"
                >
                    Database
                </Link>
            </div>
        </div>
    );
}

function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cube" element={<Cube />} />
                <Route path="/clock" element={<Clock />} />
                <Route path="/database" element={<Database />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;
