import type { NextPage } from "next";
import styles from "./u-s-e-form.module.css";

type USEFormType = {
  image55?: string;
  image51?: string;
  image52?: string;
  image511?: string;
  image29?: string;
  vuesaxboldheart?: string;
};

const USEForm: NextPage<USEFormType> = ({
  image55,
  image51,
  image52,
  image511,
  image29,
  vuesaxboldheart,
}) => {
  return (
    <div className={styles.favorit}>
      <div className={styles.image55Wrapper}>
        <img className={styles.image55Icon} alt="" src={image55} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.image51Wrapper}>
          <img className={styles.image51Icon} alt="" src={image51} />
        </div>
        <div className={styles.image51Wrapper}>
          <img className={styles.image51Icon} alt="" src={image52} />
        </div>
        <div className={styles.image51Wrapper}>
          <img className={styles.image51Icon} alt="" src={image511} />
        </div>
      </div>
      <div className={styles.profileParent}>
        <div className={styles.profile}>
          <img className={styles.image29Icon} alt="" src={image29} />
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
      <button className={styles.like}>
        <img
          className={styles.vuesaxboldheartIcon}
          alt=""
          src={vuesaxboldheart}
        />
        <div className={styles.div}>82</div>
      </button>
    </div>
  );
};

export default USEForm;
