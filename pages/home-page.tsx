import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { Menu, Button, MenuButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import CreatePostPop from "../components/create-post-pop";
import PortalPopup from "../components/portal-popup";
import DesktopContainer from "../components/desktop-container";
import FormContainer from "../components/form-container";
import WithdrawContainer from "../components/withdraw-container";
import MobileCTAContainer from "../components/mobile-c-t-a-container";
import styles from "./home-page.module.css";

const HomePage: NextPage = () => {
  const router = useRouter();
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);

  const onDownloadBadgeAppStoreBadClick = useCallback(() => {
    window.open(
      "https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclid=CjwKCAiA8OmdBhAgEiwAShr40_H9ceIl6gs0t6_Bf07j8qQPi3LqjeaiOz9bL_Ha5u61LSwm9hlMLRoCPyMQAvD_BwE&gclsrc=aw.ds&pli=1"
    );
  }, []);

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

  const onExploreTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onExploreMoreAboutClick = useCallback(() => {
    window.open(
      "https://timefeed.notion.site/abdc61bc18d24190b22f5f40adeb5327?v=1a403d1fae724e87bf7c2a0beb65b901"
    );
  }, []);

  const onTradeClick = useCallback(() => {
    router.push("/F$237:4335$");
  }, [router]);

  const openCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(true);
  }, []);

  const closeCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(false);
  }, []);

  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navbar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className={styles.homepage}>
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
                  Join our mailing list to stay in the loop with our newest
                  events happening.
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.button}
                  autoFocus
                  onClick={onButtonClick}
                  data-animate-on-scroll
                >
                  <div className={styles.explore} onClick={onExploreTextClick}>
                    Explore
                  </div>
                </button>
                <button
                  className={styles.button1}
                  autoFocus
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
                  <button className={styles.exploreMoreAbout}>Earn</button>
                  <button
                    className={styles.exploreMoreAbout}
                    onClick={onTradeClick}
                  >
                    Trade
                  </button>
                  <button
                    className={styles.exploreMoreAbout}
                    onClick={openCreatePostPopPopup}
                  >
                    Post
                  </button>
                </div>
                <div className={styles.buttonGroup} onClick={onExploreTextClick}>
                  <img
                    className={styles.accountBalanceWalletBlack2Icon}
                    alt=""
                    src="/account-circle-black-24dp-2-13.svg"
                  />
                  <img
                    className={styles.accountBalanceWalletBlack2Icon}
                    alt=""
                    src="/account-balance-wallet-black-24dp-5-13.svg"
                  />
                </div>
              </div>
            </nav>
            <img
              className={styles.timefeedLowResolutionLogoBIcon}
              alt=""
              src="/timefeedlowresolutionlogoblackonwhitebackground-2@2x.png"
            />
            <img
              className={styles.notificationBingIcon}
              alt=""
              src="/notificationbing.svg"
            />
          </div>
        </div>
        <div
          className={styles.logoClouds1Parent}
          data-scroll-to="frameContainer"
        >
          <div className={styles.logoClouds1}>
            <div className={styles.logosSection}>
              <img className={styles.dividerIcon} alt="" src="/divider.svg" />
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
              <img className={styles.dividerIcon} alt="" src="/divider1.svg" />
            </div>
          </div>
          <div className={styles.desktop2}>
            <div className={styles.frameGroup}>
              <div className={styles.hofheaderParent}>
                <div className={styles.hofheader}>
                  <div className={styles.hallOfFame}>Hall of Fame</div>
                  <div className={styles.buttonGroup}>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        colorScheme="nftwhite"
                      >
                        Categories
                      </MenuButton>
                    </Menu>
                    <div className={styles.dayfilter}>
                      <button className={styles.daily}>
                        <div className={styles.daily1}>DAILY</div>
                      </button>
                      <button className={styles.daily}>
                        <div className={styles.daily1}>WEEKLY</div>
                      </button>
                      <button className={styles.daily}>
                        <div className={styles.daily1}>MONTHLY</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.halloffame}>
                  <div className={styles.rankrow}>
                    <div className={styles.userrank}>
                      <b className={styles.b}>1</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            loading="eager"
                            src="/image-2910@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Bobby Axelrod</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>23.46</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider2.svg"
                      />
                    </div>
                    <div className={styles.userrank}>
                      <b className={styles.b}>4</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2911@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Shany Rodriguez</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>22.28</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider3.svg"
                      />
                    </div>
                    <div className={styles.userrank}>
                      <b className={styles.b}>7</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2912@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Damaris Leffler</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>21.51</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider4.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.rankrow}>
                    <div className={styles.userrank}>
                      <b className={styles.b3}>2</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2913@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Christina Williams</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>23.40</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider5.svg"
                      />
                    </div>
                    <div className={styles.userrank}>
                      <b className={styles.b}>5</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2914@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Krystina Mosciski</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>22.12</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider6.svg"
                      />
                    </div>
                    <div className={styles.userrank}>
                      <b className={styles.b}>8</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2915@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Mya Tillman</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>21.37</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider7.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.rankrow}>
                    <div className={styles.userrank}>
                      <b className={styles.b}>3</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2916@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Gavin Belson</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>23.00</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider8.svg"
                      />
                    </div>
                    <div className={styles.userrank}>
                      <b className={styles.b}>6</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2917@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Henry Denesik</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>21.93</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider9.svg"
                      />
                    </div>
                    <div className={styles.userrank}>
                      <b className={styles.b}>9</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2918@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Haley Douglas</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>21.15</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider10.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.rankrow}>
                    <div className={styles.userrank}>
                      <b className={styles.b}>10</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2919@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Kabir Malhotra</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>22.64</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider11.svg"
                      />
                    </div>
                    <div className={styles.userrank}>
                      <b className={styles.b}>11</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2920@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Bored Ape Yacht</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>21.72</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider12.svg"
                      />
                    </div>
                    <div className={styles.userrank}>
                      <b className={styles.b}>12</b>
                      <div className={styles.profileParent}>
                        <div className={styles.profile}>
                          <img
                            className={styles.image29Icon}
                            alt=""
                            src="/image-2921@2x.png"
                          />
                        </div>
                        <div className={styles.info}>
                          <div className={styles.label}>Roman Klocko</div>
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
                          <img
                            className={styles.image28Icon}
                            alt=""
                            src="/image-28@2x.png"
                          />
                          <div className={styles.description}>20.87</div>
                        </div>
                      </div>
                      <img
                        className={styles.dividerIcon2}
                        alt=""
                        src="/divider13.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.vuesaxlinearrankingIcon}
                alt=""
                src="/vuesaxlinearranking.svg"
              />
            </div>
          </div>
          <div className={styles.fading1} />
          <DesktopContainer />
        </div>
        <div className={styles.desktop3}>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.trendingPostsParent}>
                  <div className={styles.hallOfFame}>Trending Posts</div>
                  <div className={styles.buttonGroup}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/frame-34343.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/frame-34344.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.component13}>
                <div className={styles.favoritParent}>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="/image-5010@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-51@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-521@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-511@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon12}
                          alt=""
                          src="/image-2922@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart3.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="/image-541@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-512@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-522@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-513@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon12}
                          alt=""
                          src="/image-298@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart3.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="/image-554@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-523@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-514@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-515@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon12}
                          alt=""
                          src="/image-2922@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart3.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon1}
                        alt=""
                        src="/image-542@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-516@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-524@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-517@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon12}
                          alt=""
                          src="/image-2922@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart3.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <FormContainer />
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image55Icon3}
                        alt=""
                        src="/image-55@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/frame-34339@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/frame-34339@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/frame-34339@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon16}
                          alt=""
                          src="/image-298@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart3.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image55Icon3}
                        alt=""
                        src="/image-555@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-518@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-525@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-519@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon16}
                          alt=""
                          src="/image-298@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart3.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.component15}>
                <div className={styles.favoritGroup}>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image55Icon3}
                        alt=""
                        src="/image-5011@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5110@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-526@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5111@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon16}
                          alt=""
                          src="/image-2922@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart2.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image55Icon3}
                        alt=""
                        src="/image-543@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5112@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5112@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5112@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon16}
                          alt=""
                          src="/image-298@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart2.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image55Icon3}
                        alt=""
                        src="/image-556@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-527@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5113@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5114@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon16}
                          alt=""
                          src="/image-2922@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart2.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image55Icon3}
                        alt=""
                        src="/image-542@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-516@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-524@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-517@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon16}
                          alt=""
                          src="/image-2922@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart2.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="/image-566@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-528@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5115@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5116@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon12}
                          alt=""
                          src="/image-298@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart2.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="/image-557@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5117@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-529@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-5118@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon12}
                          alt=""
                          src="/image-298@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart2.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                  <div className={styles.favorit}>
                    <div className={styles.image50Wrapper}>
                      <img
                        className={styles.image54Icon}
                        alt=""
                        src="/image-5010@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-51@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-521@2x.png"
                        />
                      </div>
                      <div className={styles.image51Wrapper}>
                        <img
                          className={styles.image51Icon}
                          alt=""
                          src="/image-511@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.profileParent10}>
                      <div className={styles.profile12}>
                        <img
                          className={styles.image29Icon12}
                          alt=""
                          src="/image-2922@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-22@2x.png"
                      />
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.dayfilter}>
                        <div className={styles.r66Vold}>Formation of USE</div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.descriptionWrapper10}>
                          <div className={styles.description}>
                            Mark Zuckerberg
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className={styles.like}>
                      <img
                        className={styles.vuesaxboldheartIcon}
                        alt=""
                        src="/vuesaxboldheart2.svg"
                      />
                      <div className={styles.div}>82</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.trendingCreators}>
              <div className={styles.creatorsheader}>
                <div className={styles.trendingPostsParent}>
                  <div className={styles.trendingCreators1}>
                    Trending Creators
                  </div>
                  <div className={styles.buttonGroup}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/frame-343431.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/frame-343441.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.creatorrowParent}>
                <div className={styles.creatorrow}>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image66Icon}
                        alt=""
                        src="/image-66@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image29Icon16}
                          alt=""
                          src="/image-2923@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>Shayne McLaughlin</div>
                      <div className={styles.clanByachContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>BYACH</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image67Icon}
                        alt=""
                        src="/image-67@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image71Icon}
                          alt=""
                          src="/image-71@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>Kelly Ross</div>
                      <div className={styles.clanGhostContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>GHOST OF ICP</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image68Icon}
                        alt=""
                        src="/image-68@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image71Icon}
                          alt=""
                          src="/image-69@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>
                        Agung Prio Rismawan
                      </div>
                      <div className={styles.clanGhostContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>WOLVES</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image70Icon}
                        alt=""
                        src="/image-70@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image29Icon16}
                          alt=""
                          src="/image-2924@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>Valentina Keebler</div>
                      <div className={styles.clanGhostContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>BYACH</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image68Icon1}
                        alt=""
                        src="/image-68@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image69Icon1}
                          alt=""
                          src="/image-691@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>
                        Agung Prio Rismawan
                      </div>
                      <div className={styles.clanGhostContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>BYACH</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.creatorrow1}>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image66Icon1}
                        alt=""
                        src="/image-661@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image29Icon12}
                          alt=""
                          src="/image-2925@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>
                        Agung Prio Rismawan
                      </div>
                      <div className={styles.clanGhostContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>BYACH</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image67Icon1}
                        alt=""
                        src="/image-671@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image71Icon}
                          alt=""
                          src="/image-711@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}> Donavon Bradtke</div>
                      <div className={styles.clanGhostContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>GHOST OF ICP</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image68Icon}
                        alt=""
                        src="/image-681@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image71Icon}
                          alt=""
                          src="/image-692@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>Orville Rodriguez</div>
                      <div className={styles.clanGhostContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>BYACH</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image55Icon7}
                        alt=""
                        src="/image-558@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image29Icon16}
                          alt=""
                          src="/image-2926@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}> Emilio Bruen</div>
                      <div className={styles.clanGhostContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>WOLVES</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.creatorcard}>
                    <div className={styles.image66Wrapper}>
                      <img
                        className={styles.image68Icon}
                        alt=""
                        src="/image-681@2x.png"
                      />
                    </div>
                    <div className={styles.profileParent23}>
                      <div className={styles.profile25}>
                        <img
                          className={styles.image71Icon}
                          alt=""
                          src="/image-693@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon13}
                        alt=""
                        src="/verified-23@2x.png"
                      />
                    </div>
                    <div className={styles.shayneMclaughlinParent}>
                      <div className={styles.hallOfFame}>Georgianna Miller</div>
                      <div className={styles.clanGhostContainer}>
                        <span>{`Clan : `}</span>
                        <span className={styles.byach}>BYACH</span>
                      </div>
                    </div>
                    <div className={styles.info24}>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Posts</div>
                          <div className={styles.k}>9.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Fans</div>
                          <div className={styles.k}>6.2K</div>
                        </div>
                      </div>
                      <div className={styles.identity}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Best Run</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-301@2x.png"
                            />
                            <div className={styles.hallOfFame}>0.12</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.identity3}>
                        <div className={styles.postsParent}>
                          <div className={styles.posts}>Time Earned</div>
                          <div className={styles.image30Parent}>
                            <img
                              className={styles.image30Icon}
                              alt=""
                              src="/image-302@2x.png"
                            />
                            <div className={styles.hallOfFame}>13K</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.cta7}>
          <div className={styles.cta1}>
            <div className={styles.bgMask}>
              <div className={styles.bg} />
              <img className={styles.bgMaskChild} alt="" src="/vector-1.svg" />
              <img
                className={styles.bgMaskItem}
                alt=""
                src="/withdrawTIme.svg"
              />
            </div>
            <div className={styles.withdrawtime}>
              <WithdrawContainer />
              <div className={styles.withdrawdata}>
                <div className={styles.frameParent30}>
                  <div className={styles.parent}>
                    <div className={styles.rankrow}>
                      <img
                        className={styles.lineIcon}
                        alt=""
                        src="/line@2x.png"
                      />
                      <div className={styles.details}>
                        <b className={styles.number}>704</b>
                        <div className={styles.label24}>Likes</div>
                      </div>
                    </div>
                    <div className={styles.rankrow}>
                      <img
                        className={styles.lineIcon1}
                        alt=""
                        src="/line1.svg"
                      />
                      <div className={styles.details}>
                        <b className={styles.number}>403</b>
                        <div className={styles.label25}>$Time Left</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.rankrow}>
                      <img
                        className={styles.lineIcon1}
                        alt=""
                        src="/line1.svg"
                      />
                      <div className={styles.details}>
                        <b className={styles.number}>301</b>
                        <div className={styles.label25}>Dislikes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.postDropdownWrapper}>
          <select className={styles.postDropdown}>
            <option value="02:21">Formation of USE</option>
            <option value="01:15">Abortion: A Growing Debate</option>
          </select>
        </div>
        <MobileCTAContainer
          layer2="/layer-2.svg"
          group="/group1.svg"
          phoneMockup21="/phone-mockup-1@2x.png"
          onDownloadBadgeAppStoreBadClick={onDownloadBadgeAppStoreBadClick}
        />
        <div className={styles.vuesaxlineararrowRight} />
        <div className={styles.vuesaxlinearrefresh} />
        <div className={styles.timeGained}>Time Gained</div>
        <div className={styles.div26}>1:28</div>
        <div className={styles.timeGained1}>Time Gained</div>
        <div className={styles.div27}>1:28</div>
        <div className={styles.timeGained2}>Time Gained</div>
        <div className={styles.div28}>1:28</div>
        <div className={styles.timeGained3}>Time Gained</div>
        <div className={styles.div29}>1:28</div>
        <div className={styles.timeGained4}>Time Gained</div>
        <div className={styles.div30}>1:28</div>
        <div className={styles.timeGained5}>Time Gained</div>
        <div className={styles.div31}>1:28</div>
        <input
          className={styles.withdrawfield}
          type="number"
          placeholder="200"
          min={0.1}
          required
        />
        <div className={styles.withdrawamount}>100</div>
        <button
          className={styles.chevronRightBlack24dp15Wrapper}
          onClick={onFrameButtonClick}
        >
          <img
            className={styles.chevronRightBlack24dp15}
            alt=""
            src="/chevron-right-black-24dp-15-1.svg"
          />
        </button>
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
    </>
  );
};

export default HomePage;
