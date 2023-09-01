import Image from "next/image";
import styles from "./RatesTable.module.scss";

const RatesTable = () => {
  return (
    <table className={styles.Table}>
      <tr className={styles.TableHeaderRow}>
        <td className={styles.TableHeaderCell}></td>
        <td className={styles.TableHeaderCell}>Currency Pair</td>
        <td className={styles.TableHeaderCell}>Buying</td>
        <td className={styles.TableHeaderCell}>Selling</td>
      </tr>

      <tr>
        <td className={styles.EmptyCell}></td>
        <td className={styles.TableCell}>
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693537362/ibx-website-v2/icons/twemoji_flag-us-outlying-islands_ypcncl.svg"
            width={26}
            height={26}
            alt=""
          />
          <span>USD/NGN</span>
        </td>
        <td className={styles.TableCell}>900</td>
        <td className={styles.TableCell}>910</td>
      </tr>
      <tr>
        <td className={styles.EmptyCell}></td>
        <td className={styles.TableCell}>
          {" "}
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693537362/ibx-website-v2/icons/twemoji_flag-united-kingdom_jdm5k2.svg"
            width={26}
            height={26}
            alt=""
          />
          <span>GBP/NGN</span>
        </td>
        <td className={styles.TableCell}>1145</td>
        <td className={styles.TableCell}>1160</td>
      </tr>
      <tr>
        <td className={styles.EmptyCell}></td>
        <td className={styles.TableCell}>
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693537362/ibx-website-v2/icons/twemoji_flag-germany_utsyr7.svg"
            width={26}
            height={26}
            alt=""
          />
          <span>EUR/NGN</span>
        </td>
        <td className={styles.TableCell}>850</td>
        <td className={styles.TableCell}>960</td>
      </tr>
      <tr>
        <td className={styles.EmptyCell}></td>
        <td className={styles.TableCell}>
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693537362/ibx-website-v2/icons/emojione-v1_flag-for-switzerland_brdfx3.svg"
            width={26}
            height={26}
            alt=""
          />
          <span>CHF/NGN</span>
        </td>
        <td className={styles.TableCell}>872</td>
        <td className={styles.TableCell}>873</td>
      </tr>
      <tr>
        <td className={styles.EmptyCell}></td>
        <td className={styles.TableCell}>
          <Image
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693537346/ibx-website-v2/icons/emojione-v1_flag-for-japan_uwwkpg.svg"
            width={26}
            height={26}
            alt=""
          />
          <span>JPY/NGN</span>
        </td>
        <td className={styles.TableCell}>5.2847</td>
        <td className={styles.TableCell}>5.2916</td>
      </tr>
    </table>
  );
};

export default RatesTable;
