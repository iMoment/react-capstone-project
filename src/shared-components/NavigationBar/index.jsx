import { useContext } from "react";
import SessionContext from "contexts/SessionContext";

const NavigationBar = () => {
  const { username } = useContext(SessionContext);
  return (
    <nav className="flex justify-center bg-emerald-800 font-lato">
      <div className="flex w-full max-w-5xl items-center justify-between px-8 py-2">
        <div className="flex flex-col items-center font-playfair text-2xl text-white">
          <img
            className="w-10"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
          />
          Rica's Plants
        </div>
        <div className="">
          <button className="flex items-center text-emerald-200">
            <i className="fa-solid fa-user mr-2 text-xl"></i>
            {username}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
