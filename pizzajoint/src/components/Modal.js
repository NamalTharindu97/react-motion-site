import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const model = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: "200px",
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ showModel, setShowModel }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModel && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={model}>
            <p>want to make another pizza ?</p>
            <Link to="/">
              <button onClick={() => setShowModel(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
