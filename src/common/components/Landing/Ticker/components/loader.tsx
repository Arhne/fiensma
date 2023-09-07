import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const TickerLoader = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <Skeleton width={150} height={40} />
        <Skeleton count={2} width={150} height={10} />
        <Skeleton width={150} height={40} />
      </div>
      <div className="d-flex">
        <Skeleton width={150} height={40} />
        <Skeleton count={2} width={150} height={10} />
        <Skeleton width={150} height={40} />
      </div>
      <div className="d-flex">
        <Skeleton width={150} height={40} />
        <Skeleton count={2} width={150} height={10} />
        <Skeleton width={150} height={40} />
      </div>
    </div>
  );
};
