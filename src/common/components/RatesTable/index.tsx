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
        <td className={styles.TableCell}>20</td>
        <td className={styles.TableCell}>20</td>
        <td className={styles.TableCell}>30</td>
      </tr>
      <tr>
        <td className={styles.EmptyCell}></td>
        <td className={styles.TableCell}>50</td>
        <td className={styles.TableCell}>50</td>
        <td className={styles.TableCell}>60</td>
      </tr>
      <tr>
        <td className={styles.EmptyCell}></td>
        <td className={styles.TableCell}>70</td>
        <td className={styles.TableCell}>70</td>
        <td className={styles.TableCell}>100</td>
      </tr>
      <tr>
        <td className={styles.EmptyCell}></td>
        <td className={styles.TableCell}>100</td>
        <td className={styles.TableCell}>100</td>
        <td className={styles.TableCell}>40</td>
      </tr>
    </table>
  );
};

export default RatesTable;
