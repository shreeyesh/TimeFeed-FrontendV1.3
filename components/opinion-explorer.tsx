import type { NextPage } from "next";
import { useState, useRef, useCallback, useEffect } from "react";
import CreatePostPop from "./create-post-pop";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import styles from "./opinion-explorer.module.css";

const OpinionExplorer: NextPage = () => {
  const button1Ref = useRef<HTMLButtonElement>(null);
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);
  const router = useRouter();
  const [isCreatePostPopPopup1Open, setCreatePostPopPopup1Open] =
    useState(false);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(true);
  }, []);

  const closeCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(false);
  }, []);

  const onExploreMoreAboutClick = useCallback(() => {
    window.open(
      "https://timefeed.notion.site/abdc61bc18d24190b22f5f40adeb5327?v=1a403d1fae724e87bf7c2a0beb65b901"
    );
  }, []);

  const onEarnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cTA7']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTradeClick = useCallback(() => {
    router.push("/F$237:4335$");
  }, [router]);

  const openCreatePostPopPopup1 = useCallback(() => {
    setCreatePostPopPopup1Open(true);
  }, []);

  const closeCreatePostPopPopup1 = useCallback(() => {
    setCreatePostPopPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.sectionhomepageWrapper}>
        <div className={styles.sectionhomepage}>
          <div className={styles.component5Parent}>
            <div className={styles.component5}>
              <div className={styles.imageParent}>
                <div className={styles.image}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-48@2x.png"
                  />
                </div>
                <div className={styles.image1}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-47@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-46@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-508@2x.png"
                  />
                </div>
                <div className={styles.image4}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-552@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-563@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.component10}>
              <div className={styles.imageGroup}>
                <div className={styles.image6}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-75@2x.png"
                  />
                </div>
                <div className={styles.image6}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-751@2x.png"
                  />
                </div>
                <div className={styles.image4}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-752@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image75Icon3}
                    alt=""
                    src="/image-753@2x.png"
                  />
                </div>
                <div className={styles.image10}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-754@2x.png"
                  />
                </div>
                <div className={styles.image11}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-755@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.component9}>
              <div className={styles.imageParent}>
                <div className={styles.image}>
                  <img
                    className={styles.image48Icon1}
                    alt=""
                    src="/image-481@2x.png"
                  />
                </div>
                <div className={styles.image1}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-471@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image48Icon}
                    alt=""
                    src="/image-461@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-509@2x.png"
                  />
                </div>
                <div className={styles.image4}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-553@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image50Icon}
                    alt=""
                    src="/image-564@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.component11}>
              <div className={styles.imageGroup}>
                <div className={styles.image6}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-756@2x.png"
                  />
                </div>
                <div className={styles.image6}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-757@2x.png"
                  />
                </div>
                <div className={styles.image4}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-758@2x.png"
                  />
                </div>
                <div className={styles.image2}>
                  <img
                    className={styles.image75Icon9}
                    alt=""
                    src="/image-759@2x.png"
                  />
                </div>
                <div className={styles.image10}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-7510@2x.png"
                  />
                </div>
                <div className={styles.image11}>
                  <img
                    className={styles.image75Icon}
                    alt=""
                    src="/image-755@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.exploreAndFightForOpinionsParent}>
              <div className={styles.exploreAndFight}>
                Explore and fight for opinions
              </div>
              <div className={styles.joinOurMailing}>
                Join our mailing list to stay in the loop with our newest events
                happening.
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button
                className={styles.button}
                autoFocus
                onClick={onButtonClick}
                data-animate-on-scroll
              >
                <div className={styles.explore}>Explore</div>
              </button>
              <button
                className={styles.button1}
                autoFocus
                ref={button1Ref}
                onClick={openCreatePostPopPopup}
                data-animate-on-scroll
              >
                <div className={styles.create}>Post</div>
              </button>
            </div>
            <div className={styles.cta}>
              <img
                className={styles.playCircleFilledBlack24dpIcon}
                alt=""
                src="/play-circle-filled-black-24dp-1-1.svg"
              />
              <button
                className={styles.exploreMoreAbout}
                onClick={onExploreMoreAboutClick}
              >
                Explore More about TimeFeed
              </button>
            </div>
          </div>
          <div className={styles.fading} />
          <nav className={styles.navbar} data-scroll-to="navbar">
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
                <button className={styles.exploreMoreAbout}>Explore</button>
                <button
                  className={styles.exploreMoreAbout}
                  onClick={onEarnClick}
                >
                  Earn
                </button>
                <button
                  className={styles.exploreMoreAbout}
                  onClick={onTradeClick}
                >
                  Trade
                </button>
                <button
                  className={styles.exploreMoreAbout}
                  onClick={openCreatePostPopPopup1}
                >
                  Post
                </button>
              </div>
              <div className={styles.buttonGroup}>
                <img
                  className={styles.accountBalanceWalletBlack2Icon}
                  alt=""
                  src="/account-circle-black-24dp-2-14.svg"
                />
                <img
                  className={styles.accountBalanceWalletBlack2Icon}
                  alt=""
                  src="/account-balance-wallet-black-24dp-5-14.svg"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
      {isCreatePostPopPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          relativeLayerRef={button1Ref}
          onOutsideClick={closeCreatePostPopPopup}
        >
          <CreatePostPop onClose={closeCreatePostPopPopup} />
        </PortalPopup>
      )}
      {isCreatePostPopPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCreatePostPopPopup1}
        >
          <CreatePostPop onClose={closeCreatePostPopPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default OpinionExplorer;
