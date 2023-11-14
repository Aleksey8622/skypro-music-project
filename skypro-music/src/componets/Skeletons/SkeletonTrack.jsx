import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonTrack() {
  return (
    <SkeletonTheme highlightColor="#696969" baseColor="#272727">
      <Skeleton width={250} height={20} />
    </SkeletonTheme>
  );
}
export default SkeletonTrack