import { Skeleton } from "./skeleton";

const LoadingSkeleton = ({ isLoading, className, ...props }) =>
  isLoading && (
    <div
      className={`absolute left-0 top-0 flex h-full w-full items-center justify-center ${className}`}
      {...props}
    >
      <Skeleton className="h-full w-full" />
    </div>
  );

export default LoadingSkeleton;
