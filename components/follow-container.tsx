import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./follow-container.module.css";

type FollowContainerType = {
  imageDimensions?: string;
  imageIds?: string;
  imageDimensionIds?: string;
  imageDimensionAndIds?: string;
  imageDimensionAndIds2?: string;
  smallImageDimensionsAndId?: string;
  imageDimensionAndIds3?: string;
  largeImageDimensionsAndId?: string;
  smallImageDimensionAndIds?: string;
  imageDimensionAndIds4?: string;
  smallImageIds?: string;
  smallImageDimensionAndIds2?: string;

  /** Style props */
  propMarginLeft?: Property.MarginLeft;
};

const FollowContainer: NextPage<FollowContainerType> = ({
  imageDimensions,
  imageIds,
  imageDimensionIds,
  imageDimensionAndIds,
  imageDimensionAndIds2,
  smallImageDimensionsAndId,
  imageDimensionAndIds3,
  largeImageDimensionsAndId,
  smallImageDimensionAndIds,
  imageDimensionAndIds4,
  smallImageIds,
  smallImageDimensionAndIds2,
  propMarginLeft,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.postcardParent}>
        <div className={styles.postcard}>
          <div className={styles.auctions}>
            <img className={styles.image50Icon} alt="" src={imageDimensions} />
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
                className={styles.verified2Icon}
                alt=""
                src="/verified-2@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <input className={styles.groupChild} type="checkbox" autoFocus />
              <img
                className={styles.vuesaxboldheartIcon}
                alt=""
                src="/vuesaxboldheart1.svg"
              />
            </div>
            <input className={styles.auctionsChild} type="checkbox" />
            <img
              className={styles.vuesaxlinearheartSlashIcon}
              alt=""
              src="/vuesaxlinearheartslash1.svg"
            />
            <button className={styles.rectangleGroup}>
              <img
                className={styles.groupItem}
                alt=""
                loading="lazy"
                src={imageIds}
              />
              <div className={styles.iconlyboldgraphParent}>
                <img className={styles.iconlyboldgraph} alt="" />
                <img className={styles.vuesaxlinearunlimitedIcon} alt="" />
                <img
                  className={styles.path33909Icon}
                  alt=""
                  src={imageDimensionIds}
                />
                <div className={styles.div}>05:02:00</div>
              </div>
            </button>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.formationOfUseParent}>
                <div className={styles.formationOfUse}>Formation of USE</div>
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
          <div className={styles.timeGained}>Time Gained</div>
          <div className={styles.div1}>1:28</div>
        </div>
        <div className={styles.postcard1}>
          <div className={styles.postcard}>
            <div className={styles.auctions}>
              <img
                className={styles.image58Icon}
                alt=""
                src={imageDimensionAndIds}
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
                  className={styles.verified2Icon}
                  alt=""
                  src="/verified-2@2x.png"
                />
              </div>
              <div className={styles.rectangleParent}>
                <input
                  className={styles.groupChild}
                  type="checkbox"
                  autoFocus
                />
                <img
                  className={styles.vuesaxboldheartIcon}
                  alt=""
                  src="/vuesaxboldheart1.svg"
                />
              </div>
              <input className={styles.auctionsChild} type="checkbox" />
              <img
                className={styles.vuesaxlinearheartSlashIcon}
                alt=""
                src="/vuesaxlinearheartslash1.svg"
              />
              <button className={styles.rectangleGroup}>
                <img
                  className={styles.groupItem}
                  alt=""
                  loading="lazy"
                  src={imageDimensionAndIds2}
                />
                <div className={styles.iconlyboldgraphGroup}>
                  <img className={styles.iconlyboldgraph} alt="" />
                  <img className={styles.vuesaxlinearunlimitedIcon} alt="" />
                  <img
                    className={styles.path33909Icon}
                    alt=""
                    src={smallImageDimensionsAndId}
                  />
                  <div className={styles.div}>05:02:00</div>
                </div>
              </button>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.formationOfUseParent}>
                  <div className={styles.formationOfUse}>Formation of USE</div>
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
            <div className={styles.timeGained}>Time Gained</div>
            <div className={styles.div1}>1:28</div>
          </div>
        </div>
      </div>
      <div className={styles.postcardGroup}>
        <div className={styles.postcard}>
          <div className={styles.auctions}>
            <img
              className={styles.image50Icon}
              alt=""
              src={imageDimensionAndIds3}
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
                className={styles.verified2Icon}
                alt=""
                src="/verified-2@2x.png"
              />
            </div>
            <div className={styles.rectangleParent}>
              <input className={styles.groupChild} type="checkbox" autoFocus />
              <img
                className={styles.vuesaxboldheartIcon}
                alt=""
                src="/vuesaxboldheart1.svg"
              />
            </div>
            <input className={styles.auctionsChild} type="checkbox" />
            <img
              className={styles.vuesaxlinearheartSlashIcon}
              alt=""
              src="/vuesaxlinearheartslash1.svg"
            />
            <button className={styles.rectangleGroup}>
              <img
                className={styles.groupItem}
                alt=""
                loading="lazy"
                src={largeImageDimensionsAndId}
              />
              <div className={styles.iconlyboldgraphParent}>
                <img className={styles.iconlyboldgraph} alt="" />
                <img className={styles.vuesaxlinearunlimitedIcon} alt="" />
                <img
                  className={styles.path33909Icon}
                  alt=""
                  src={smallImageDimensionAndIds}
                />
                <div className={styles.div}>05:02:00</div>
              </div>
            </button>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.formationOfUseParent}>
                <div className={styles.formationOfUse}>Formation of USE</div>
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
          <div className={styles.timeGained}>Time Gained</div>
          <div className={styles.div1}>1:28</div>
        </div>
        <div className={styles.postcard1}>
          <div className={styles.postcard}>
            <div className={styles.auctions}>
              <img
                className={styles.image58Icon}
                alt=""
                src={imageDimensionAndIds4}
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
                  className={styles.verified2Icon}
                  alt=""
                  src="/verified-2@2x.png"
                />
              </div>
              <div className={styles.rectangleParent}>
                <input
                  className={styles.groupChild}
                  type="checkbox"
                  autoFocus
                />
                <img
                  className={styles.vuesaxboldheartIcon}
                  alt=""
                  src="/vuesaxboldheart1.svg"
                />
              </div>
              <input className={styles.auctionsChild} type="checkbox" />
              <img
                className={styles.vuesaxlinearheartSlashIcon}
                alt=""
                src="/vuesaxlinearheartslash1.svg"
              />
              <button className={styles.rectangleGroup}>
                <img
                  className={styles.groupItem}
                  alt=""
                  loading="lazy"
                  src={smallImageIds}
                />
                <div className={styles.iconlyboldgraphGroup}>
                  <img className={styles.iconlyboldgraph} alt="" />
                  <img className={styles.vuesaxlinearunlimitedIcon} alt="" />
                  <img
                    className={styles.path33909Icon}
                    alt=""
                    src={smallImageDimensionAndIds2}
                  />
                  <div className={styles.div}>05:02:00</div>
                </div>
              </button>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.formationOfUseParent}>
                  <div className={styles.formationOfUse}>Formation of USE</div>
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
            <div className={styles.timeGained}>Time Gained</div>
            <div className={styles.div1}>1:28</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowContainer;
