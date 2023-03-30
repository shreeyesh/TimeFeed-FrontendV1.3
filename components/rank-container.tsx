import type { NextPage } from "next";
import styles from "./rank-container.module.css";

type RankContainerType = {
  prop?: string;
  image29?: string;
  label?: string;
  description?: string;
  divider?: string;
  prop1?: string;
  image291?: string;
  label1?: string;
  description1?: string;
  divider1?: string;
  prop2?: string;
  image292?: string;
  label2?: string;
  description2?: string;
  divider2?: string;
};

const RankContainer: NextPage<RankContainerType> = ({
  prop,
  image29,
  label,
  description,
  divider,
  prop1,
  image291,
  label1,
  description1,
  divider1,
  prop2,
  image292,
  label2,
  description2,
  divider2,
}) => {
  return (
    <div className={styles.rankrow}>
      <div className={styles.userrank}>
        <b className={styles.b}>{prop}</b>
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img
              className={styles.image29Icon}
              alt=""
              loading="eager"
              src={image29}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.label}>{label}</div>
            <div className={styles.descriptionParent}>
              <div className={styles.description}>Best Run</div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>15m 24s</div>
              </div>
            </div>
          </div>
          <img
            className={styles.verified1Icon}
            alt=""
            src="/verified-1@2x.png"
          />
        </div>
        <div className={styles.info1}>
          <div className={styles.label1}>+ 45,23%</div>
          <div className={styles.image28Parent}>
            <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
            <div className={styles.description}>{description}</div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src={divider} />
      </div>
      <div className={styles.userrank}>
        <b className={styles.b}>{prop1}</b>
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img className={styles.image29Icon} alt="" src={image291} />
          </div>
          <div className={styles.info}>
            <div className={styles.label}>{label1}</div>
            <div className={styles.descriptionParent}>
              <div className={styles.description}>Best Run</div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>15m 24s</div>
              </div>
            </div>
          </div>
          <img
            className={styles.verified1Icon}
            alt=""
            src="/verified-1@2x.png"
          />
        </div>
        <div className={styles.info1}>
          <div className={styles.label1}>+ 45,23%</div>
          <div className={styles.image28Parent}>
            <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
            <div className={styles.description}>{description1}</div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src={divider1} />
      </div>
      <div className={styles.userrank}>
        <b className={styles.b}>{prop2}</b>
        <div className={styles.profileParent}>
          <div className={styles.profile}>
            <img className={styles.image29Icon} alt="" src={image292} />
          </div>
          <div className={styles.info}>
            <div className={styles.label}>{label2}</div>
            <div className={styles.descriptionParent}>
              <div className={styles.description}>Best Run</div>
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>15m 24s</div>
              </div>
            </div>
          </div>
          <img
            className={styles.verified1Icon}
            alt=""
            src="/verified-1@2x.png"
          />
        </div>
        <div className={styles.info1}>
          <div className={styles.label1}>+ 45,23%</div>
          <div className={styles.image28Parent}>
            <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
            <div className={styles.description}>{description2}</div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src={divider2} />
      </div>
    </div>
  );
};

export default RankContainer;
