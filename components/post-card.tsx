import type { NextPage } from "next";
import styles from "./post-card.module.css";

type PostCardType = {
  image58?: string;
  vuesaxboldheart?: string;
  vuesaxlinearheartSlash?: string;
  rectangle3320?: string;
  path33909?: string;
};

const PostCard: NextPage<PostCardType> = ({
  image58,
  vuesaxboldheart,
  vuesaxlinearheartSlash,
  rectangle3320,
  path33909,
}) => {
  return (
    <div className={styles.auctions}>
      <img className={styles.image58Icon} alt="" src={image58} />
      <div className={styles.profileParent}>
        <div className={styles.profile}>
          <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
        </div>
        <div className={styles.profile1}>
          <img className={styles.image29Icon} alt="" src="/image-291@2x.png" />
        </div>
        <div className={styles.profile2}>
          <img className={styles.image29Icon} alt="" src="/image-292@2x.png" />
        </div>
        <div className={styles.profile3}>
          <img className={styles.image29Icon} alt="" src="/image-293@2x.png" />
          <img className={styles.image29Icon} alt="" src="/image-41@2x.png" />
        </div>
        <div className={styles.profile4}>
          <img className={styles.image29Icon} alt="" src="/image-294@2x.png" />
          <img className={styles.image29Icon} alt="" src="/image-411@2x.png" />
        </div>
        <img className={styles.verified2Icon} alt="" src="/verified-2@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <input className={styles.groupChild} type="checkbox" autoFocus />
        <img
          className={styles.vuesaxboldheartIcon}
          alt=""
          src={vuesaxboldheart}
        />
      </div>
      <input className={styles.auctionsChild} type="checkbox" />
      <img
        className={styles.vuesaxlinearheartSlashIcon}
        alt=""
        src={vuesaxlinearheartSlash}
      />
      <button className={styles.rectangleGroup}>
        <img
          className={styles.groupItem}
          alt=""
          loading="lazy"
          src={rectangle3320}
        />
        <div className={styles.iconlyboldgraphParent}>
          <img className={styles.iconlyboldgraph} alt="" />
          <img className={styles.vuesaxlinearunlimitedIcon} alt="" />
          <img className={styles.path33909Icon} alt="" src={path33909} />
          <div className={styles.div}>05:02:00</div>
        </div>
      </button>
    </div>
  );
};

export default PostCard;
