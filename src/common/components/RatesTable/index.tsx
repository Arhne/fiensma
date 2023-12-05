import Image from "next/image";
import styles from "./RatesTable.module.scss";
import { imageLoader } from "@/common/Utils/imageLoaders";
import { ITimePeriodData } from "@/redux/services/exchangeRatesApi/interface";

interface IRatesTable {
  data: ITimePeriodData[];
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

      {data &&
        data.length > 0 &&
        data.map((_item, index) => (
          <tr key={index}>
            <td className={styles.EmptyCell}></td>
            <td className={styles.TableCell}>
              <Image
                src={_item?.currencyPair?.tradingCurrency?.imageUrl}
                alt=""
                width={30}
                height={30}
                className={styles.RateImage}
                loader={() =>
                  imageLoader(_item?.currencyPair?.tradingCurrency?.imageUrl)
                }
              />
              <span>{`${_item?.currencyPair?.tradingCurrency?.name.toUpperCase()}/${_item.currencyPair.baseCurrency.name.toUpperCase()}`}</span>
            </td>
            <td className={styles.TableCell}>
              {_item?.buyPrice}
              {_item?.buyTrend === "UP" ? (
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_up_fiqvbw.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.TrendImage}
                  loader={() =>
                    imageLoader(
                      "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_up_fiqvbw.svg"
                    )
                  }
                />
              ) : (
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_down_tmkrx3.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.TrendImage}
                  loader={() =>
                    imageLoader(
                      "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_down_tmkrx3.svg"
                    )
                  }
                />
              )}
            </td>
            <td className={styles.TableCell}>
              {_item?.sellPrice}
              {_item?.sellTrend === "UP" ? (
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_up_fiqvbw.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.TrendImage}
                  loader={() =>
                    imageLoader(
                      "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_up_fiqvbw.svg"
                    )
                  }
                />
              ) : (
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_down_tmkrx3.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.TrendImage}
                  loader={() =>
                    imageLoader(
                      "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_down_tmkrx3.svg"
                    )
                  }
                />
              )}
            </td>
          </tr>
        ))}
    </table>
  );
};

export default RatesTable;
