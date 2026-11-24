// Library imports
import { cn } from "@/lib/utils";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const H1 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "mb-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-boost-green lg:text-4xl xl:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h2
      className={cn(
        "mb-4 text-2xl font-bold uppercase leading-tight tracking-tight text-boost-green lg:text-3xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
