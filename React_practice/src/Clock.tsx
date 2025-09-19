import "./index.css";
import clock from "./assets/clock.png";

function Clock()
{
    return(
        <div className="h-170 w-90 bg-black text-white flex flex-col items-center space-y-5">
      <div className="h-45 w-55 mt-20 flex flex-col">
        <img src={clock} alt="clock" />
      </div>

      <div className="flex flex-col items-start w-full px-7">
        <h1 className="text-sm font-semibold mt-7 bg-gradient-to-r from-[#71dbc3e4] via-[#248f97] to-[#1b5782] bg-clip-text text-transparent">
          Clock
        </h1>
      </div>

       <div>
         <p className="flex text-center mt-5 mx-3">
            We transform service-based e-commerce allowing time sellers to focus on service delivery.
          </p>
        </div>

        <div className="text-center mt-10">
        <button className="relative p-[2px] rounded-full bg-gradient-to-r from-[#71dbc3e4] via-[#248f97] to-[#1b5782]">
         <span className="block rounded-full bg-black text-white px-6 py-2">
            Explore
        </span>
       </button>
      </div>

      </div>
    );
}
export default Clock;