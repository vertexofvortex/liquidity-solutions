import styles from "./CenterBlock.module.scss"; 
import { Inter, Space_Grotesk } from "@next/font/google";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";

const inter = Inter({ subsets: [ "latin" ] });
const space_grotesk = Space_Grotesk({ subsets: [ "latin" ] });

export function CenterBlock() {
  const [ isModalActive, setIsModalActive ] = useState<boolean>(false)

  return (
    <>
      <div className={styles.centerBlock}>
        <div className={styles.logo}>
          <img src={"/logo.svg"} alt={""} />
        </div>
        <div className={`${styles.description} ${inter.className}`}>
          <p>Our company is dedicated to delivering exceptional service and execution quality to our clients, leveraging our deep expertise and cutting-edge technology to help them achieve their trading goals. We work closely with our clients to understand their unique needs and develop tailored liquidity solutions that meet their specific requirements.</p>

          <p>Our team of experienced professionals has a proven track record of success in the financial markets, and we are committed to staying at the forefront of industry developments and trends. We pride ourselves on our agility, responsiveness, and ability to innovate, and we are always striving to improve and enhance our offerings to better serve our clients.</p>
        </div>
        <div className={`${styles.button} ${space_grotesk.className}`}>
          <button
            onClick={() => setIsModalActive(true)}
          >
            Contact us
          </button>
        </div>
      </div>
      <AnimatePresence>
        {
          isModalActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ModalWindow
                buttonAction={() => setIsModalActive(false)}
              />
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  )
}