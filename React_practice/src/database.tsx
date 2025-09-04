import "./index.css";
import database from "./assets/database.png";

function Database()
{
    return(
        <div className="h-170 w-90 bg-black text-white flex flex-col items-center space-y-5">
      <div className="h-45 w-55 mt-20 flex flex-col">
        <img src={database} alt="database" />
      </div>
      <div className="flex flex-col items-start w-full px-7">
        <h1 className="text-sm font-semibold mt-7 bg-gradient-to-l from-[#71dbc3e4] via-[#248f97] to-[#1b5782] bg-clip-text text-transparent">
          Digital
        </h1>
        <h1 className="text-sm font-semibold mt-1 bg-gradient-to-l from-[#71dbc3e4] via-[#248f97] to-[#1b5782] bg-clip-text text-transparent">
          Assests
        </h1>
      </div>

            <div>
                <p className="flex text-center mt-2">
                    We makes it easier than ever to sell digital products like courses and files.
                </p>
            </div>

            <div className="flex text-center mt-10">
             <button className="p-px rounded-full bg-gradient-to-r from-[#71dbc3e4] via-[#248f97] to-[#1b5782]">
                   <span className="block rounded-full bg-black text-white px-6 py-2">
                           Explore
                      </span>
             </button>


            </div>
        </div>
    )
}
export default Database;