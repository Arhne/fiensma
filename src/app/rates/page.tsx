"use client";

import { useState } from "react";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CustomAccordion from "@/common/components/CustomAccordion";
import RatesTable from "@/common/components/RatesTable";
import {
  useGetCurrentRatesQuery,
  useGetExchangeRateSummaryByDateQuery,
} from "@/redux/services/exchangeRatesApi";

import styles from "./rates.module.scss";

const Rates = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(100);
  const paginate = {
    perPage: rowsPerPage,
    currentPage: currentPage,
  };
  const [state, setState] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  });
  // useful link
  // https://apexcharts.com/javascript-chart-demos/line-charts/dashed/

  const {
    data: exchangeSummaryByDate,
    isLoading,
    isFetching,
  } = useGetExchangeRateSummaryByDateQuery(paginate, {
    refetchOnMountOrArgChange: true,
  });

  const { data: currentrates } = useGetCurrentRatesQuery();

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

      <div className={styles.ExchangeRates}>
        <h3>Exchange Rates</h3>
        <p className={styles.HeaderText}>
          Our team of credible professionals with proven records of running{" "}
          <br />
          successful businesses across digital channels
        </p>

        <CustomAccordion title="NGN Exchange Rate 24/08/2023" isDefaultOpen>
          <RatesTable />
        </CustomAccordion>
        <CustomAccordion
          title="NGN Exchange Rate 24/08/2023"
          isDefaultOpen={false}
        >
          <RatesTable />
        </CustomAccordion>
        <CustomAccordion
          title="NGN Exchange Rate 24/08/2023"
          isDefaultOpen={false}
        >
          <RatesTable />
        </CustomAccordion>
      </div>
    </div>
  );
};

export default Rates;
