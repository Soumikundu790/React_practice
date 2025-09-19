import { useEffect, useState } from "react";

type Weather = {
  main: {
    temp: number;
  };
};

const apiKey = "4a0f19de7d89a5c92cfa60cda8afee0a";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [city, setCity] = useState("Arambagh");
  const [error, setError] = useState<string | null>(null);

  async function getData(cityName: string) {
    if (!cityName.trim()) return;

    setError(null);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      cityName
    )}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
      setWeatherData(null);
      setError("City not found or API error");
      return;
    }

    const data = await response.json();
    setWeatherData(data);
  }

  useEffect(() => {
    getData(city);
  }, [city]);

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col justify-center items-center gap-10 text-white p-4">
      <input
        type="text"
        placeholder="Enter city name"
        className="bg-transparent border border-white text-white text-3xl text-center font-semibold opacity-60 px-4 py-2 rounded"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && !error && (
        <p className="text-9xl font-bold opacity-60">
          {weatherData.main.temp.toFixed(0)}°C
        </p>
      )}
    </div>
  );
}