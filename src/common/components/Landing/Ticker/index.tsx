import moment from "moment";
import { useGetCurrentRatesQuery } from "@/redux/services/exchangeRatesApi";
import { TickerLoader } from "./components/loader";
import Image from "next/image";
import { imageLoader } from "@/common/Utils/imageLoaders";

import styles from "./Ticker.module.scss";

const Ticker = () => {
  const now = new Date();
  const { data: currentRates, isLoading, isError } = useGetCurrentRatesQuery();

  const renderTicker = () => {
    if (isLoading) {
      return <TickerLoader />;
    } else if (!isLoading) {
      if (isError) {
        return (
          <p className="text-center mt-5">
            There was a problem fetching current rates
          </p>
        );
      } else {
        if (currentRates && currentRates.data.length > 0) {
          return (
            <div className={styles.TickerWrapper}>
              <div className={`${styles.TickerTransition}`}>
                <span className={styles.CurrentDate}>
                  {moment(now.toISOString()).format("MMMM Do YYYY, h:mm:ss a")}
                </span>
                {currentRates?.data.map((_item) => (
                  <div key={_item._id} className={styles.TickerItem}>
                    <div className={styles.TickerItemContent}>
                      <Image
                        src={_item?.currencyPair?.tradingCurrency?.imageUrl}
                        alt=""
                        width={30}
                        height={30}
                        className={styles.RateImage}
                        loader={() =>
                          imageLoader(
                            _item?.currencyPair?.tradingCurrency?.imageUrl
                          )
                        }
                      />

                      <h6>
                        {_item?.currencyPair?.tradingCurrency?.name.toUpperCase()}
                        /{_item?.currencyPair?.baseCurrency?.name.toUpperCase()}
                      </h6>
                      <div className={styles.BuySellContainer}>
                        <div className={styles.Buy}>
                          Buy=
                          <span
                            className={
                              _item?.buyTrend === "UP"
                                ? styles.TrendUp
                                : styles.TrendDown
                            }
                          >
                            {_item?.buyPrice}
                          </span>
                        </div>
                        <div className={styles.Sell}>
                          Sell=
                          <span
                            className={
                              _item?.sellTrend === "UP"
                                ? styles.TrendUp
                                : styles.TrendDown
                            }
                          >
                            {_item?.sellPrice}
                          </span>
                        </div>
                      </div>
                      <div className={styles.TrendContainer}>
                        <Image
                          src={`${
                            _item?.buyTrend === "UP"
                              ? "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_up_fiqvbw.svg"
                              : "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_down_tmkrx3.svg"
                          }`}
                          alt=""
                          height={15}
                          width={15}
                        />
                        <Image
                          src={`${
                            _item?.sellTrend === "UP"
                              ? "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_up_fiqvbw.svg"
                              : "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_down_tmkrx3.svg"
                          }`}
                          alt=""
                          height={15}
                          width={15}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          return <p className="text-center mt-5">No data available</p>;
        }
      }
    }
  };

  return (
    <div className={styles.TickerContainer}>
      <div>{renderTicker()}</div>
    </div>
  );
};

export default Ticker;
