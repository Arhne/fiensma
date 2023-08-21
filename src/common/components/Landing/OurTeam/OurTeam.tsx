import { moneyImageLoader } from "@/common/Utils/imageLoaders";
import Image from "next/image";

import styles from "./OurTeam.module.scss";

const OurTeam = () => {
  return (
    <div
      className={`d-flex justify-content-between ${styles.OurTeamContainer}`}
    >
      <div className={`col-4 ${styles.LeftColumn}`}>
        <div className="row mb-3">
          <div className="col-6">
            <Image
              loader={() =>
                moneyImageLoader(
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692603430/ibx-website-v2/tem-members/dummy_member_3_lndlq0.png"
                )
              }
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1692603430/ibx-website-v2/tem-members/dummy_member_3_lndlq0.png"
              alt=""
              width={191}
              height={191}
            />
          </div>
          <div className="col-6">
            <Image
              loader={() =>
                moneyImageLoader(
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692603430/ibx-website-v2/tem-members/dummy_member_1_ggp0lo.png"
                )
              }
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1692603430/ibx-website-v2/tem-members/dummy_member_1_ggp0lo.png"
              alt=""
              width={190}
              height={190}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Image
              loader={() =>
                moneyImageLoader(
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692603430/ibx-website-v2/tem-members/dummy_member_2_du43up.png"
                )
              }
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1692603430/ibx-website-v2/tem-members/dummy_member_2_du43up.png"
              alt=""
              width={190}
              height={190}
            />
          </div>
          <div className="col-6">
            <Image
              loader={() =>
                moneyImageLoader(
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1692603430/ibx-website-v2/tem-members/dummy_member_4_hjaomc.png"
                )
              }
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1692603430/ibx-website-v2/tem-members/dummy_member_4_hjaomc.png"
              alt=""
              width={190}
              height={190}
            />
          </div>
        </div>
      </div>
      <div className={`col-4 ${styles.RightColumn}`}>
        <h3 className={styles.HeaderText}>Meet our Team</h3>
        <p>
          Our team of credible professionals with proven records of running
          successful businesses across digital channels
        </p>

        <button className={styles.ActionButton}>Learn More</button>
      </div>
    </div>
  );
};

export default OurTeam;
