import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/Providers";
import styles from "./MainLayout.module.css";
import Header from "./(main)/_components/Header/Header";
import MainFooter from "./(main)/_components/MainFooter/MainFooter";

export const metadata: Metadata = {
  title: "Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={` no-tailwindcss`}>
      <div className={styles.layoutWrapper}>
      <div className={styles.ui_container}>
        <div className={styles.headerWrapper}>
          <Header/>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.mainWrapper}>
          <Providers>{children}</Providers>
        </div>
      </div>

      <div className={styles.ui_container}>
        <div className={styles.footerWrapper}>
          <MainFooter />
        </div>
      </div>
    </div>
      </body>
    </html>
  );
}
