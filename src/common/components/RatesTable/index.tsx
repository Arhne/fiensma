import Image from "next/image";
import styles from "./RatesTable.module.scss";
import { imageLoader } from "@/common/Utils/imageLoaders";
import { IExchangeSummaryData } from "@/redux/services/exchangeRatesApi/interface";

interface IRatesTable {
  data: IExchangeSummaryData[];
}

const RatesTable = ({ data }: IRatesTable) => {
  return (
    <table className={styles.Table}>
      <tr className={styles.TableHeaderRow}>
        <td className={styles.TableHeaderCell}></td>
        <td className={styles.TableHeaderCell}>Currency Pair</td>
        <td className={styles.TableHeaderCell}>
          Buying (<span className={styles.Currency}>NGN</span>)
        </td>
        <td className={styles.TableHeaderCell}>
          Selling (<span className={styles.Currency}>NGN</span>)
        </td>
      </tr>

      {data.length > 0 &&
        data.map((_item, index) => (
          <tr key={index}>
            <td className={styles.EmptyCell}></td>
            <td className={styles.TableCell}>
              <Image
                src={_item?.currencyPair?.imageUrl}
                alt=""
                width={30}
                height={30}
                className={styles.RateImage}
                loader={() => imageLoader(_item?.currencyPair?.imageUrl)}
              />
              <span>{`${_item?.currencyPair?.tradingCurrency?.name.toUpperCase()}/${_item.currencyPair.baseCurrency.name.toUpperCase()}`}</span>
            </td>
            <td className={styles.TableCell}>{_item?.buyPrice}</td>
            <td className={styles.TableCell}>{_item?.sellPrice}</td>
          </tr>
        ))}
    </table>
  );
};

export default RatesTable;
