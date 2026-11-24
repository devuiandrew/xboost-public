// Library imports
import Link from "next/link";
import { useTranslations } from "next-intl";

// Helper utilities
import { cn } from "@/lib/utils";

// User interface components
import { Button } from "./button";
type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
};
export function ContactFormButton({ className, children }: ButtonProps) {
  const t = useTranslations("shared");
  return (
    <Button
      asChild
      className={cn(className, "text-md font-semibold")}
      variant="default"
    >
      <Link href={t(`contactForm.href`)} target="_blank" rel="noopener">
        {children}
      </Link>
    </Button>
  );
}
