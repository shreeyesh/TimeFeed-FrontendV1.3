import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CreatePostPop from "../components/create-post-pop";
import PortalPopup from "../components/portal-popup";
import Header from "../components/header";
import PostCard from "../components/post-card";
import USEFormContainer from "../components/u-s-e-form-container";
import styles from "./view-post.module.css";

const ViewPost: NextPage = () => {
  const router = useRouter();
  const [isCreatePostPopPopupOpen, setCreatePostPopPopupOpen] = useState(false);

  const onTradeClick = useCallback(() => {
    router.push("/F$237:4335$");
  }, [router]);

  const openCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(true);
  }, []);

  const closeCreatePostPopPopup = useCallback(() => {
    setCreatePostPopPopupOpen(false);
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
      <div className={styles.viewPost}>
        <div className={styles.viewPostInner}>
          <div className={styles.frameParent}>
            <Header
              imageIds="/account-circle-black-24dp-2-11.svg"
              imageIds32x32="/account-balance-wallet-black-24dp-5-11.svg"
              navbarJustifyContent="flex-start"
              navbarPosition="absolute"
              navbarTop="146px"
              navbarLeft="0px"
              onTimefeedLowResolutionLogoBClick={
                onTimefeedLowResolutionLogoBClick
              }
              onExploreClick={onExploreClick}
              onEarnClick={onEarnClick}
              onTradeClick={onTradeClick}
              openCreatePostPopPopup={openCreatePostPopPopup}
            />
            <div className={styles.desktop1}>
              <div className={styles.frameGroup}>
                <div />
                <div className={styles.frameWrapper}>
                  <div className={styles.auctionsWrapper}>
                    <div className={styles.auctions}>
                      <PostCard
                        image58="/image-502@2x.png"
                        vuesaxboldheart="/vuesaxboldheart1.svg"
                        vuesaxlinearheartSlash="/vuesaxlinearheartslash1.svg"
                        rectangle3320="/TransperentText5@2x.png"
                        path33909="16.89x17.06x773243379"
                      />
                      <div className={styles.frameContainer}>
                        <div className={styles.frameDiv}>
                          <div className={styles.formationOfUseParent}>
                            <div className={styles.formationOfUse}>
                              Formation of USE
                            </div>
                            <img
                              className={styles.image29Icon}
                              alt=""
                              src="/image-295@2x.png"
                            />
                          </div>
                          <div className={styles.frameWrapper1}>
                            <div className={styles.descriptionWrapper}>
                              <div className={styles.description}>
                                <p className={styles.iFeelLike}>
                                  I feel like formation of United States of
                                </p>
                                <p className={styles.iFeelLike}>
                                  {" "}
                                  Europe led by Germany is needed...
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                      <div className={styles.timeGained}>Time Gained</div>
                      <div className={styles.div}>1:28</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.auctions1}>
                <div className={styles.usercard}>
                  <img
                    className={styles.image56Icon}
                    alt=""
                    src="/image-56@2x.png"
                  />
                  <img className={styles.iconlyboldgraph} alt="" />
                  <button className={styles.rectangleParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/rectangle-3320@2x.png"
                    />
                    <div className={styles.iconlyboldgraphParent}>
                      <img className={styles.iconlyboldgraph1} alt="" />
                      <img
                        className={styles.vuesaxlinearunlimitedIcon}
                        alt=""
                        src="/vuesaxlinearunlimited.svg"
                      />
                      <div className={styles.follow}>FOLLOW</div>
                    </div>
                  </button>
                  <button className={styles.rectangleGroup}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      loading="lazy"
                      src="/TransperentText17@2x.png"
                    />
                    <div className={styles.iconlyboldgraphGroup}>
                      <img className={styles.iconlyboldgraph2} alt="" />
                      <img
                        className={styles.vuesaxlinearunlimitedIcon}
                        alt=""
                      />
                      <div className={styles.follow}>BYACH</div>
                    </div>
                  </button>
                  <button className={styles.rectangleContainer}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      loading="lazy"
                      src="/blurText@2x.png"
                    />
                    <div className={styles.vuesaxlinearuserSquareParent}>
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearusersquare.svg"
                      />
                      <div className={styles.profile}>PROFILE</div>
                    </div>
                  </button>
                  <img
                    className={styles.vuesaxlinearpeopleIcon}
                    alt=""
                    src="/vuesaxlinearpeople.svg"
                  />
                </div>
                <img
                  className={styles.verified2Icon}
                  alt=""
                  src="/verified-21@2x.png"
                />
                <div className={styles.frameParent1}>
                  <div className={styles.frameDiv}>
                    <div className={styles.auctionsWrapper}>
                      <div className={styles.alexRodriguesAlexir}>
                        Alex Rodrigues @Alexir
                      </div>
                    </div>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description1}>
                          <p className={styles.carpediemVirgo}>
                            {" "}
                            Carpediem / Virgo
                          </p>
                          <p className={styles.carpediemVirgo}>&nbsp;</p>
                          <p className={styles.iFeelLike}>
                            <span className={styles.span}>{`       `}</span>
                            <span> FOLLOWERS : 20K CLAN</span>
                          </p>
                          <p
                            className={styles.iFeelLike}
                          >{`                                                   `}</p>
                          <p
                            className={styles.iFeelLike}
                          >{`       FOLLOWING : 5743         BYACH `}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.profileParent}>
                    <div className={styles.profile1}>
                      <img
                        className={styles.image29Icon1}
                        alt=""
                        src="/image-29@2x.png"
                      />
                    </div>
                    <div className={styles.profile2}>
                      <img
                        className={styles.image29Icon1}
                        alt=""
                        src="/image-296@2x.png"
                      />
                    </div>
                    <div className={styles.profile3}>
                      <img
                        className={styles.image29Icon1}
                        alt=""
                        src="/image-297@2x.png"
                      />
                    </div>
                    <div className={styles.profile4}>
                      <img
                        className={styles.image29Icon1}
                        alt=""
                        src="/image-293@2x.png"
                      />
                    </div>
                    <div className={styles.profile5}>
                      <img
                        className={styles.image29Icon1}
                        alt=""
                        src="/image-294@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon1}
                      alt=""
                      src="/verified-2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.mutualFollowers}>MUTUAL FOLLOWERS</div>
              </div>
              <button className={styles.vuesaxlineararrowRight}>
                <div className={styles.arrowRight}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector5@2x.png"
                  />
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/arrowright.svg"
                  />
                  <button className={styles.vuesaxlinearrefresh}>
                    <img
                      className={styles.refreshIcon}
                      alt=""
                      src="/refresh.svg"
                    />
                  </button>
                  <img className={styles.vectorIcon1} alt="" />
                </div>
              </button>
              <div className={styles.desktop1Child} />
              <Button
                className={styles.new}
                variant="outline"
                w="1440px"
                colorScheme="teal"
              >{`                                                    NEW `}</Button>
              <Button
                className={styles.trending}
                variant="outline"
                w="1440px"
                colorScheme="teal"
              >
                TRENDING
              </Button>
              <Button
                className={styles.related}
                variant="outline"
                w="1440px"
                colorScheme="teal"
              >{` RELATED `}</Button>
              <USEFormContainer
                imageIds="/image-55@2x.png"
                smallImageIds="/frame-34339@2x.png"
                mediumImageIds="/frame-34339@2x.png"
                smallImageIds2="/frame-34339@2x.png"
              />
              <USEFormContainer
                imageIds="/image-561@2x.png"
                smallImageIds="/frame-34340@2x.png"
                mediumImageIds="/frame-343391@2x.png"
                smallImageIds2="/frame-34341@2x.png"
                propLeft="0px"
              />
              <div className={styles.image54Parent}>
                <img
                  className={styles.image54Icon}
                  alt=""
                  src="/image-54@2x.png"
                />
                <img
                  className={styles.image55Icon}
                  alt=""
                  src="/image-551@2x.png"
                />
                <img
                  className={styles.image52Icon}
                  alt=""
                  src="/image-52@2x.png"
                />
                <img
                  className={styles.image51Icon}
                  alt=""
                  src="/image-551@2x.png"
                />
              </div>
              <div className={styles.desktop1Item} />
              <div className={styles.desktop1Inner} />
              <div className={styles.frameParent3}>
                <div className={styles.image29Parent}>
                  <img
                    className={styles.image41Icon}
                    alt=""
                    src="/image-299@2x.png"
                  />
                  <div className={styles.inputleftaddon}>
                    <p
                      className={styles.alexRodrigues}
                    >{`Alex Rodrigues     `}</p>
                    <p className={styles.iFeelLike}>@Alexir</p>
                  </div>
                  <div
                    className={styles.textPlaceholder}
                  >{`I feel like the formation of United States of Europe led by Germany is needed as all Europe together as a country will make us undefeatable and the richest country surpassing USA. `}</div>
                </div>
                <button className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector6.svg"
                  />
                  <button className={styles.vuesaxlinearheartSlash}>
                    <div className={styles.heartSlash}>
                      <div className={styles.heartSlash}>
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="/group.svg"
                        />
                        <img
                          className={styles.vectorIcon3}
                          alt=""
                          src="/vector7.svg"
                        />
                        <img className={styles.vectorIcon4} alt="" />
                      </div>
                    </div>
                  </button>
                </button>
              </div>
              <div className={styles.component19}>
                <div className={styles.property1default}>
                  <div className={styles.textPlaceholderWrapper}>
                    <div className={styles.textPlaceholder1}>
                      I can understand your sentiment, but unity doesn't always
                      guarantee success.
                    </div>
                  </div>
                  <div className={styles.image41Parent}>
                    <img
                      className={styles.image41Icon}
                      alt=""
                      src="/image-411@2x.png"
                    />
                    <div className={styles.inputleftaddon1}>
                      <p className={styles.iFeelLike}>Emily Wilson</p>
                      <p className={styles.iFeelLike}>@emilywilson</p>
                    </div>
                  </div>
                  <div className={styles.property1defaultInner}>
                    <button className={styles.vectorParent}>
                      <img
                        className={styles.vectorIcon5}
                        alt=""
                        src="/vector8.svg"
                      />
                      <button className={styles.vuesaxlinearheartSlash2}>
                        <img
                          className={styles.refreshIcon}
                          alt=""
                          src="/vuesaxlinearheartslash2.svg"
                        />
                      </button>
                    </button>
                  </div>
                </div>
                <div className={styles.property1variant2}>
                  <div className={styles.frameParent4}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-412@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Ryan Smith</p>
                        <p className={styles.iFeelLike}>@RyanFeeds</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder2}>
                      Cultural diversity important too
                    </div>
                  </div>
                  <div className={styles.property1defaultInner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector9.svg"
                      />
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearheartslash3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant3}>
                  <div className={styles.frameParent5}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-413@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder3}>
                      All countries must be on board.
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant4}>
                  <div className={styles.frameParent5}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-414@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder4}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector10.svg"
                      />
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearheartslash4.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant5}>
                  <div className={styles.frameParent5}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-415@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder5}>
                      Don't rush without consideration.
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant6}>
                  <div className={styles.frameParent8}>
                    <div className={styles.auctionsWrapper}>
                      <div className={styles.image41Group}>
                        <img
                          className={styles.image41Icon}
                          alt=""
                          src="/image-416@2x.png"
                        />
                        <div className={styles.inputleftaddon1}>
                          <p className={styles.iFeelLike}>Christina Will</p>
                          <p className={styles.iFeelLike}>@ChristinaW</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder6}>
                      Interesting concept, evaluate well.
                    </div>
                  </div>
                  <div className={styles.property1defaultInner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector11.svg"
                      />
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearheartslash5.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.verified1Icon}
                    alt=""
                    src="/verified-1@2x.png"
                  />
                </div>
                <div className={styles.property1variant7}>
                  <div className={styles.frameParent5}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-41@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder7}>
                      Potential drawbacks to consider.
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant8}>
                  <div className={styles.frameParent10}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-417@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.property1variant8Inner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector12.svg"
                      />
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearheartslash6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant9}>
                  <div className={styles.frameParent10}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-418@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.property1variant8Inner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector13.svg"
                      />
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearheartslash7.svg"
                      />
                    </div>
                  </div>
                  <img
                    className={styles.verified1Icon1}
                    alt=""
                    src="/verified-1@2x.png"
                  />
                </div>
                <div className={styles.property1variant10}>
                  <div className={styles.frameParent5}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-419@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector14.svg"
                      />
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearheartslash8.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant11}>
                  <div className={styles.frameParent5}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-4110@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector15.svg"
                      />
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearheartslash9.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant12}>
                  <div className={styles.frameParent5}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-4111@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.descriptionWrapper}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon6}
                        alt=""
                        src="/vector16.svg"
                      />
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearheartslash10.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.property1variant13}>
                  <div className={styles.frameParent10}>
                    <div className={styles.image41Group}>
                      <img
                        className={styles.image41Icon}
                        alt=""
                        src="/image-4112@2x.png"
                      />
                      <div className={styles.inputleftaddon1}>
                        <p className={styles.iFeelLike}>Frank Smith</p>
                        <p className={styles.iFeelLike}>@FrankSays</p>
                      </div>
                    </div>
                    <div className={styles.textPlaceholder8}>
                      No I dont think so
                    </div>
                  </div>
                  <div className={styles.property1variant8Inner}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon5}
                        alt=""
                        src="/vector17.svg"
                      />
                      <img
                        className={styles.vuesaxlinearuserSquareIcon}
                        alt=""
                        src="/vuesaxlinearheartslash11.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.viewMore}>--View More--</div>
              <img
                className={styles.image56Icon1}
                alt=""
                src="/image-562@2x.png"
              />
              <img
                className={styles.verified1Icon2}
                alt=""
                src="/verified-1@2x.png"
              />
              <div className={styles.group481543defaultParent}>
                <form className={styles.group481543default} method="post">
                  <img
                    className={styles.image30Icon}
                    alt=""
                    src="/image-30@2x.png"
                  />
                  <textarea className={styles.textPlaceholder14} />
                  <img
                    className={styles.vectorIcon15}
                    alt=""
                    src="/vector18.svg"
                  />
                </form>
                <textarea
                  className={styles.textPlaceholder15}
                  placeholder="Comment Here"
                />
              </div>
              <div className={styles.vuesaxlineartetherUsdt}>
                <div className={styles.rectangleParent1}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-6954@2x.png"
                  />
                  <button className={styles.rectangleButton} autoFocus />
                  <div className={styles.div1}>300,000</div>
                  <div className={styles.buyTime}>BUY $TIME</div>
                </div>
              </div>
              <img
                className={styles.vuesaxlineartetherUsdtIcon}
                alt=""
                src="/vuesaxlineartetherusdt.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent16}>
          <div className={styles.frameWrapper4}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon6} alt="" src="/vector8.svg" />
              <img
                className={styles.vuesaxlinearuserSquareIcon}
                alt=""
                src="/vuesaxlinearheartslash12.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon6} alt="" src="/vector19.svg" />
              <img
                className={styles.vuesaxlinearuserSquareIcon}
                alt=""
                src="/vuesaxlinearheartslash13.svg"
              />
            </div>
          </div>
          <div className={styles.frameWrapper6}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon6} alt="" src="/vector8.svg" />
              <img
                className={styles.vuesaxlinearuserSquareIcon}
                alt=""
                src="/vuesaxlinearheartslash12.svg"
              />
            </div>
          </div>
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
    </>
  );
};

export default ViewPost;
