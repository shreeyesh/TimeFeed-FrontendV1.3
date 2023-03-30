import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./auction-container.module.css";

type AuctionContainerType = {
  image57?: string;
  group34290?: string;
  rectangle3320?: string;

  /** Style props */
  propBorderRadius?: Property.BorderRadius;
};

const AuctionContainer: NextPage<AuctionContainerType> = ({
  image57,
  group34290,
  rectangle3320,
  propBorderRadius,
}) => {
  const image57IconStyle: CSS.Properties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div className={styles.auctions}>
      <img
        className={styles.image57Icon}
        alt=""
        src={image57}
        style={image57IconStyle}
      />
      <img className={styles.auctionsChild} alt="" src={group34290} />
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
        <img className={styles.groupChild} alt="" src={rectangle3320} />
        <div className={styles.iconlyboldgraphParent}>
          <img
            className={styles.iconlyboldgraph}
            alt=""
            src="/iconlyboldgraph.svg"
          />
          <div className={styles.div}>05:38:40</div>
        </div>
      </div>
    </div>
  );
};

export default AuctionContainer;
