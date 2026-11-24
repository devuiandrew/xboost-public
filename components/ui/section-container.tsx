import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

function SectionContainer({ id, className, children }: Props) {
  return (
    <section id={id} className={cn(className)}>
      <div className="container mx-auto px-4 py-8">{children}</div>
    </section>
  );
}

export default SectionContainer;
