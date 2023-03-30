import type { NextPage } from "next";
import styles from "./mobile-c-t-a-container.module.css";

type MobileCTAContainerType = {
  layer2?: string;
  group?: string;
  phoneMockup21?: string;

  /** Action props */
  onDownloadBadgeAppStoreBadClick?: () => void;
};

const MobileCTAContainer: NextPage<MobileCTAContainerType> = ({
  layer2,
  group,
  phoneMockup21,
  onDownloadBadgeAppStoreBadClick,
}) => {
  return (
    <div className={styles.cta9}>
      <div className={styles.content}>
        <div className={styles.ctaMessage}>
          <div className={styles.sectionHeading}>
            <div className={styles.ctaMessage}>
              <div className={styles.sectionTitle}>Enjoy from your mobile</div>
            </div>
            <div className={styles.description}>
              Download the app to never miss out on amazing battles, Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Auctor neque sed
              imperdiet nibh lectus feugiat nunc sem.
            </div>
          </div>
        </div>
        <div className={styles.getTheApp}>
          <div className={styles.getTheApp1}>Get the App soon on</div>
          <div className={styles.badges}>
            <button className={styles.downloadBadgeGooglePlayB}>
              <img className={styles.layer2Icon} alt="" src={layer2} />
            </button>
            <button
              className={styles.downloadBadgeGooglePlayB}
              onClick={onDownloadBadgeAppStoreBadClick}
            >
              <img className={styles.layer2Icon} alt="" src={group} />
            </button>
          </div>
        </div>
      </div>
      <img
        className={styles.phoneMockup1}
        alt=""
        src="/phone-mockup-1@2x.png"
      />
      <img className={styles.phoneMockup2} alt="" />
    </div>
  );
};

export default MobileCTAContainer;
