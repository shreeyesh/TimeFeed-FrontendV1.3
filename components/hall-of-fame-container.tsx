import type { NextPage } from "next";
import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import RankContainer from "./rank-container";
import styles from "./hall-of-fame-container.module.css";

const HallOfFameContainer: NextPage = () => {
  return (
    <div className={styles.desktop2}>
      <div className={styles.frameParent}>
        <div className={styles.hofheaderParent}>
          <div className={styles.hofheader}>
            <div className={styles.hallOfFame}>Hall of Fame</div>
            <div className={styles.rankfilters}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  colorScheme="nftwhite"
                >
                  Category
                </MenuButton>
                <MenuList>
                  <MenuItem value="Art">Art</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="Comedy">Comedy</MenuItem>
                  <MenuItem value="Drama">Drama</MenuItem>
                  <MenuItem value="Politics">Politics</MenuItem>
                  <MenuItem value="Movies">Movies</MenuItem>
                </MenuList>
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
            <RankContainer
              prop="1"
              image29="/image-2910@2x.png"
              label="Bobby Axelrod"
              description="23.46"
              divider="/divider16.svg"
              prop1="4"
              image291="/image-2911@2x.png"
              label1="Shany Rodriguez"
              description1="22.28"
              divider1="/divider17.svg"
              prop2="7"
              image292="/image-2912@2x.png"
              label2="Damaris Leffler"
              description2="21.51"
              divider2="/divider18.svg"
            />
            <RankContainer
              prop="2"
              image29="/image-2913@2x.png"
              label="Christina Williams"
              description="23.40"
              divider="/divider19.svg"
              prop1="5"
              image291="/image-2914@2x.png"
              label1="Krystina Mosciski"
              description1="22.12"
              divider1="/divider20.svg"
              prop2="8"
              image292="/image-2915@2x.png"
              label2="Mya Tillman"
              description2="21.37"
              divider2="/divider21.svg"
            />
            <RankContainer
              prop="3"
              image29="/image-2916@2x.png"
              label="Gavin Belson"
              description="23.00"
              divider="/divider22.svg"
              prop1="6"
              image291="/image-2917@2x.png"
              label1="Henry Denesik"
              description1="21.93"
              divider1="/divider23.svg"
              prop2="9"
              image292="/image-2918@2x.png"
              label2="Haley Douglas"
              description2="21.15"
              divider2="/divider24.svg"
            />
            <RankContainer
              prop="10"
              image29="/image-2919@2x.png"
              label="Kabir Malhotra"
              description="22.64"
              divider="/divider25.svg"
              prop1="11"
              image291="/image-2920@2x.png"
              label1="Bored Ape Yacht"
              description1="21.72"
              divider1="/divider26.svg"
              prop2="12"
              image292="/image-2921@2x.png"
              label2="Roman Klocko"
              description2="20.87"
              divider2="/divider27.svg"
            />
          </div>
        </div>
        <img
          className={styles.vuesaxlinearrankingIcon}
          alt=""
          src="/vuesaxlinearranking.svg"
        />
      </div>
    </div>
  );
};

export default HallOfFameContainer;
