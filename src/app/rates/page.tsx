"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DatePicker, Select } from "antd";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CustomAccordion from "@/common/components/CustomAccordion";
import RatesTable from "@/common/components/RatesTable";
import {
  useGetExchangeRateSummaryByDateQuery,
  useGetExchangeRateSummaryQuery,
} from "@/redux/services/exchangeRatesApi";
import { ExchangeRateLoader } from "./components/loader";

import { useGetAllCurrencyPairQuery } from "@/redux/services/currencyPairApi";

const { RangePicker } = DatePicker;

import styles from "./rates.module.scss";

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
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState(
    dayjs().subtract(3, "days").format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [timePeriod, setTimePeriod] = useState("morning");

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
    error: graphError,
  } = useGetExchangeRateSummaryByDateQuery(
    {
      startDate: startDate,
      endDate: endDate,
      timePeriod: timePeriod,
    },
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

  useEffect(() => {
    if (exchangeSummaryByDate) {
      const yAxis = exchangeSummaryByDate?.data?.yAxis.map((_item) => {
        return {
          name: _item?.currencyPair.toUpperCase(),
          data: _item.prices.map((_price) => _price.sellPrice),
        };
      });

      setState((prev) => {
        return {
          ...prev,
          options: {
            ...state?.options,
            xaxis: {
              categories: exchangeSummaryByDate?.data?.xAxis,
            },
            chart: {
              ...state?.options?.chart,
            },
          },
          series: yAxis,
        };
      });
    }
  }, [exchangeSummaryByDate, currencyPair]);

  const handleChangeDate = (values: any, formatString: [string, string]) => {
    setStartDate(formatString[0]);
    setEndDate(formatString[1]);
  };

  const handleChangeTimePeriod = (value: string) => {
    return setTimePeriod(value);
  };

  const renderChart = () => {
    if (isLoadingGraphSummaryByDate) {
      return <ExchangeRateLoader />;
    } else if (!isLoadingGraphSummaryByDate) {
      if (isGraphError) {
        if ("status" in graphError) {
          const errMsg =
            "error" in graphError
              ? graphError.error
              : JSON.stringify(graphError.data);

          return (
            <p className="text-center mt-5">
              {JSON.parse(errMsg)?.message ??
                "There was a problem fetching exchange rate date"}
            </p>
          );
        }
      } else {
        return (
          <div className={styles.Chart} id="chart">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              height={550}
            />
          </div>
        );
      }
    }
  };

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
                  {_exchangeRate?.data?.length > 0 &&
                    _exchangeRate.data
                      .filter((_rate) => _rate !== null)
                      .map((_item, idx) => (
                        <div key={idx} className="mb-3">
                          <p className={styles.Title}>{_item?.timePeriod}</p>
                          <RatesTable data={_item?.data} />
                        </div>
                      ))}
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
        <h3>
          Track Multiple Currencies and{" "}
          <span className={styles.Exchange}>exchange</span> in Style
        </h3>
        <p className={styles.HeaderText}>
          Ibx p2p exchange gives you the opportunity to transact quickly and
          easily with any currencies in the world.
        </p>
        <div className={styles.ButtonContainer}>
          <button className={styles.ActionButton}>Get the App</button>
        </div>
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
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6"></div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="d-flex justify-content-end">
              <RangePicker
                onChange={handleChangeDate}
                format={"YYYY-MM-DD"}
                defaultValue={[dayjs().subtract(3, "days"), dayjs()]}
              />
              <Select
                showSearch={false}
                style={{ marginLeft: "2rem" }}
                placeholder="Select time period"
                optionFilterProp="children"
                defaultValue={"morning"}
                onChange={handleChangeTimePeriod}
                options={[
                  {
                    value: "morning",
                    label: "Morning",
                  },
                  {
                    value: "afternoon",
                    label: "Afternoon",
                  },
                  {
                    value: "evening",
                    label: "Evening",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {renderChart()}
      </div>
    </div>
  );
};

export default Rates;
