import { useState, useContext } from "react";
import SessionContext from "contexts/SessionContext";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/ModalWrapper";
import MobileMenuModal from "./modals/MobileMenuModal";

const NavigationBar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const { username, signOut } = useContext(SessionContext);

  return (
    <>
      <nav
        className="flex justify-center bg-emerald-800 font-lato"
        onMouseLeave={() => {
          setIsUserMenuOpen(false);
        }}
      >
        <div className="flex w-full max-w-5xl items-center justify-between px-8 py-2">
          <Link to="/plants">
            <div className="relative flex flex-col items-center font-playfair text-2xl text-white">
              <img
                className="w-10"
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-md hover:bg-emerald-800/10"></div>
              Rica's Plants
            </div>
          </Link>
          <div className="hidden flex-1 justify-end sm:flex">
            <div className="relative min-w-32">
              <button
                className="flex items-center text-white hover:text-emerald-50"
                onClick={() => {
                  setIsUserMenuOpen(true);
                }}
              >
                <i className="fa-solid fa-user mr-2 text-xl"></i>
                {username}
              </button>
              {isUserMenuOpen && (
                <div className="absolute bottom-[-46px] left-0 rounded-md bg-white shadow-md">
                  <button
                    className="px-4 py-2 text-slate-500 hover:text-emerald-700"
                    onClick={signOut}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>
                    Sign out
                  </button>
                </div>
              )}
            </div>
            <button
              className="flex items-center text-white hover:text-emerald-50"
              onClick={() => setIsCartModalOpen(true)}
            >
              <i className="fa-solid fa-cart-shopping mr-2 text-xl"></i>
              Cart
            </button>
          </div>
          <button
            className="flex sm:hidden"
            onClick={() => setIsMobileModalOpen(true)}
          >
            <i className="fa-solid fa-bars text-4xl text-white hover:text-emerald-50" />
          </button>
        </div>
      </nav>
      <ModalWrapper
        isOpen={isCartModalOpen}
        onCloseClick={() => setIsCartModalOpen(false)}
      >
        <CartModal setIsCartModalOpen={setIsCartModalOpen} />
      </ModalWrapper>
      <ModalWrapper
        isOpen={isMobileModalOpen}
        onCloseClick={() => setIsMobileModalOpen(false)}
      >
        <MobileMenuModal
          onCartOpenClick={() => {
            setIsCartModalOpen(true);
            setIsMobileModalOpen(false);
          }}
          onCloseClick={() => setIsMobileModalOpen(false)}
        />
      </ModalWrapper>
    </>
  );
};

export default NavigationBar;
