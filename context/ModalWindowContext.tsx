import { createContext, ReactNode, useContext, useState } from "react";

interface IModalWindowContext {
  isOpen: boolean;
  isSent: boolean;
  open: () => void;
  close: () => void;
  send: (
    name: string,
    email: string,
    message: string,
  ) => void;
}

const modalWindowContextDefaultValues: IModalWindowContext = {
  isOpen: false,
  isSent: false,
  open: () => {},
  close: () => {},
  send: () => {},
}

const ModalWindowContext = createContext<IModalWindowContext>(
  modalWindowContextDefaultValues
);

export function useModalWindow() {
  return useContext(ModalWindowContext);
}

interface Props {
  children: ReactNode;
}

export function ModalWindowProvider({ children }: Props) {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const [ isSent, setIsSent ] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const send = async (
    name: string,
    email: string,
    message: string
  ) => {
    if (isSent) {
      setIsOpen(false);

      return;
    }

    const res = await fetch(
      "/api/sendMessage",
      { 
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      },
    );

    setIsSent(true);
    setIsOpen(false);
  };

  const value = {
    isOpen,
    isSent,
    open,
    close,
    send,
  };

  return (
    <ModalWindowContext.Provider
      value={value}
    >
      {children}
    </ModalWindowContext.Provider>
  );
}