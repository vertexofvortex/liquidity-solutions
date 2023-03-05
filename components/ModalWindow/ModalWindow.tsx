import { Inter, Space_Grotesk } from "@next/font/google";
import styles from "./ModalWindow.module.scss";

const inter = Inter({ subsets: [ "latin" ] });
const space_grotesk = Space_Grotesk({ subsets: [ "latin" ] });

interface Props {
  buttonAction: Function;
}

export function ModalWindow({
  buttonAction,
}: Props) {
  return (
    <div className={styles.modalWindowContainer}>
      <div className={styles.modalWindow}>
        <input 
          className={inter.className}
          placeholder={"Name"}
        />
        <input 
          className={inter.className}
          placeholder={"E-mail"}
        />
        <textarea rows={13}
          className={inter.className}
          placeholder={"Your message"}
        />
        <button
          className={space_grotesk.className}
          onClick={() => buttonAction()}
        >
          Send
        </button>
      </div>
    </div>
  )
}