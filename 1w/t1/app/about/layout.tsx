import React from "react";
import styles from "./styles.module.css";

export const metadata = {
  title: "AboutLiq",
  description: "AboutStink",
  colorScheme: "dark",
  creator: "bootysucker",
  type: "womanstinkfetish",
  bookmarks: ["NoseInHerBooty"],
  category: "PantyFetish",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About NavBar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
