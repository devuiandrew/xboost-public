"use client";

// Library imports
import { useEffect, useId, useState } from "react";
import Select, { type SingleValue, type StylesConfig } from "react-select";

// UI imports
import { usePathname, useRouter } from "@/app/navigation";

type Option = {
  value: string;
  label: string;
};

export default function SelectLang({
  options,
  locale,
}: {
  options: Option[];
  locale: string;
}) {
  const id = useId();
  const router = useRouter();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const customStyles: StylesConfig<Option, false> = {
    control: (provided, state) => ({
      ...provided,
      "&:hover": {
        borderColor: "#1AEE79",
        textDecoration: "underline",
      },
      overflow: "auto",
      padding: "8px",
      minHeight: "32px",
      backgroundColor: "white",
      borderColor: state.isFocused ? "#1AEE79" : "#F3F4F6",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      borderRadius: "1px",
      cursor: "pointer",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#1AEE79" : undefined,
      padding: "8px 16px",
      color: state.isFocused ? "black" : "#374151",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "1px",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    }),
  };

  useEffect(() => setIsMounted(true), []);

  const handleLangChange = (selectedOption: SingleValue<Option>) => {
    if (!selectedOption) return;
    router.push(pathname, { locale: selectedOption.value });
  };

  return isMounted ? (
    <Select
      instanceId={id}
      defaultValue={options.find((option) => option.value === locale)}
      isSearchable={false}
      styles={customStyles}
      options={options}
      onChange={handleLangChange}
      className="ml-4 min-w-[7rem] text-base font-medium"
    />
  ) : null;
}
