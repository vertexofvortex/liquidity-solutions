import { Inter, Space_Grotesk } from "@next/font/google";
import { useState } from "react";
import styles from "./ModalWindow.module.scss";

const inter = Inter({ subsets: [ "latin" ] });
const space_grotesk = Space_Grotesk({ subsets: [ "latin" ] });

interface Props {
  buttonAction?: Function;
}

export function ModalWindow({
  buttonAction,
}: Props) {
  const [ nameState, setNameState ] = useState<string>("");
  const [ emailState, setEmailState ] = useState<string>("");
  const [ messageState, setMessageState ] = useState<string>("");
  
  async function sendMessage(
    name: string,
    email: string,
    message: string,
  ) {
    const res = await fetch(
      "/api/sendMessage",
      { 
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      },
    );

    console.log(await res.json());
  }

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
        <button
          className={space_grotesk.className}
          onClick={() => sendMessage(nameState, emailState, messageState)}
        >
          Send
        </button>
      </div>
    </div>
  )
}