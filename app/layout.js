import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Web dev 2 demos",
  description: "demos for web dev 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
