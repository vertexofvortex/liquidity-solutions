import styles from "./CenterBlock.module.scss"; 
import Image from "next/image";

export function CenterBlock() {
  return (
    <div className={styles.centerBlock}>
      <div className={styles.logo}>
        <Image src={"/logo.svg"} alt={""} />
      </div>
      <div className={styles.description}>

      </div>
      <div className={styles.button}>

      </div>
    </div>
  )
}