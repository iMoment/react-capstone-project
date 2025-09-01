import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = (props) => {
  const { children, isOpen, onCloseClick } = props;
  const backgroundDivRef = useRef();

  if (!isOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <div
        ref={backgroundDivRef}
        className="fixed left-0 top-0 flex h-full w-full items-start justify-end bg-black/30 font-lato backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === backgroundDivRef.current) {
            onCloseClick();
          }
        }}
      >
        <button className="absolute right-0 top-0 p-4" onClick={onCloseClick}>
          <i className="fa-regular fa-circle-xmark text-4xl text-emerald-50" />
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
