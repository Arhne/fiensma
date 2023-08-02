import Image from "next/image";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <div className={`row ${styles.Landing}`}>
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <img src="/landing_image.svg" alt="" />
        </div>
      </div>
    </main>
  );
}
