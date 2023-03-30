import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import CreatePostPop from "../components/create-post-pop";
import PortalPopup from "../components/portal-popup";
import Header from "../components/header";
import PostsContainer from "../components/posts-container";
import FOLLOWINGOVERLAY from "../components/f-o-l-l-o-w-i-n-g-o-v-e-r-l-a-y";
import styles from "./user-profile.module.css";

const UserProfile: NextPage = () => {
  const router = useRouter();
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);
  const [isFOLLOWINGOVERLAYOpen, setFOLLOWINGOVERLAYOpen] = useState(false);

  const onTradeClick = useCallback(() => {
    router.push("/F$237:4335$");
  }, [router]);

  const openCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(true);
  }, []);

  const closeCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(false);
  }, []);

  const openFOLLOWINGOVERLAY = useCallback(() => {
    setFOLLOWINGOVERLAYOpen(true);
  }, []);

  const closeFOLLOWINGOVERLAY = useCallback(() => {
    setFOLLOWINGOVERLAYOpen(false);
  }, []);

  const onTimefeedLowResolutionLogoBClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onExploreClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEarnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cTA7']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.userprofile}>
        <Header
          imageIds="/account-circle-black-24dp-2-1.svg"
          imageIds32x32="/account-balance-wallet-black-24dp-5-1.svg"
          onTimefeedLowResolutionLogoBClick={onTimefeedLowResolutionLogoBClick}
          onEarnClick={onEarnClick}
          onTradeClick={onTradeClick}
          openCreatePostPopPopup={openCreatePostPopPopup}
        />
        <div className={styles.usersection}>
          <div className={styles.frameParent}>
            <div />
            <div className={styles.frameWrapper}>
              <div className={styles.image56Wrapper}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-56@2x.png"
                />
              </div>
            </div>
          </div>
          <img
            className={styles.verified2Icon}
            alt=""
            src="/verified-21@2x.png"
          />
          <div className={styles.usersectionChild} />
          <div className={styles.group481543defaultWrapper}>
            <form className={styles.group481543default} method="post">
              <img
                className={styles.image30Icon}
                alt=""
                src="/image-30@2x.png"
              />
              <textarea className={styles.textPlaceholder} />
              <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
            </form>
          </div>
          <div className={styles.vuesaxlineartetherUsdt}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-6954@2x.png"
              />
              <button className={styles.frameItem} autoFocus />
              <div className={styles.div}>300,000</div>
              <div className={styles.buyTime}>BUY $TIME</div>
            </div>
          </div>
          <img
            className={styles.vuesaxlineartetherUsdtIcon}
            alt=""
            src="/vuesaxlineartetherusdt.svg"
          />
          <PostsContainer />
          <div className={styles.alexRodrigues}>Alex Rodrigues</div>
          <div className={styles.posts}>
            <div className={styles.posts1}>POSTS</div>
            <div className={styles.div1}>15</div>
          </div>
          <div className={styles.followers}>
            <div className={styles.posts1}>FOLLOWERS</div>
            <div className={styles.k}>20k</div>
          </div>
          <div className={styles.following}>
            <div className={styles.posts1}>FOLLOWING</div>
            <div className={styles.k}>20k</div>
          </div>
          <div className={styles.badges}>
            <div className={styles.posts1}>BADGES</div>
            <div className={styles.k}>15</div>
          </div>
          <div className={styles.carpediemvirgoImNotContainer}>
            <p className={styles.carpediemvirgo}>Carpediem/Virgo</p>
            <p className={styles.carpediemvirgo}>&nbsp;</p>
            <p
              className={styles.carpediemvirgo}
            >{`I’m not a mind reader, but I can tell what `}</p>
            <p className={styles.carpediemvirgo}>&nbsp;</p>
            <p className={styles.carpediemvirgo}>you’re thinking.</p>
          </div>
          <button
            className={styles.followButton}
            autoFocus
            onClick={openFOLLOWINGOVERLAY}
          >
            <div className={styles.text}>FOLLOW</div>
          </button>
          <div className={styles.postfilter}>
            <button className={styles.recent}>
              <div className={styles.recent1}>RECENT</div>
            </button>
            <button className={styles.recent}>
              <div className={styles.recent1}>TOP</div>
            </button>
            <button className={styles.recent}>
              <div className={styles.recent1}>MERCH POST</div>
            </button>
          </div>
          <button className={styles.diary}>DIARY</button>
          <button className={styles.badges2}>BADGES</button>
          <img
            className={styles.diaryrowdownIcon}
            alt=""
            src="/diaryrowdown.svg"
          />
          <img className={styles.diaryrowupIcon} alt="" src="/diaryrowup.svg" />
          <div className={styles.mutuals}>
            <div className={styles.profile}>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-29@2x.png"
              />
            </div>
            <div className={styles.profile1}>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-291@2x.png"
              />
            </div>
            <div className={styles.profile2}>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-292@2x.png"
              />
            </div>
            <div className={styles.profile3}>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-293@2x.png"
              />
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-41@2x.png"
              />
            </div>
            <div className={styles.profile4}>
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-294@2x.png"
              />
              <img
                className={styles.image29Icon}
                alt=""
                src="/image-411@2x.png"
              />
            </div>
            <img
              className={styles.verified2Icon1}
              alt=""
              src="/verified-2@2x.png"
            />
          </div>
          <img className={styles.badgesIcon} alt="" src="/badges.svg" />
        </div>
      </div>
      {isCreatePostPopPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCreatePostPopPopup}
        >
          <CreatePostPop onClose={closeCreatePostPopPopup} />
        </PortalPopup>
      )}
      {isFOLLOWINGOVERLAYOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFOLLOWINGOVERLAY}
        >
          <FOLLOWINGOVERLAY onClose={closeFOLLOWINGOVERLAY} />
        </PortalPopup>
      )}
    </>
  );
};

export default UserProfile;
