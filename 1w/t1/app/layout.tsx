import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "BootyDribble",
  description: "BootyClappers",
  colorScheme: "dark",
  creator: "bootysucker",
  type: "womanstinkfetish",
  bookmarks: ["NoseInHerBooty"],
  category: "PantyFetish",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <nav>
          <h1>My Navingula</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
