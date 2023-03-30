import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./favorit-form-container.module.css";

type FavoritFormContainerType = {
  image50?: string;
  image51?: string;
  image52?: string;
  image511?: string;
  image29?: string;
  vuesaxboldheart?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const FavoritFormContainer: NextPage<FavoritFormContainerType> = ({
  image50,
  image51,
  image52,
  image511,
  image29,
  vuesaxboldheart,
  propTop,
  propLeft,
}) => {
  const image50IconStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.favorit}>
      <div className={styles.image50Wrapper}>
        <img
          className={styles.image50Icon}
          alt=""
          src={image50}
          style={image50IconStyle}
        />
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

export default FavoritFormContainer;
