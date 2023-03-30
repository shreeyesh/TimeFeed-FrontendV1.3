import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./likes-container.module.css";

type LikesContainerType = {
  itemId?: string;
  itemStatus?: string;
  likesCount?: string;

  /** Style props */
  propObjectFit?: Property.ObjectFit;
  propTextAlign?: Property.TextAlign;
};

const LikesContainer: NextPage<LikesContainerType> = ({
  itemId,
  itemStatus,
  likesCount,
  propObjectFit,
  propTextAlign,
}) => {
  const lineIconStyle: CSS.Properties = useMemo(() => {
    return {
      objectFit: propObjectFit,
    };
  }, [propObjectFit]);

  const labelStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.div}>
      <img
        className={styles.lineIcon}
        alt=""
        src={itemId}
        style={lineIconStyle}
      />
      <div className={styles.details}>
        <b className={styles.number}>{itemStatus}</b>
        <div className={styles.label} style={labelStyle}>
          {likesCount}
        </div>
      </div>
    </div>
  );
};

export default LikesContainer;
