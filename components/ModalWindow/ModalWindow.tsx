import { useModalWindow } from "@/context/ModalWindowContext";
import { Inter, Space_Grotesk } from "@next/font/google";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./ModalWindow.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: [ "latin" ] });
const space_grotesk = Space_Grotesk({ subsets: [ "latin" ] });

interface IForm {
  name: string;
  email: string;
  message: string;
}

export function ModalWindow() {
  const { close, send } = useModalWindow();

  const validationSchema = object({
    name: string()
      .required("Specify your name")
      .max(36, "Your name cannot be longer than 36 characters"),
    email: string()
      .required("Specify your e-mail address")
      .max(50, "E-mail cannot be longer than 50 characters")
      .matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "E-mail must be valid"),
    message: string()
      .required("Fill the message field")
      .max(255, "Please, fit your message within 255 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(validationSchema)
  });

  return (
    <div className={styles.modalWindowContainer}>
      <div className={styles.modalWindow}>
        <input 
          className={inter.className}
          placeholder={"Name"}
          {...register("name")}
        />
        <input 
          className={inter.className}
          placeholder={"E-mail"}
          {...register("email")}
        />
        <textarea rows={13}
          className={inter.className}
          placeholder={"Your message"}
          {...register("message")}
        />
        <div className={`${styles.errors} ${inter.className}`}>
          <AnimatePresence>
            {Object.values(errors).map((item, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <img src="/error.svg" />
                {item.message}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className={styles.buttons}>
          <button
            className={space_grotesk.className}
            onClick={handleSubmit(
              (data) => send(data.name, data.email, data.message),
              (error) => console.log(error)
            )}
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