import type { NextPage } from "next";
import styles from "./mint-nft-container.module.css";

const MintNftContainer: NextPage = () => {
  return (
    <div className={styles.upload}>
      <button className={styles.mintNftButton} autoFocus>
        <div className={styles.text}>MINT NFT</div>
      </button>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <div className={styles.uploadsection}>
        <img
          className={styles.uploadAreaIcon}
          alt=""
          src="/upload-area@2x.png"
        />
        <div className={styles.addimage}>
          <input className={styles.button} type="file" />
          <div className={styles.or}>
            <div className={styles.orParent}>
              <div className={styles.or1}>Or</div>
              <img
                className={styles.groupChild}
                alt=""
                src="/group-481541.svg"
              />
            </div>
          </div>
          <div className={styles.dragYourDocuments}>
            Drag your documents, photos, or videos here to start uploading.
          </div>
          <img className={styles.folderIcon} alt="" src="/folder@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default MintNftContainer;
