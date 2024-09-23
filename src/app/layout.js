import { Open_Sans } from "next/font/google";
import "app/style.css";

export const metadata = {
  title: "NotesWiki",
};

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={opensans.className}>
      <body>{children}</body>
    </html>
  );
}
