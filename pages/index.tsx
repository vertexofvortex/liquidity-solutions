import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { CenterBlock, ModalWindow } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { useModalWindow } from "@/context/ModalWindowContext";

export default function Home() {
  const { isOpen } = useModalWindow();
  
  return (
    <>
      <main>
        <CenterBlock />
      </main>
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ModalWindow />
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  )
}