import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { Close } from "../Close";
import "./style.css";

interface ModalProps {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ opened, onClose, children }) => {
  return (
    <CSSTransition
      classNames={{
        enter: "modal_enter",
        enterActive: "modal_enter-active",
        enterDone: "modal_enter-done",
        exit: "modal_exit",
        exitActive: "modal_exit-active",
        exitDone: "modal_exit-done",
      }}
      in={opened}
      timeout={300}
      unmountOnExit
    >
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal--content">
          <Close onClick={onClose} />
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};
