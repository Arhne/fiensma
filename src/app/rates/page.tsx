"use client";

import { useEffect } from "react";

import ApexCharts from "apexcharts";
import CustomAccordion from "@/common/components/CustomAccordion";
import RatesTable from "@/common/components/RatesTable";

import styles from "./rates.module.scss";

const Rates = () => {
  // useful link
  // https://apexcharts.com/javascript-chart-demos/line-charts/dashed/

  useEffect(() => {
    var options = {
      chart: {
        type: "line",
        height: "654px",
      },
      //   series: [{
      //     name: "Session Duration",
      //     data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      //   },
      //   {
      //     name: "Page Views",
      //     data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      //   },
      //   {
      //     name: 'Total Visits',
      //     data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      //   }
      // ],
      series: [
        {
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    setTimeout(() => {
      chart.render();
    }, 2000);
  }, []);

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
        <h3>Naira Exchange Rate</h3>
        <div className={styles.Chart} id="chart"></div>
      </div>

      <div className={styles.ExchangeRates}>
        <h3>Exchange Rates</h3>
        <p className={styles.HeaderText}>
          Our team of credible professionals with proven records of running{" "}
          <br />
          successful businesses across digital channels
        </p>

        <CustomAccordion title="NGN Exchange Rate 24/08/2023">
          <RatesTable />
        </CustomAccordion>
        <CustomAccordion title="NGN Exchange Rate 24/08/2023">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cumque,
          recusandae hic obcaecati quam harum assumenda quidem corporis.
          Voluptatem quae at asperiores ea veniam rerum earum, quod sapiente ex
          odio.
        </CustomAccordion>
        <CustomAccordion title="NGN Exchange Rate 24/08/2023">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cumque,
          recusandae hic obcaecati quam harum assumenda quidem corporis.
          Voluptatem quae at asperiores ea veniam rerum earum, quod sapiente ex
          odio.
        </CustomAccordion>
      </div>
    </div>
  );
};

export default Rates;
