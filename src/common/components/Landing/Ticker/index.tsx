import styles from "./Ticker.module.scss";
import { useGetCurrentRatesQuery } from "@/redux/services/exchangeRatesApi";
import { TickerLoader } from "./components/loader";

const Ticker = () => {
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
              <div className={styles.TickerTransition}>
                {currentRates?.data.map((_item) => (
                  <div key={_item._id} className={styles.TickerItem}>
                    <div className={styles.TickerItemContent}>
                      {/* <img src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/britain_b49zmm.svg" /> */}
                      <h6>
                        {_item?.currencyPair?.baseCurrency?.name}/
                        {_item?.currencyPair?.tradingCurrency?.name}
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
                            910.90
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
                            910.89
                          </span>
                        </div>
                      </div>
                      <div className={styles.TrendContainer}>
                        <img
                          src={`${
                            _item?.buyTrend === "UP"
                              ? "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_up_fiqvbw.svg"
                              : "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_down_tmkrx3.svg"
                          }`}
                        />
                        <img
                          src={`${
                            _item?.sellTrend === "UP"
                              ? "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_up_fiqvbw.svg"
                              : "https://res.cloudinary.com/dbg2z1svm/image/upload/v1693285622/ibx-website-v2/icons/news-ticker/trend_down_tmkrx3.svg"
                          }`}
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
