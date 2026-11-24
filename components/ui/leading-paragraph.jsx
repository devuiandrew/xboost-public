//Library imports
import { cn } from "@/lib/utils";

export const LeadingParagraph = ({ children, className, ...props }) => {
  return (
    <p className={cn("text-lg xl:text-xl 2xl:text-2xl mb-4 leading-tight tracking-tight text-boost-neutral font-normal", className)} {...props}>
      {children}
    </p>
  );
};
