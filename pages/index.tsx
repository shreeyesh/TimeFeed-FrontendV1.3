import type { NextPage } from "next";
import { useCallback } from "react";
import OpinionFighter from "../components/opinion-fighter";
import FameContainer from "../components/fame-container";
import AuctionsFrame from "../components/auctions-frame";
import FormContainer from "../components/form-container";
import WithdrawContainer from "../components/withdraw-container";
import MobileCTAContainer from "../components/mobile-c-t-a-container";
import styles from "./index.module.css";

const HomePage2: NextPage = () => {
  const onDownloadBadgeAppStoreBadClick = useCallback(() => {
    window.open(
      "https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclid=CjwKCAiA8OmdBhAgEiwAShr40_H9ceIl6gs0t6_Bf07j8qQPi3LqjeaiOz9bL_Ha5u61LSwm9hlMLRoCPyMQAvD_BwE&gclsrc=aw.ds&pli=1"
    );
  }, []);

  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image64']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='navbar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homepage}>
      <OpinionFighter />
      <div className={styles.logoClouds1Parent} data-scroll-to="frameContainer">
        <div className={styles.logoClouds1}>
          <div className={styles.logosSection}>
            <img className={styles.dividerIcon} alt="" src="/divider28.svg" />
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
            <img className={styles.dividerIcon} alt="" src="/divider29.svg" />
          </div>
        </div>
        <FameContainer />
        <div className={styles.fading} />
        <div className={styles.desktop1}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup} data-scroll-to="frameContainer1">
              <div className={styles.featuredPostsWrapper}>
                <div className={styles.featuredPosts}>Featured Posts</div>
              </div>
              <button className={styles.button} onClick={onButton2Click}>
                <div className={styles.create}>See All</div>
              </button>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.auctionsParent}>
                <div className={styles.auctions}>
                  <div className={styles.auctions1}>
                    <img
                      className={styles.image49Icon}
                      alt=""
                      src="/image-502@2x.png"
                    />
                    <div className={styles.profileParent}>
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
                          src="/image-296@2x.png"
                        />
                      </div>
                      <div className={styles.profile2}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-297@2x.png"
                        />
                      </div>
                      <div className={styles.profile3}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-293@2x.png"
                        />
                      </div>
                      <div className={styles.profile4}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-294@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-2@2x.png"
                      />
                    </div>
                    <div className={styles.rectangleParent}>
                      <img
                        className={styles.groupChild}
                        alt=""
                        src="/blurText1@2x.png"
                      />
                      <div className={styles.iconlyboldgraphParent}>
                        <img
                          className={styles.iconlyboldgraph}
                          alt=""
                          src="/iconlyboldgraph.svg"
                        />
                        <div className={styles.div}>05:38:40</div>
                      </div>
                    </div>
                    <div className={styles.groupParent}>
                      <div className={styles.rectangleGroup}>
                        <input className={styles.groupItem} type="checkbox" />
                        <img
                          className={styles.vuesaxlinearheartSlashIcon}
                          alt=""
                          src="/vuesaxlinearheartslash1.svg"
                        />
                      </div>
                      <div className={styles.rectangleContainer}>
                        <input className={styles.groupInner} type="checkbox" />
                        <img
                          className={styles.vuesaxboldheartIcon}
                          alt=""
                          src="/vuesaxboldheart1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                    <div className={styles.timeGainedParent}>
                      <div className={styles.timeGained}>Time Gained</div>
                      <div className={styles.div1}>1:28</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.auctionsIcon}
                  alt=""
                  src="/auctions1@2x.png"
                />
                <div className={styles.auctions2}>
                  <div className={styles.auctions1}>
                    <div className={styles.groupDiv}>
                      <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="/blurText2@2x.png"
                      />
                      <img
                        className={styles.image46Icon}
                        alt=""
                        src="/image-462@2x.png"
                      />
                      <div className={styles.rectangleParent1}>
                        <img
                          className={styles.groupChild}
                          alt=""
                          src="/blurText3@2x.png"
                        />
                        <div className={styles.iconlyboldgraphParent}>
                          <img
                            className={styles.iconlyboldgraph}
                            alt=""
                            src="/iconlyboldgraph.svg"
                          />
                          <div className={styles.div}>05:38:40</div>
                        </div>
                      </div>
                      <div className={styles.frameParent2}>
                        <div className={styles.frameParent1}>
                          <div className={styles.formationOfUseParent}>
                            <div className={styles.formationOfUse}>
                              Climate Change: A Global Crisis
                            </div>
                            <img
                              className={styles.image29Icon5}
                              alt=""
                              src="/image-295@2x.png"
                            />
                          </div>
                          <div className={styles.frameWrapper}>
                            <div className={styles.descriptionWrapper}>
                              <div className={styles.description1}>
                                Climate change is a major environmental
                                challenge ..
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                    </div>
                    <img
                      className={styles.groupParent}
                      alt=""
                      src="/group-3429012.svg"
                    />
                    <div className={styles.profileParent}>
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
                          src="/image-296@2x.png"
                        />
                      </div>
                      <div className={styles.profile2}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-297@2x.png"
                        />
                      </div>
                      <div className={styles.profile3}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-293@2x.png"
                        />
                      </div>
                      <div className={styles.profile4}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-294@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.timeGained1}>Time Gained</div>
                  <div className={styles.div3}>1:28</div>
                </div>
                <div className={styles.auctions4}>
                  <div className={styles.auctions5}>
                    <img
                      className={styles.image45Icon}
                      alt=""
                      src="/image-45@2x.png"
                    />
                    <div className={styles.profileParent}>
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
                          src="/image-296@2x.png"
                        />
                      </div>
                      <div className={styles.profile2}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-297@2x.png"
                        />
                      </div>
                      <div className={styles.profile3}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-293@2x.png"
                        />
                      </div>
                      <div className={styles.profile4}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-294@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-2@2x.png"
                      />
                    </div>
                    <div className={styles.rectangleParent}>
                      <img
                        className={styles.groupChild}
                        alt=""
                        src="/blurText4@2x.png"
                      />
                      <div className={styles.iconlyboldgraphParent}>
                        <img
                          className={styles.iconlyboldgraph}
                          alt=""
                          src="/iconlyboldgraph.svg"
                        />
                        <div className={styles.div}>05:38:40</div>
                      </div>
                    </div>
                    <img
                      className={styles.groupParent}
                      alt=""
                      src="/group-3428914.svg"
                    />
                  </div>
                  <div className={styles.auctionsInner}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Immigration: A Divisive Issue
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.description2}>
                            Immigration is a highly contentious issue in many
                            countries...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.timeGainedGroup}>
                    <div className={styles.timeGained}>Time Gained</div>
                    <div className={styles.div5}>1:28</div>
                  </div>
                </div>
              </div>
              <div className={styles.auctionsGroup}>
                <div className={styles.auctions6}>
                  <AuctionsFrame
                    imageDimensions="/image-565@2x.png"
                    imageIds="/blurText5@2x.png"
                    imageDimensionIds="/iconlyboldgraph.svg"
                    imageSizeIds="/group-342422.svg"
                  />
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                  <div className={styles.timeGainedContainer}>
                    <div className={styles.timeGained}>Time Gained</div>
                    <div className={styles.div5}>1:28</div>
                  </div>
                </div>
                <div className={styles.auctions}>
                  <AuctionsFrame
                    imageDimensions="/image-583@2x.png"
                    imageIds="/blurText6@2x.png"
                    imageDimensionIds="/iconlyboldgraph.svg"
                    imageSizeIds="/group-3429013.svg"
                  />
                  <div className={styles.frameParent7}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                  <div className={styles.timeGained4}>Time Gained</div>
                  <div className={styles.div7}>1:28</div>
                </div>
                <div className={styles.auctions8}>
                  <div className={styles.auctions1}>
                    <img
                      className={styles.image57Icon}
                      alt=""
                      src="/image-57@2x.png"
                    />
                    <img
                      className={styles.groupParent}
                      alt=""
                      src="/group-3429014.svg"
                    />
                    <div className={styles.profileParent}>
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
                          src="/image-296@2x.png"
                        />
                      </div>
                      <div className={styles.profile2}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-297@2x.png"
                        />
                      </div>
                      <div className={styles.profile3}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-293@2x.png"
                        />
                      </div>
                      <div className={styles.profile4}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-294@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-2@2x.png"
                      />
                    </div>
                    <div className={styles.rectangleParent}>
                      <img
                        className={styles.groupChild}
                        alt=""
                        src="/blurText7@2x.png"
                      />
                      <div className={styles.iconlyboldgraphParent}>
                        <img
                          className={styles.iconlyboldgraph}
                          alt=""
                          src="/iconlyboldgraph.svg"
                        />
                        <div className={styles.div}>05:38:40</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent9}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                </div>
                <div className={styles.auctions}>
                  <div className={styles.auctions5}>
                    <img
                      className={styles.image60Icon}
                      alt=""
                      src="/image-60@2x.png"
                    />
                    <img
                      className={styles.groupParent}
                      alt=""
                      src="/group-3429015.svg"
                    />
                    <div className={styles.profileParent}>
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
                          src="/image-296@2x.png"
                        />
                      </div>
                      <div className={styles.profile2}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-297@2x.png"
                        />
                      </div>
                      <div className={styles.profile3}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-293@2x.png"
                        />
                      </div>
                      <div className={styles.profile4}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-294@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-2@2x.png"
                      />
                    </div>
                    <div className={styles.rectangleParent}>
                      <img
                        className={styles.groupChild}
                        alt=""
                        src="/blurText8@2x.png"
                      />
                      <div className={styles.iconlyboldgraphParent}>
                        <img
                          className={styles.iconlyboldgraph}
                          alt=""
                          src="/iconlyboldgraph.svg"
                        />
                        <div className={styles.div}>05:38:40</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                  <div className={styles.timeGained5}>Time Gained</div>
                  <div className={styles.div10}>1:28</div>
                </div>
              </div>
              <div className={styles.auctionsGroup}>
                <div className={styles.auctions}>
                  <AuctionsFrame
                    imageDimensions="/image-64@2x.png"
                    imageIds="/blurText9@2x.png"
                    imageDimensionIds="/iconlyboldgraph.svg"
                    imageSizeIds="/group-3429016.svg"
                  />
                  <div className={styles.frameParent7}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                  <div className={styles.timeGained6}>Time Gained</div>
                  <div className={styles.div11}>1:28</div>
                </div>
                <div className={styles.auctions6}>
                  <AuctionsFrame
                    imageDimensions="/image-63@2x.png"
                    imageIds="/blurText10@2x.png"
                    imageDimensionIds="/iconlyboldgraph.svg"
                    imageSizeIds="/group-3428915.svg"
                  />
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                </div>
                <div className={styles.auctions6}>
                  <AuctionsFrame
                    imageDimensions="/image-62@2x.png"
                    imageIds="/blurText11@2x.png"
                    imageDimensionIds="/iconlyboldgraph.svg"
                    imageSizeIds="/group-3428916.svg"
                  />
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                </div>
                <div className={styles.auctions15}>
                  <div className={styles.auctions5}>
                    <img
                      className={styles.image57Icon}
                      alt=""
                      src="/image-65@2x.png"
                    />
                    <div className={styles.profileParent}>
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
                          src="/image-296@2x.png"
                        />
                      </div>
                      <div className={styles.profile2}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-297@2x.png"
                        />
                      </div>
                      <div className={styles.profile3}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-293@2x.png"
                        />
                      </div>
                      <div className={styles.profile4}>
                        <img
                          className={styles.image29Icon}
                          alt=""
                          src="/image-294@2x.png"
                        />
                      </div>
                      <img
                        className={styles.verified2Icon}
                        alt=""
                        src="/verified-2@2x.png"
                      />
                    </div>
                    <div className={styles.rectangleParent}>
                      <img
                        className={styles.groupChild}
                        alt=""
                        src="/blurText12@2x.png"
                      />
                      <div className={styles.iconlyboldgraphParent}>
                        <img
                          className={styles.iconlyboldgraph}
                          alt=""
                          src="/iconlyboldgraph.svg"
                        />
                        <div className={styles.div}>05:38:40</div>
                      </div>
                    </div>
                    <img
                      className={styles.groupParent}
                      alt=""
                      src="/group-3428917.svg"
                    />
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Gun Control: Striking the Balance
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.description10}>
                            Gun control laws vary widely around the world, with
                            some countries having...
                          </div>
                        </div>
                      </div>
                    </div>
                    <div />
                  </div>
                  <div className={styles.timeGained7}>Time Gained</div>
                  <div className={styles.div13}>1:28</div>
                </div>
              </div>
              <div className={styles.auctionsParent1}>
                <div className={styles.auctions17}>
                  <AuctionsFrame
                    imageDimensions="/image-73@2x.png"
                    imageIds="/blurText13@2x.png"
                    imageDimensionIds="/iconlyboldgraph1.svg"
                    imageSizeIds="/group-3429017.svg"
                  />
                  <div className={styles.frameParent7}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                  <div className={styles.timeGained8}>Time Gained</div>
                  <div className={styles.div14}>1:28</div>
                </div>
                <div className={styles.auctions}>
                  <AuctionsFrame
                    imageDimensions="/image-72@2x.png"
                    imageIds="/blurText14@2x.png"
                    imageDimensionIds="/iconlyboldgraph1.svg"
                    imageSizeIds="/group-3428918.svg"
                  />
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                </div>
                <div className={styles.auctions}>
                  <AuctionsFrame
                    imageDimensions="/image-621@2x.png"
                    imageIds="/blurText15@2x.png"
                    imageDimensionIds="/iconlyboldgraph1.svg"
                    imageSizeIds="/group-3428919.svg"
                  />
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                </div>
                <div className={styles.auctions}>
                  <AuctionsFrame
                    imageDimensions="/image-651@2x.png"
                    imageIds="/blurText16@2x.png"
                    imageDimensionIds="/iconlyboldgraph1.svg"
                    imageSizeIds="/group-3428920.svg"
                  />
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent1}>
                      <div className={styles.formationOfUseParent}>
                        <div className={styles.formationOfUse}>
                          Formation of USE
                        </div>
                        <img
                          className={styles.image29Icon5}
                          alt=""
                          src="/image-295@2x.png"
                        />
                      </div>
                      <div className={styles.frameWrapper}>
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
                </div>
              </div>
            </div>
            <img className={styles.vuesaxlineararrowLeftIcon} alt="" />
          </div>
          <button className={styles.vuesaxlineararrowRight}>
            <div className={styles.vuesaxlineararrowRight1}>
              <div className={styles.arrowRight}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector5@2x.png"
                />
                <img
                  className={styles.vuesaxlineararrowRightIcon}
                  alt=""
                  src="/arrowright1.svg"
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
            </div>
          </button>
        </div>
      </div>
      <div className={styles.desktop3}>
        <div className={styles.frameParent29}>
          <div className={styles.frameParent30}>
            <div className={styles.frameWrapper15}>
              <div className={styles.trendingPostsParent}>
                <div className={styles.featuredPosts}>Trending Posts</div>
                <div className={styles.formationOfUseParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-343434.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-343444.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.component13}>
              <div className={styles.favoritParent}>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image50Icon}
                      alt=""
                      src="/image-5010@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon45}
                        alt=""
                        src="/image-2922@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart3.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image50Icon}
                      alt=""
                      src="/image-541@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon45}
                        alt=""
                        src="/image-298@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart3.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image50Icon}
                      alt=""
                      src="/image-554@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon45}
                        alt=""
                        src="/image-2922@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart3.svg"
                    />
                    <div className={styles.div15}>82</div>
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
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon45}
                        alt=""
                        src="/image-2922@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart3.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <FormContainer />
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image55Icon1}
                      alt=""
                      src="/image-55@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon}
                        alt=""
                        src="/image-298@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart3.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image55Icon1}
                      alt=""
                      src="/image-555@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon}
                        alt=""
                        src="/image-298@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart3.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.component15}>
              <div className={styles.favoritGroup}>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image55Icon1}
                      alt=""
                      src="/image-5011@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon}
                        alt=""
                        src="/image-2922@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart2.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image55Icon1}
                      alt=""
                      src="/image-543@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon}
                        alt=""
                        src="/image-298@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart2.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image55Icon1}
                      alt=""
                      src="/image-556@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon}
                        alt=""
                        src="/image-2922@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart2.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image55Icon1}
                      alt=""
                      src="/image-542@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon}
                        alt=""
                        src="/image-2922@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart2.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image50Icon}
                      alt=""
                      src="/image-566@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon45}
                        alt=""
                        src="/image-298@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart2.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image50Icon}
                      alt=""
                      src="/image-557@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon45}
                        alt=""
                        src="/image-298@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart2.svg"
                    />
                    <div className={styles.div15}>82</div>
                  </button>
                </div>
                <div className={styles.favorit}>
                  <div className={styles.image50Wrapper}>
                    <img
                      className={styles.image50Icon}
                      alt=""
                      src="/image-5010@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent32}>
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
                  <div className={styles.profileParent4}>
                    <div className={styles.profile30}>
                      <img
                        className={styles.image29Icon45}
                        alt=""
                        src="/image-2922@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon6}
                      alt=""
                      src="/verified-22@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent33}>
                    <div className={styles.featuredPostsWrapper}>
                      <div className={styles.formationOfUse}>
                        Formation of USE
                      </div>
                    </div>
                    <div className={styles.frameWrapper}>
                      <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                          Mark Zuckerberg
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.like}>
                    <img
                      className={styles.vuesaxlineararrowLeftIcon}
                      alt=""
                      src="/vuesaxboldheart2.svg"
                    />
                    <div className={styles.div15}>82</div>
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
                <div className={styles.formationOfUseParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-343435.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-343445.svg"
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
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image29Icon}
                        alt=""
                        src="/image-2923@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}>
                      Shayne McLaughlin
                    </div>
                    <div className={styles.clanByachContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>BYACH</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
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
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image71Icon}
                        alt=""
                        src="/image-71@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}>Kelly Ross</div>
                    <div className={styles.clanGhostContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>GHOST OF ICP</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
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
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image71Icon}
                        alt=""
                        src="/image-69@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}>
                      Agung Prio Rismawan
                    </div>
                    <div className={styles.clanGhostContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>WOLVES</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
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
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image29Icon}
                        alt=""
                        src="/image-2924@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}>
                      Valentina Keebler
                    </div>
                    <div className={styles.clanGhostContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>BYACH</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
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
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image69Icon1}
                        alt=""
                        src="/image-691@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}>
                      Agung Prio Rismawan
                    </div>
                    <div className={styles.clanGhostContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>BYACH</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
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
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image29Icon45}
                        alt=""
                        src="/image-2925@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}>
                      Agung Prio Rismawan
                    </div>
                    <div className={styles.clanGhostContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>BYACH</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
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
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image71Icon}
                        alt=""
                        src="/image-711@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}> Donavon Bradtke</div>
                    <div className={styles.clanGhostContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>GHOST OF ICP</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
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
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image71Icon}
                        alt=""
                        src="/image-692@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}>
                      Orville Rodriguez
                    </div>
                    <div className={styles.clanGhostContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>BYACH</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.creatorcard}>
                  <div className={styles.image66Wrapper}>
                    <img
                      className={styles.image55Icon5}
                      alt=""
                      src="/image-558@2x.png"
                    />
                  </div>
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image29Icon}
                        alt=""
                        src="/image-2926@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}> Emilio Bruen</div>
                    <div className={styles.clanGhostContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>WOLVES</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
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
                  <div className={styles.profileParent17}>
                    <div className={styles.profile43}>
                      <img
                        className={styles.image71Icon}
                        alt=""
                        src="/image-693@2x.png"
                      />
                    </div>
                    <img
                      className={styles.verified2Icon19}
                      alt=""
                      src="/verified-23@2x.png"
                    />
                  </div>
                  <div className={styles.shayneMclaughlinParent}>
                    <div className={styles.featuredPosts}>
                      Georgianna Miller
                    </div>
                    <div className={styles.clanGhostContainer}>
                      <span>{`Clan : `}</span>
                      <span className={styles.byach}>BYACH</span>
                    </div>
                  </div>
                  <div className={styles.info}>
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
                          <div className={styles.featuredPosts}>0.12</div>
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
                          <div className={styles.featuredPosts}>13K</div>
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
        <div className={styles.cta}>
          <div className={styles.bgMask}>
            <div className={styles.bg} />
            <img className={styles.bgMaskChild} alt="" src="/vector-1.svg" />
            <img className={styles.bgMaskItem} alt="" src="/withdrawTIme.svg" />
          </div>
          <div className={styles.withdrawtime}>
            <WithdrawContainer />
            <div className={styles.withdrawdata}>
              <div className={styles.frameParent59}>
                <div className={styles.parent}>
                  <div className={styles.auctionsGroup}>
                    <img
                      className={styles.lineIcon}
                      alt=""
                      src="/line@2x.png"
                    />
                    <div className={styles.details}>
                      <b className={styles.number}>704</b>
                      <div className={styles.label}>Likes</div>
                    </div>
                  </div>
                  <div className={styles.auctionsGroup}>
                    <img className={styles.lineIcon1} alt="" src="/line1.svg" />
                    <div className={styles.details}>
                      <b className={styles.number}>403</b>
                      <div className={styles.label1}>$Time Left</div>
                    </div>
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.auctionsGroup}>
                    <img className={styles.lineIcon1} alt="" src="/line1.svg" />
                    <div className={styles.details}>
                      <b className={styles.number}>301</b>
                      <div className={styles.label1}>Dislikes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.homepageInner}>
        <div className={styles.postDropdownWrapper}>
          <select className={styles.postDropdown}>
            <option value="02:21">Formation of USE</option>
            <option value="01:15">Abortion: A Growing Debate</option>
          </select>
        </div>
      </div>
      <MobileCTAContainer
        layer2="/layer-22.svg"
        group="/group1.svg"
        phoneMockup21="/phone-mockup-1@2x.png"
        onDownloadBadgeAppStoreBadClick={onDownloadBadgeAppStoreBadClick}
      />
      <div className={styles.vuesaxlineararrowRight2} />
      <div className={styles.vuesaxlinearrefresh1} />
      <img className={styles.vectorIcon2} alt="" src="/vector21.svg" />
      <div className={styles.timeGained9}>Time Gained</div>
      <div className={styles.div41}>1:28</div>
      <div className={styles.timeGained10}>Time Gained</div>
      <div className={styles.div42}>1:28</div>
      <div className={styles.timeGained11}>Time Gained</div>
      <div className={styles.div43}>1:28</div>
      <div className={styles.timeGained12}>Time Gained</div>
      <div className={styles.div44}>1:28</div>
      <div className={styles.timeGained13}>Time Gained</div>
      <div className={styles.div45}>1:28</div>
      <div className={styles.timeGained14}>Time Gained</div>
      <div className={styles.div46}>1:28</div>
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
          src="/chevron-right-black-24dp-15-12.svg"
        />
      </button>
    </div>
  );
};

export default HomePage2;
