import type { NextPage } from "next";
import styles from "./f-o-l-l-o-w-i-n-g-o-v-e-r-l-a-y.module.css";

type FOLLOWINGOVERLAYType = {
  onClose?: () => void;
};

const FOLLOWINGOVERLAY: NextPage<FOLLOWINGOVERLAYType> = ({ onClose }) => {
  return (
    <div className={styles.followingOverlay}>
      <div className={styles.text}>FOLLOWING</div>
    </div>
  );
};

export default FOLLOWINGOVERLAY;
