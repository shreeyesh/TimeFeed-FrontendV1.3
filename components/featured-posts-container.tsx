import type { NextPage } from "next";
import { useCallback } from "react";
import FormationContainer from "./formation-container";
import AuctionsContainer from "./auctions-container";
import AuctionContainer from "./auction-container";
import AuctionsWrapper from "./auctions-wrapper";
import styles from "./featured-posts-container.module.css";
import { useRouter } from "next/router";

const FeaturedPostsContainer: NextPage = () => {
  const router = useRouter();
  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='image64']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  const onClickPost = useCallback(() => {
    router.push("/view-post");
  }, [router]);


  return (
    <div className={styles.desktop3}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
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
                  <div className={styles.formationOfUseParent} >
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
                      <div className={styles.description} onClick ={onClickPost}>
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
                            Climate change is a major environmental challenge ..
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
                  src="/group-342906.svg"
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
                  src="/group-342897.svg"
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
            <div className={styles.auctions}>
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
                    className={styles.groupChild}
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
                  className={styles.groupParent}
                  alt=""
                  src="/group-342421.svg"
                />
              </div>
              <FormationContainer />
              <div className={styles.timeGainedContainer}>
                <div className={styles.timeGained}>Time Gained</div>
                <div className={styles.div5}>1:28</div>
              </div>
            </div>
            <AuctionsContainer
              image58="/image-583@2x.png"
              rectangle3320="/blurText6@2x.png"
              iconlyBoldGraph="/iconlyboldgraph.svg"
              group34290="/group-342907.svg"
            />
            <div className={styles.auctions8}>
              <AuctionContainer
                image57="/image-57@2x.png"
                group34290="/group-342908.svg"
                rectangle3320="/blurText7@2x.png"
              />
              <FormationContainer />
            </div>
            <div className={styles.auctions}>
              <AuctionContainer
                image57="/image-60@2x.png"
                group34290="/group-342909.svg"
                rectangle3320="/blurText8@2x.png"
                propBorderRadius="12px"
              />
              <FormationContainer />
              <div className={styles.timeGained4}>Time Gained</div>
              <div className={styles.div8}>1:28</div>
            </div>
          </div>
          <div className={styles.auctionsParent}>
            <AuctionsContainer
              image58="/image-64@2x.png"
              rectangle3320="/blurText9@2x.png"
              iconlyBoldGraph="/iconlyboldgraph.svg"
              group34290="/group-3429010.svg"
              propTop="473px"
              propTop1="473px"
            />
            <AuctionsWrapper
              image63="/image-63@2x.png"
              rectangle3320="/blurText10@2x.png"
              iconlyBoldGraph="/iconlyboldgraph.svg"
              group34289="/group-342898.svg"
            />
            <AuctionsWrapper
              image63="/image-62@2x.png"
              rectangle3320="/blurText11@2x.png"
              iconlyBoldGraph="/iconlyboldgraph.svg"
              group34289="/group-342899.svg"
            />
            <div className={styles.auctions10}>
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
                  src="/group-3428910.svg"
                />
              </div>
              <div className={styles.frameParent5}>
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
                      <div className={styles.description3}>
                        Gun control laws vary widely around the world, with some
                        countries having...
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
          <div className={styles.auctionsParent}>
            <AuctionsContainer
              image58="/image-73@2x.png"
              rectangle3320="/blurText13@2x.png"
              iconlyBoldGraph="/iconlyboldgraph1.svg"
              group34290="/group-3429011.svg"
              propTop="463px"
              propTop1="463px"
            />
            <AuctionsWrapper
              image63="/image-72@2x.png"
              rectangle3320="/blurText14@2x.png"
              iconlyBoldGraph="/iconlyboldgraph1.svg"
              group34289="/group-3428911.svg"
            />
            <AuctionsWrapper
              image63="/image-621@2x.png"
              rectangle3320="/blurText15@2x.png"
              iconlyBoldGraph="/iconlyboldgraph1.svg"
              group34289="/group-3428912.svg"
            />
            <AuctionsWrapper
              image63="/image-651@2x.png"
              rectangle3320="/blurText16@2x.png"
              iconlyBoldGraph="/iconlyboldgraph1.svg"
              group34289="/group-3428913.svg"
            />
          </div>
        </div>
        <img className={styles.vuesaxlineararrowLeftIcon} alt="" />
      </div>
      <button className={styles.vuesaxlineararrowRight}>
        <div className={styles.vuesaxlineararrowRight1}>
          <div className={styles.arrowRight}>
            <img className={styles.vectorIcon} alt="" src="/vector5@2x.png" />
            <img
              className={styles.vuesaxlineararrowRightIcon}
              alt=""
              src="/arrowright1.svg"
            />
            <button className={styles.vuesaxlinearrefresh}>
              <img className={styles.refreshIcon} alt="" src="/refresh.svg" />
            </button>
            <img className={styles.vectorIcon1} alt="" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default FeaturedPostsContainer;
