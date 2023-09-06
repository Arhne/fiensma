import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ExchangeRateLoader = () => {
  return (
    <>
      <div className="mb-3">
        <Skeleton width={150} height={30} />
        <Skeleton count={5} height={30} />
      </div>

      <div className="mb-3">
        <Skeleton width={150} height={30} />
        <Skeleton count={5} height={30} />
      </div>
    </>
  );
};
