import type { NextPage } from "next";
import { useCallback } from "react";
import OpinionExplorer from "../components/opinion-explorer";
import HallOfFameContainer from "../components/hall-of-fame-container";
import FeaturedPostsContainer from "../components/featured-posts-container";
import TrendingPostsSection from "../components/trending-posts-section";
import TrendingCreatorsContainer from "../components/trending-creators-container";
import WithdrawSection from "../components/withdraw-section";
import MobileCTAContainer from "../components/mobile-c-t-a-container";
import styles from "./home-page1.module.css";

const HomePage1: NextPage = () => {
  const onDownloadBadgeAppStoreBadClick = useCallback(() => {
    window.open(
      "https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclid=CjwKCAiA8OmdBhAgEiwAShr40_H9ceIl6gs0t6_Bf07j8qQPi3LqjeaiOz9bL_Ha5u61LSwm9hlMLRoCPyMQAvD_BwE&gclsrc=aw.ds&pli=1"
    );
  }, []);

  const onGoTopButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navbar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homepage}>
      <OpinionExplorer />
      <img
        className={styles.notificationBingIcon}
        alt=""
        src="/notificationbing.svg"
      />
      <div className={styles.logoClouds1Parent} data-scroll-to="frameContainer">
        <div className={styles.logoClouds1}>
          <div className={styles.logosSection}>
            <img className={styles.dividerIcon} alt="" src="/divider14.svg" />
            <div className={styles.logos}>
              <img
                className={styles.image36Icon}
                alt=""
                src="/image-36@2x.png"
              />
              <img
                className={styles.image37Icon}
                alt=""
                src="/image-37@2x.png"
              />
              <button className={styles.image38} />
              <img
                className={styles.image39Icon}
                alt=""
                src="/image-39@2x.png"
              />
              <img
                className={styles.image41Icon}
                alt=""
                src="/image-4113@2x.png"
              />
            </div>
            <img className={styles.dividerIcon} alt="" src="/divider15.svg" />
          </div>
        </div>
        <HallOfFameContainer />
        <div className={styles.fading} />
        <FeaturedPostsContainer />
      </div>
      <div className={styles.desktop3}>
        <div className={styles.frameParent}>
          <TrendingPostsSection />
          <TrendingCreatorsContainer />
        </div>
      </div>
      <WithdrawSection />
      <div className={styles.withdrawfield}>
        <input
          className={styles.withdrawfield1}
          type="number"
          placeholder="200"
          min={0.1}
          required
        />
        <div className={styles.withdrawamount}>100</div>
      </div>
      <div className={styles.postDropdownWrapper}>
        <select className={styles.postDropdown}>
          <option value="02:21">Formation of USE</option>
          <option value="01:15">Abortion: A Growing Debate</option>
        </select>
      </div>
      <MobileCTAContainer
        layer2="/layer-21.svg"
        group="/group2.svg"
        onDownloadBadgeAppStoreBadClick={onDownloadBadgeAppStoreBadClick}
      />
      <div className={styles.vuesaxlineararrowRight} />
      <div className={styles.vuesaxlinearrefresh} />
      <img className={styles.vectorIcon} alt="" src="/vector20.svg" />
      <div className={styles.timeGained}>Time Gained</div>
      <div className={styles.div}>1:28</div>
      <div className={styles.timeGained1}>Time Gained</div>
      <div className={styles.div1}>1:28</div>
      <div className={styles.timeGained2}>Time Gained</div>
      <div className={styles.div2}>1:28</div>
      <div className={styles.timeGained3}>Time Gained</div>
      <div className={styles.div3}>1:28</div>
      <div className={styles.timeGained4}>Time Gained</div>
      <div className={styles.div4}>1:28</div>
      <div className={styles.timeGained5}>Time Gained</div>
      <div className={styles.div5}>1:28</div>
      <button className={styles.gotopbutton} onClick={onGoTopButtonClick}>
        <img
          className={styles.chevronRightBlack24dp15}
          alt=""
          src="/chevron-right-black-24dp-15-11.svg"
        />
      </button>
    </div>
  );
};

export default HomePage1;
