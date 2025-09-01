import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";

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
        className="fixed left-0 top-0 z-20 flex h-full w-full items-start justify-end bg-black/30 font-lato backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === backgroundDivRef.current) {
            onCloseClick();
          }
        }}
      >
        <motion.button
          className="absolute right-0 top-0 p-4"
          onClick={onCloseClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <i className="fa-regular fa-circle-xmark text-4xl text-emerald-50" />
        </motion.button>
        {children}
      </div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
