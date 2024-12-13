import React from "react";
import styles from "./MainLayout.module.css";
import Header from "./_components/Header/Header";
import MainFooter from "./_components/MainFooter/MainFooter";

const MainLoyout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.ui_container}>
        <div className={styles.headerWrapper}>
          <Header />
        </div>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.mainWrapper}>{children}</div>
      </div>

      <div className={styles.ui_container}>
        <div className={styles.footerWrapper}>
          <MainFooter />
        </div>
      </div>
    </div>
  );
};

export default MainLoyout;
