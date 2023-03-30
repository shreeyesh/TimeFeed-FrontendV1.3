import type { NextPage } from "next";
import styles from "./auctions-frame.module.css";

type AuctionsFrameType = {
  imageDimensions?: string;
  imageIds?: string;
  imageDimensionIds?: string;
  imageSizeIds?: string;
};

const AuctionsFrame: NextPage<AuctionsFrameType> = ({
  imageDimensions,
  imageIds,
  imageDimensionIds,
  imageSizeIds,
}) => {
  return (
    <div className={styles.auctions}>
      <img className={styles.image56Icon} alt="" src={imageDimensions} />
      <div className={styles.profileParent}>
        <div className={styles.profile}>
          <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
        </div>
        <div className={styles.profile1}>
          <img className={styles.image29Icon} alt="" src="/image-296@2x.png" />
        </div>
        <div className={styles.profile2}>
          <img className={styles.image29Icon} alt="" src="/image-297@2x.png" />
        </div>
        <div className={styles.profile3}>
          <img className={styles.image29Icon} alt="" src="/image-293@2x.png" />
        </div>
        <div className={styles.profile4}>
          <img className={styles.image29Icon} alt="" src="/image-294@2x.png" />
        </div>
        <img className={styles.verified2Icon} alt="" src="/verified-2@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.groupChild} alt="" src={imageIds} />
        <div className={styles.iconlyboldgraphParent}>
          <img
            className={styles.iconlyboldgraph}
            alt=""
            src={imageDimensionIds}
          />
          <div className={styles.div}>05:38:40</div>
        </div>
      </div>
      <img className={styles.auctionsChild} alt="" src={imageSizeIds} />
    </div>
  );
};

export default AuctionsFrame;
