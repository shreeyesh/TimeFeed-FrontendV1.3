import type { NextPage } from "next";
import styles from "./withdraw-container.module.css";

const WithdrawContainer: NextPage = () => {
  return (
    <div className={styles.withdrawcta}>
      <div className={styles.withdrawTimeWrapper}>
        <b className={styles.withdrawTime}>Withdraw $Time</b>
      </div>
      <div className={styles.joinOurMailing}>
        Enter the amount of $TIME you want to withdraw, withdrawal of 1 $TIME
        reduces one minute from your post.
      </div>
      <button className={styles.button} autoFocus>
        <button className={styles.withdraw}>Withdraw</button>
      </button>
    </div>
  );
};

export default WithdrawContainer;
