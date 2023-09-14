"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CustomAccordion from "@/common/components/CustomAccordion";
import RatesTable from "@/common/components/RatesTable";
import {
  useGetExchangeRateSummaryByDateQuery,
  useGetExchangeRateSummaryQuery,
} from "@/redux/services/exchangeRatesApi";
import { ExchangeRateLoader } from "./components/loader";

import styles from "./rates.module.scss";
import { IExchangeSummary } from "@/redux/services/exchangeRatesApi/interface";
import { useGetAllCurrencyPairQuery } from "@/redux/services/currencyPairApi";
import { PaginatedResponse } from "@/util/interface";
import { ICurrencyPair } from "@/redux/services/currencyPairApi/interface";

type TGraphData = {
  name: string;
  sellPrice: number;
  date: string;
};

type TState = {
  options: {
    chart: {
      id: string;
    };
    xaxis: {
      categories: string[];
    };
  };
  series: {
    name: string;
    data: number[];
  }[];
};

const Rates = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(100);
  const paginate = {
    perPage: rowsPerPage,
    currentPage: currentPage,
  };
  const [state, setState] = useState<TState>({
    options: {
      chart: {
        id: "fiat-exchange-rate-graph",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "series-1",
        data: [],
      },
    ],
  });
  // useful link
  // https://apexcharts.com/javascript-chart-demos/line-charts/dashed/

  const {
    data: exchangeRateSummary,
    isLoading,
    isError,
  } = useGetExchangeRateSummaryQuery(paginate, {
    refetchOnMountOrArgChange: true,
  });

  const {
    data: exchangeSummaryByDate,
    isLoading: isLoadingGraphSummaryByDate,
    isError: isGraphError,
  } = useGetExchangeRateSummaryByDateQuery(
    { startDate: "", endDate: "" },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: currencyPair } = useGetAllCurrencyPairQuery(
    { perPage: 1000, currentPage: 1 },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const extractGraphData = (
    currencyPair: PaginatedResponse<ICurrencyPair[]> | undefined
  ) => {
    const graphDataRepo = [] as TGraphData[];
    if (currencyPair) {
      currencyPair?.data.forEach((_cpair) => {
        if (exchangeSummaryByDate) {
          exchangeSummaryByDate?.data.forEach((_summary) => {
            _summary.data.forEach((_data) => {
              if (
                _data?.currencyPair?.tradingCurrency?.name ===
                _cpair?.tradingCurrency?.name
              ) {
                graphDataRepo.push({
                  name: `${_data?.currencyPair?.tradingCurrency?.name.toUpperCase()}/${_data?.currencyPair?.baseCurrency?.name.toUpperCase()}`,
                  sellPrice: _data?.sellPrice,
                  date: _summary?.date,
                });
              }
            });
          });
        }
      });
    }

    return graphDataRepo;
  };

  const getXaxis = (dataInQuestion: IExchangeSummary[]) => {
    const result = dataInQuestion.map((_item) => {
      return _item?.date;
    });

    return result.reverse();
  };

  useEffect(() => {
    if (exchangeSummaryByDate) {
      extractGraphData(currencyPair);
      const groupedKeys = extractGraphData(currencyPair).reduce(
        (group: { [key: string]: TGraphData[] }, item) => {
          if (!group[item.name]) {
            group[item.name] = [];
          }
          group[item.name].push(item);
          return group;
        },
        {}
      );

      const series = Object.keys(groupedKeys)?.map((_item) => {
        return {
          name: _item,
          data: groupedKeys[_item].map((_data) => _data?.sellPrice).reverse(),
        };
      });

      setState((prev) => {
        return {
          ...prev,
          options: {
            ...state?.options,
            xaxis: {
              categories: getXaxis(exchangeSummaryByDate?.data),
            },
            chart: {
              ...state?.options?.chart,
            },
          },
          series: [...series],
        };
      });
    }
  }, [exchangeSummaryByDate, currencyPair]);

  const renderExchangeRates = () => {
    if (isLoading) {
      return <ExchangeRateLoader />;
    } else if (!isLoading) {
      if (isError) {
        return (
          <p className="text-center mt-5">
            There was a problem fetching exchange rates
          </p>
        );
      } else {
        if (exchangeRateSummary && exchangeRateSummary.data.length > 0) {
          return (
            <>
              {exchangeRateSummary?.data.map((_exchangeRate, index) => (
                <CustomAccordion
                  key={index}
                  title={_exchangeRate?.date}
                  isDefaultOpen={index === 0 && true}
                >
                  <RatesTable data={_exchangeRate.data} />
                </CustomAccordion>
              ))}
            </>
          );
        } else {
          return <p className="text-center mt-5">No data available</p>;
        }
      }
    }
  };

  return (
    <div className={styles.RatesContainer}>
      <div className={styles.Header}>
        <h2>
          Track Multiple Currencies <br /> and{" "}
          <span className={styles.Exchange}>exchange</span> in Style
        </h2>
        <p className={styles.HeaderText}>
          Ibxp2p exchange gives you the opportunity to transact quickly <br />{" "}
          and easily with any currencies i the world.
        </p>
        <button className={styles.ActionButton}>Get the App</button>
      </div>

      <div className={styles.ExchangeRates}>
        <h3>Exchange Rates</h3>
        <p className={styles.HeaderText}>
          Our team of credible professionals with proven records of running{" "}
          <br />
          successful businesses across digital channels
        </p>
        {renderExchangeRates()}
      </div>

      <div className={styles.ChartContainer}>
        <h3>Fiat Exchange Rate</h3>
        <div className={styles.Chart} id="chart">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            height={550}
          />
        </div>
      </div>
    </div>
  );
};

export default Rates;
