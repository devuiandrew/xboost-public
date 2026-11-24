"use client";

import React, { forwardRef } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

// Color follows the checked state through data-[state=checked], so it can't drift
// from the form value (e.g. after reset).
const CheckboxButtons = forwardRef(({ className, children, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-10 shrink-0 rounded-xs border border-boost-gray text-boost-gray focus-visible:outline-none disabled:cursor-not-allowed data-[state=checked]:border-boost-green data-[state=checked]:bg-boost-dark data-[state=checked]:text-boost-green",
      className,
    )}
    {...props}
  >
    {children ?? (
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    )}
  </CheckboxPrimitive.Root>
));
CheckboxButtons.displayName = CheckboxPrimitive.Root.displayName;

export { CheckboxButtons };
