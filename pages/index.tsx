import Head from "next/head";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { CenterBlock } from "@/components";

const inter = Inter({ subsets: [ "latin" ] });
const space_grotesk = Space_Grotesk({ subsets: [ "latin" ] });

export default function Home() {
  return (
    <>
      <CenterBlock />
    </>
  )
}
