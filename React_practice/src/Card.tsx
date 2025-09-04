import "./index.css";
import GoogleLogo from "./assets/google.png";
import AppleLogo from "./assets/apple.png";

function Card() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-b from-[#082711e4] via-[#062716] to-[#020f08] h-170 w-75">
        <p className="text-white/90 flex justify-center items-center mt-14 ">
          NordVPN
        </p>
        <p className="text-3xl font-semibold text-white/90 flex justify-center items-center mt-14">
          Hi There!
        </p>
        <small className="text-white/60 flex justify-center items-center mt-3">
          Please enter required details.
        </small>
        <div className="flex justify-evenly w-full mt-7">
          <button className="px-6 py-2 bg-white/30 text-black flex rounded-full shadow hover:bg-white/40 transition">
            <img src={GoogleLogo} alt="Google logo" className="w-5 h-5" />
            <span className="ml-1">Google</span>
          </button>
          <button className="px-6 py-2 bg-white/30 text-black flex rounded-full shadow hover:bg-white/40 transition">
            <img src={AppleLogo} alt="apple logo" className="w-5 h-5" />
            <span className="ml-1">Apple</span>
        </button>

        </div>
        <p className="flex justify-center items-center text-white/60 mt-3">
          Or
        </p>
        <div className="flex flex-col items-center mt-3 space-y-3">
          <button className=" mt-3 px-38 py-2 pl-3 bg-white/20 text-black/60 rounded-full shadow hover:bg-white/30 transition">
            Email address
          </button>
          <button className="px-46 py-2 pl-3 bg-white/30 text-black/60 rounded-full shadow hover:bg-white/30 transition mt-3">
            Password
          </button>
        </div>
        <small className="flex justify-end text-white/90 mt-2 mr-4">
          Forgot Password?
        </small>
        <button className="w-65 py-2 ml-5 bg-[#39fcce] text-black/90 rounded-full shadow hover:bg-[#] transition mt-3 flex justify-center items-center">
          Log in
        </button>

        <small className="text-white/65 flex justify-center items-center mt-3">
          Create an account?
          <small className="ml-1 text-white/90"> Sign Up</small>
        </small>
        <div className="text-white/90 flex justify-center items-center mt-19 space-x-0.5">
          <small className="underline decoration-white">
            Terms and Service|
          </small>
          <small className="underline decoration-white">Privacy Policy</small>
        </div>
      </div>
    </div>
  );
}
export default Card;