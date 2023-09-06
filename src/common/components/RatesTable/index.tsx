import Image from "next/image";
import styles from "./RatesTable.module.scss";

interface IRatesTable {
  data: {
    buyPrice: number;
    sellPrice: number;
    currencyPair: {
      baseCurrency: {
        name: string;
      };
      tradingCurrency: {
        name: string;
      };
    };
  }[];
}

const RatesTable = ({ data }: IRatesTable) => {
  return (
    <table className={styles.Table}>
      <tr className={styles.TableHeaderRow}>
        <td className={styles.TableHeaderCell}></td>
        <td className={styles.TableHeaderCell}>Currency Pair</td>
        <td className={styles.TableHeaderCell}>Buying</td>
        <td className={styles.TableHeaderCell}>Selling</td>
      </tr>

      {data.length > 0 &&
        data.map((_item, index) => (
          <tr key={index}>
            <td className={styles.EmptyCell}></td>
            <td className={styles.TableCell}>
              {/* <Image
                src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693537362/ibx-website-v2/icons/twemoji_flag-us-outlying-islands_ypcncl.svg"
                width={26}
                height={26}
                alt=""
              /> */}
              <span>{`${_item.currencyPair.baseCurrency.name}/${_item?.currencyPair?.tradingCurrency?.name}`}</span>
            </td>
            <td className={styles.TableCell}>{_item?.buyPrice}</td>
            <td className={styles.TableCell}>{_item?.sellPrice}</td>
          </tr>
        ))}
    </table>
  );
};

export default RatesTable;
