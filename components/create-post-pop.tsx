import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MintNftContainer from "./mint-nft-container";
import PostSuccessPop from "./post-success-pop";
import PortalPopup from "./portal-popup";
import PostFormSelects from "./post-form-selects";
import { useRouter } from "next/router";
import styles from "./create-post-pop.module.css";

type CreatePostPopType = {
  onClose?: () => void;
};

const CreatePostPop: NextPage<CreatePostPopType> = ({ onClose }) => {
  const [isPostSuccessPopPopupOpen, setPostSuccessPopPopupOpen] =
    useState(false);
  const router = useRouter();

  const openPostSuccessPopPopup = useCallback(() => {
    setPostSuccessPopPopupOpen(true);
  }, []);

  const closePostSuccessPopPopup = useCallback(() => {
    setPostSuccessPopPopupOpen(false);
  }, []);

  const onTradeClick = useCallback(() => {
    router.push("/F$237:4335$");
  }, [router]);

  return (
    <>
      <div className={styles.createpostpop}>
        <div className={styles.sectionhomepage}>
          <MintNftContainer />
          <button
            className={styles.postButton}
            autoFocus
            onClick={openPostSuccessPopPopup}
          >
            <div className={styles.text}>POST</div>
            <div className={styles.text}>POST</div>
          </button>
          <PostFormSelects />
          <nav className={styles.navbar}>
            <div className={styles.timefeedLowResolutionLogoBParent}>
              <button className={styles.timefeedLowResolutionLogoB} />
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
                <button className={styles.explore}>Explore</button>
                <button className={styles.explore}>Earn</button>
                <button className={styles.explore} onClick={onTradeClick}>
                  Trade
                </button>
                <button className={styles.explore}>Post</button>
              </div>
              <div className={styles.icon}>
                <img
                  className={styles.accountBalanceWalletBlack2Icon}
                  alt=""
                  src="/account-circle-black-24dp-2-12.svg"
                />
                <img
                  className={styles.accountBalanceWalletBlack2Icon}
                  alt=""
                  src="/account-balance-wallet-black-24dp-5-12.svg"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
      {isPostSuccessPopPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePostSuccessPopPopup}
        >
          <PostSuccessPop onClose={closePostSuccessPopPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default CreatePostPop;
