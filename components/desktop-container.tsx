import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./desktop-container.module.css";

const DesktopContainer: NextPage = () => {
  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image64']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
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
                    className={styles.frameChild}
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
                <div className={styles.frameDiv}>
                  <div className={styles.rectangleGroup}>
                    <input className={styles.frameItem} type="checkbox" />
                    <img
                      className={styles.vuesaxlinearheartSlashIcon}
                      alt=""
                      src="/vuesaxlinearheartslash1.svg"
                    />
                  </div>
                  <div className={styles.rectangleContainer}>
                    <input className={styles.frameInner} type="checkbox" />
                    <img
                      className={styles.vuesaxboldheartIcon}
                      alt=""
                      src="/vuesaxboldheart1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
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
              <div className={styles.auctions3}>
                <div className={styles.rectangleParent1}>
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
                  <div className={styles.rectangleParent2}>
                    <img
                      className={styles.frameChild}
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
                  <div className={styles.frameParent3}>
                    <div className={styles.frameParent2}>
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
                            Climate change is a major environmental challenge ..
                          </div>
                        </div>
                      </div>
                    </div>
                    <div />
                  </div>
                </div>
                <img
                  className={styles.frameDiv}
                  alt=""
                  src="/group-34290.svg"
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
                    className={styles.frameChild}
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
                  className={styles.frameDiv}
                  alt=""
                  src="/group-34289.svg"
                />
              </div>
              <div className={styles.auctionsInner}>
                <div className={styles.frameParent2}>
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
              <div className={styles.auctions5}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-565@2x.png"
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
                    className={styles.frameChild}
                    alt=""
                    src="/blurText5@2x.png"
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
                  className={styles.frameDiv}
                  alt=""
                  src="/group-34242.svg"
                />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent2}>
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
            <div className={styles.auctions6}>
              <div className={styles.auctions5}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-583@2x.png"
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
                    className={styles.frameChild}
                    alt=""
                    src="/blurText6@2x.png"
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
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342901.svg"
                />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent2}>
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
              <div className={styles.div9}>1:28</div>
            </div>
            <div className={styles.auctions10}>
              <div className={styles.auctions3}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-57@2x.png"
                />
                <img
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342902.svg"
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
                    className={styles.frameChild}
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
              <div className={styles.frameParent10}>
                <div className={styles.frameParent2}>
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
              <div className={styles.auctions5}>
                <img
                  className={styles.image60Icon}
                  alt=""
                  src="/image-60@2x.png"
                />
                <img
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342903.svg"
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
                    className={styles.frameChild}
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
              <div className={styles.frameParent6}>
                <div className={styles.frameParent2}>
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
              <div className={styles.div12}>1:28</div>
            </div>
          </div>
          <div className={styles.auctionsGroup}>
            <div className={styles.auctions6}>
              <div className={styles.auctions5}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-64@2x.png"
                  data-scroll-to="image64"
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
                    className={styles.frameChild}
                    alt=""
                    src="/blurText9@2x.png"
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
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342904.svg"
                />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent2}>
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
              <div className={styles.div14}>1:28</div>
            </div>
            <div className={styles.auctions10}>
              <div className={styles.auctions3}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-63@2x.png"
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
                    className={styles.frameChild}
                    alt=""
                    src="/blurText10@2x.png"
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
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342891.svg"
                />
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.frameParent2}>
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
            <div className={styles.auctions10}>
              <div className={styles.auctions3}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-62@2x.png"
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
                    className={styles.frameChild}
                    alt=""
                    src="/blurText11@2x.png"
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
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342892.svg"
                />
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.frameParent2}>
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
            <div className={styles.auctions20}>
              <div className={styles.auctions5}>
                <img
                  className={styles.image56Icon}
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
                    className={styles.frameChild}
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
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342893.svg"
                />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent2}>
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
                        Gun control laws vary widely around the world, with some
                        countries having...
                      </div>
                    </div>
                  </div>
                </div>
                <div />
              </div>
              <div className={styles.timeGained7}>Time Gained</div>
              <div className={styles.div18}>1:28</div>
            </div>
          </div>
          <div className={styles.auctionsParent}>
            <div className={styles.auctions4}>
              <div className={styles.auctions5}>
                <img
                  className={styles.image73Icon}
                  alt=""
                  src="/image-73@2x.png"
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
                    className={styles.frameChild}
                    alt=""
                    src="/blurText13@2x.png"
                  />
                  <div className={styles.iconlyboldgraphParent}>
                    <img
                      className={styles.iconlyboldgraph}
                      alt=""
                      src="/iconlyboldgraph1.svg"
                    />
                    <div className={styles.div}>05:38:40</div>
                  </div>
                </div>
                <img
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342905.svg"
                />
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent2}>
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
              <div className={styles.div20}>1:28</div>
            </div>
            <div className={styles.auctions6}>
              <div className={styles.auctions3}>
                <img
                  className={styles.image73Icon}
                  alt=""
                  src="/image-72@2x.png"
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
                    className={styles.frameChild}
                    alt=""
                    src="/blurText14@2x.png"
                  />
                  <div className={styles.iconlyboldgraphParent}>
                    <img
                      className={styles.iconlyboldgraph}
                      alt=""
                      src="/iconlyboldgraph1.svg"
                    />
                    <div className={styles.div}>05:38:40</div>
                  </div>
                </div>
                <img
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342894.svg"
                />
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.frameParent2}>
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
              <div className={styles.auctions3}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-621@2x.png"
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
                    className={styles.frameChild}
                    alt=""
                    src="/blurText15@2x.png"
                  />
                  <div className={styles.iconlyboldgraphParent}>
                    <img
                      className={styles.iconlyboldgraph}
                      alt=""
                      src="/iconlyboldgraph1.svg"
                    />
                    <div className={styles.div}>05:38:40</div>
                  </div>
                </div>
                <img
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342895.svg"
                />
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.frameParent2}>
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
              <div className={styles.auctions3}>
                <img
                  className={styles.image56Icon}
                  alt=""
                  src="/image-651@2x.png"
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
                    className={styles.frameChild}
                    alt=""
                    src="/blurText16@2x.png"
                  />
                  <div className={styles.iconlyboldgraphParent}>
                    <img
                      className={styles.iconlyboldgraph}
                      alt=""
                      src="/iconlyboldgraph1.svg"
                    />
                    <div className={styles.div}>05:38:40</div>
                  </div>
                </div>
                <img
                  className={styles.frameDiv}
                  alt=""
                  src="/group-342896.svg"
                />
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.frameParent2}>
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
        <div className={styles.arrowRight}>
          <img className={styles.vectorIcon} alt="" src="/vector5@2x.png" />
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright1.svg"
          />
          <button className={styles.vuesaxlinearrefresh}>
            <img className={styles.refreshIcon} alt="" src="/refresh.svg" />
          </button>
          <img className={styles.vectorIcon1} alt="" />
        </div>
      </button>
    </div>
  );
};

export default DesktopContainer;
