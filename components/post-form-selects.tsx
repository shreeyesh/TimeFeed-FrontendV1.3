import type { NextPage } from "next";
import styles from "./post-form-selects.module.css";

const PostFormSelects: NextPage = () => {
  return (
    <div className={styles.postform}>
      <div className={styles.subHeading}>POST</div>
      <select className={styles.categorydropdown}>
        <option value="1">Art</option>
        <option value="2">Business</option>
        <option value="3">Comedy</option>
        <option value="4">Politics</option>
        <option value="5">Movies</option>
        <option value="6">Songs</option>
        <option value="7">Travel</option>
      </select>
      <input className={styles.headingbox} type="text" placeholder="Heading" />
      <textarea className={styles.textbox} placeholder="Text" />
    </div>
  );
};

export default PostFormSelects;
