import type { NextPage } from "next";
import styles from "./form-container.module.css";

const FormContainer: NextPage = () => {
  return (
    <div className={styles.favorit}>
      <div className={styles.image56Wrapper}>
        <img className={styles.image56Icon} alt="" src="/image-561@2x.png" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.image52Wrapper}>
          <img
            className={styles.image52Icon}
            alt=""
            src="/frame-34340@2x.png"
          />
        </div>
        <div className={styles.image52Wrapper}>
          <img
            className={styles.image52Icon}
            alt=""
            src="/frame-343391@2x.png"
          />
        </div>
        <div className={styles.image52Wrapper}>
          <img
            className={styles.image52Icon}
            alt=""
            src="/frame-34341@2x.png"
          />
        </div>
      </div>
      <div className={styles.profileParent}>
        <div className={styles.profile}>
          <img className={styles.image29Icon} alt="" src="/image-298@2x.png" />
        </div>
        <img
          className={styles.verified2Icon}
          alt=""
          src="/verified-22@2x.png"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.r66VoldWrapper}>
          <div className={styles.r66Vold}>Formation of USE</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>Mark Zuckerberg</div>
          </div>
        </div>
      </div>
      <div className={styles.like}>
        <div className={styles.vuesaxboldheart}>
          <div className={styles.vuesaxboldheart1}>
            <img
              className={styles.heartIcon}
              alt=""
              src="/vuesaxboldheart3.svg"
            />
          </div>
        </div>
        <div className={styles.div}>82</div>
      </div>
    </div>
  );
};

export default FormContainer;
