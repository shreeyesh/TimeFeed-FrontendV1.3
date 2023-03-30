import type { NextPage } from "next";
import styles from "./auctions-wrapper.module.css";

type AuctionsWrapperType = {
  image63?: string;
  rectangle3320?: string;
  iconlyBoldGraph?: string;
  group34289?: string;
};

const AuctionsWrapper: NextPage<AuctionsWrapperType> = ({
  image63,
  rectangle3320,
  iconlyBoldGraph,
  group34289,
}) => {
  return (
    <div className={styles.auctions}>
      <div className={styles.auctions1}>
        <img className={styles.image63Icon} alt="" src={image63} />
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
          </div>
          <div className={styles.profile1}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-296@2x.png"
            />
          </div>
          <div className={styles.profile2}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-297@2x.png"
            />
          </div>
          <div className={styles.profile3}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-293@2x.png"
            />
          </div>
          <div className={styles.profile4}>
            <img
              className={styles.image29Icon}
              alt=""
              src="/image-294@2x.png"
            />
          </div>
          <img
            className={styles.verified2Icon}
            alt=""
            src="/verified-2@2x.png"
          />
        </div>
        <div className={styles.rectangleParent}>
          <img className={styles.groupChild} alt="" src={rectangle3320} />
          <div className={styles.iconlyboldgraphParent}>
            <img
              className={styles.iconlyboldgraph}
              alt=""
              src={iconlyBoldGraph}
            />
            <div className={styles.div}>05:38:40</div>
          </div>
        </div>
        <img className={styles.auctionsChild} alt="" src={group34289} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.formationOfUseParent}>
            <div className={styles.formationOfUse}>Formation of USE</div>
            <img
              className={styles.image29Icon5}
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
    </div>
  );
};

export default AuctionsWrapper;
