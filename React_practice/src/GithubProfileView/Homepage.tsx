import { useState } from "react";
import { Link } from "react-router-dom";

export function Homepage() {
  const [userName, setUserName] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500 px-4">
      <div className="flex gap-4">
        <input
          type="search"
          placeholder="Enter github username"
          className="bg-white/90 rounded-xl p-4 border-none outline-none px-8 w-80 text-black max-w-full"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Link to={"/users/" + userName}>
          <button
            className="bg-blue-700 rounded-xl p-4 text-sm px-8 hover:bg-blue-800 disabled:opacity-50"
            disabled={!userName}
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}