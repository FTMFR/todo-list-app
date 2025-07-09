import React from "react";
import styles from "../styles/modules/app.module.scss";
import AppHeader from "./AppHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className={styles.app__wrapper}>
        <AppHeader />
        {children}
      </div>
    </div>
  );
}
