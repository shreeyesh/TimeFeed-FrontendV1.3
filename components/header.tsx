import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./header.module.css";

type HeaderType = {
  imageIds?: string;
  imageIds32x32?: string;

  /** Style props */
  navbarJustifyContent?: Property.JustifyContent;
  navbarPosition?: Property.Position;
  navbarTop?: Property.Top;
  navbarLeft?: Property.Left;

  /** Action props */
  onTimefeedLowResolutionLogoBClick?: () => void;
  onExploreClick?: () => void;
  onEarnClick?: () => void;
  onTradeClick?: () => void;
  openCreatePostPopPopup?: () => void;
};

const Header: NextPage<HeaderType> = ({
  imageIds,
  imageIds32x32,
  navbarJustifyContent,
  navbarPosition,
  navbarTop,
  navbarLeft,
  onTimefeedLowResolutionLogoBClick,
  onExploreClick,
  onEarnClick,
  onTradeClick,
  openCreatePostPopPopup,
}) => {
  const navStyle: CSS.Properties = useMemo(() => {
    return {
      justifyContent: navbarJustifyContent,
      position: navbarPosition,
      top: navbarTop,
      left: navbarLeft,
    };
  }, [navbarJustifyContent, navbarPosition, navbarTop, navbarLeft]);

  return (
    <div className={styles.nav} style={navStyle}>
      <nav className={styles.navbar}>
        <div className={styles.timefeedLowResolutionLogoBParent}>
          <button
            className={styles.timefeedLowResolutionLogoB}
            onClick={onTimefeedLowResolutionLogoBClick}
          />
          <input
            className={styles.frameChild}
            type="text"
            placeholder="Search posts, topics and accounts"
          />
          <button className={styles.darkMode}>
            <img
              className={styles.darkModeChild}
              alt=""
              src="/ellipse-11.svg"
            />
          </button>
          <div className={styles.menus}>
            <button className={styles.explore} onClick={onExploreClick}>
              Explore
            </button>
            <button className={styles.explore} onClick={onEarnClick}>
              Earn
            </button>
            <button className={styles.explore} onClick={onTradeClick}>
              Trade
            </button>
            <button className={styles.explore} onClick={openCreatePostPopPopup}>
              Post
            </button>
          </div>
          <div className={styles.icon}>
            <img
              className={styles.accountBalanceWalletBlack2Icon}
              alt=""
              src={imageIds}
            />
            <img
              className={styles.accountBalanceWalletBlack2Icon}
              alt=""
              src={imageIds32x32}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
