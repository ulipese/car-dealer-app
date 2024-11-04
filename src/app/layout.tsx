import type { Metadata } from "next";
import "./globals.css";
import { AppLayout } from "./components/AppLayout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "UrCar - your favorite car dealer app",
  description: "Created by @ulipese, as a test for DevelopsToday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}


