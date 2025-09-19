import "./index.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import  WelcomeSection from "./WelcomeSection";
import ScheduleSection from "./ScheduleSection";
import EventModalSection from "./EventModalSection";

function HomePage() {
    return (
        <div className="bg-zinc-900 min-h-dvh text-white flex items-center justify-center flex-col gap-10">
            <div className="flex flex-col gap-6 items-center w-64">
                <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>

                <Link
                    className="bg-blue-900 text-white font-semibold px-12 py-2 rounded text-sm hover:bg-blue-600 w-full text-center"
                    to="/WelcomeSection"
                >
                    Welcome Section
                </Link>

                   <Link
                    className="bg-blue-900 text-white font-semibold px-12 py-2 rounded text-sm hover:bg-blue-600 w-full text-center"
                    to="/ScheduleSection"
                >
                    Schedule Section
                </Link>
                
                <Link
                    className="bg-blue-900 text-white font-semibold px-12 py-2 rounded text-sm hover:bg-blue-600 w-full text-center"
                    to="/EventModalSection"
                >
                    Event Modal Section
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
                <Route path="/WelcomeSection" element={<WelcomeSection />} />
                <Route path="/ScheduleSection" element={<ScheduleSection />} />
                <Route path="/EventModalSection" element={<EventModalSection />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;
