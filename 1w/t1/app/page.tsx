import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { headers } from "next/headers";

// This setionis for importing the image 
import booty from "../public/b.gif";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const headersList = headers();

  return (
    <main className={styles.main}>
      <h1>Sup Brah</h1>
      <Link href="/about">Go to About page</Link>
      <h2> Nose in her booty </h2>
      <Image
        src={booty}
      />
      ;
      <h3>
        <code>This is the main </code>
      </h3>{" "}
      <h4>
        <i> Drink her sweet woman juice </i>
      </h4>
    </main>
  );
}
