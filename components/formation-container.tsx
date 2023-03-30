import type { NextPage } from "next";
import styles from "./formation-container.module.css";

const FormationContainer: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.formationOfUseParent}>
          <div className={styles.formationOfUse}>Formation of USE</div>
          <img className={styles.image29Icon} alt="" src="/image-295@2x.png" />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <p className={styles.iFeelLike}>
                I feel like formation of United States of
              </p>
              <p className={styles.iFeelLike}>
                {" "}
                Europe led by Germany is needed...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default FormationContainer;
