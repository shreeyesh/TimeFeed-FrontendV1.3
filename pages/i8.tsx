import type { NextPage } from "next";
import PostCard from "../components/post-card";
import styles from "./i8.module.css";

const I8: NextPage = () => {
  return (
    <div className={styles.i8}>
      <div className={styles.i81}>
        <div className={styles.property1default}>
          <PostCard
            image58="/image-58@2x.png"
            vuesaxboldheart="/vuesaxboldheart.svg"
            vuesaxlinearheartSlash="/vuesaxlinearheartslash.svg"
            rectangle3320="/TransperentText@2x.png"
            path33909="/path-33909.svg"
          />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.formationOfUseParent}>
                <div className={styles.formationOfUse}>Formation of USE</div>
                <img
                  className={styles.image29Icon}
                  alt=""
                  src="/image-295@2x.png"
                />
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
          <div className={styles.timeGained}>Time Gained</div>
          <div className={styles.div}>1:28</div>
        </div>
      </div>
    </div>
  );
};

export default I8;
