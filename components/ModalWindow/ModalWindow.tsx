import { useModalWindow } from "@/context/ModalWindowContext";
import { Inter, Space_Grotesk } from "@next/font/google";
import { useState } from "react";
import styles from "./ModalWindow.module.scss";

const inter = Inter({ subsets: [ "latin" ] });
const space_grotesk = Space_Grotesk({ subsets: [ "latin" ] });

export function ModalWindow() {
  const [ nameState, setNameState ] = useState<string>("");
  const [ emailState, setEmailState ] = useState<string>("");
  const [ messageState, setMessageState ] = useState<string>("");

  const { isOpen, open, close, isSent, send } = useModalWindow();

  return (
    <div className={styles.modalWindowContainer}>
      <div className={styles.modalWindow}>
        <input 
          className={inter.className}
          placeholder={"Name"}
          onChange={(e) => setNameState(e.target.value)}
        />
        <input 
          className={inter.className}
          placeholder={"E-mail"}
          onChange={(e) => setEmailState(e.target.value)}
        />
        <textarea rows={13}
          className={inter.className}
          placeholder={"Your message"}
          onChange={(e) => setMessageState(e.target.value)}
        />
        <div className={styles.buttons}>
          <button
            className={space_grotesk.className}
            onClick={() => send(nameState, emailState, messageState)}
          >
            Send
          </button>
          <button
            className={space_grotesk.className}
            onClick={() => close()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}