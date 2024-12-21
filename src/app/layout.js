import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "KnockOnce - Simplifying Communication, Instantly",
  description: "Stay connected effortlessly with KnockOnce—your privacy-first communication platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
