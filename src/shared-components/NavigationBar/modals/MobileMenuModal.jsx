import { useContext } from "react";
import SessionContext from "contexts/SessionContext";

const MobileMenuModal = (props) => {
  const { onCartOpenClick } = props;
  const { username, signOut } = useContext(SessionContext);
  return (
    <div className="flex flex-col items-start rounded-bl-lg bg-emerald-800 pb-6 pr-12 pt-12 text-lg text-emerald-200 shadow-md">
      <div className="px-8 py-4">
        <i className="fa-solid fa-user mr-2 text-2xl" />
        {username}
      </div>
      <button className="px-8 py-4" onClick={onCartOpenClick}>
        <i className="fa-solid fa-cart-shopping mr-2 text-2xl" />
        Cart
      </button>
      <button className="px-8 py-4" onClick={signOut}>
        <i className="fa-solid fa-arrow-right-from-bracket mr-2 text-2xl" />
        Sign out
      </button>
    </div>
  );
};

export default MobileMenuModal;
