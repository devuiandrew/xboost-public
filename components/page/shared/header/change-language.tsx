import SelectLang from "./select-lang";

export function ChangeLanguage({ locale }: { locale: string }) {
  const options = [
    { value: "en", label: "EN" },
    { value: "ru", label: "RU" },
    { value: "uk", label: "UA" },
  ];

  return <SelectLang options={options} locale={locale} />;
}
