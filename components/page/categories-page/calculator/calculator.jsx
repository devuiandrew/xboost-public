"use client";
//Library import
import { BiLogoInstagram, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Local imports
import { categoryCoefficient } from "./data-for-calculator/coefficients";
import { getResults } from "./data-for-calculator/formul";
import { ResultCard } from "./result-card";

// UI components
import { Button } from "@/components/ui/button";
import { CheckboxButtons } from "@/components/ui/checkbox-buttons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LeadingParagraph } from "@/components/ui/leading-paragraph";
import { H2 } from "@/components/ui/headers";

export default function Calculator({ categoryName }) {
  const t = useTranslations(`categoryPage.shared.calculator`);
  const tCategories = useTranslations(
    "mainPage.navigation.select-list.categories.list",
  );
  const locale = useLocale();

  const [results, setResults] = useState({});

  const socialNetworks = [
    {
      id: "instagram",
      label: <BiLogoInstagram className="h-full w-full p-2" />,
    },
    { id: "tiktok", label: <BiLogoTiktok className="h-full w-full p-2" /> },
    { id: "youtube", label: <BiLogoYoutube className="h-full w-full p-2" /> },
  ];

  // Non-numeric input coerces to NaN, which zod reports as invalid_type
  const numberField = () =>
    z.coerce
      .number({ invalid_type_error: t("formEror.emptyFieldError") })
      .min(0, { message: t("formEror.negativeValueError") })
      .min(1, { message: t("formEror.emptyFieldError") });

  // Form setup
  const { control, handleSubmit, ...form } = useForm({
    // Validation schema
    resolver: zodResolver(
      z.object({
        subscribers: numberField(),
        views: numberField(),
        budget: numberField(),
        category: z
          .string()
          .min(1, { message: t("formEror.selectCategoryError") }),
        socialNetworks: z
          .array(z.string())
          .refine((value) => value.some((item) => item), {
            message: t("formEror.selectItemError"),
          }),
      }),
    ),
    // Default values
    defaultValues: {
      subscribers: "1000",
      views: "1000",
      budget: "1000",
      category: categoryName in categoryCoefficient ? categoryName : "faceless",
      socialNetworks: [],
    },
  });

  function onSubmit(values) {
    const newResults = getResults(values, locale);
    setResults(newResults);
  }

  return (
    <section id="calculator" className="bg-boost-dark text-boost-light">
      <div className="container mx-auto px-4 py-8">
        <H2>{t("header")}</H2>
        <LeadingParagraph>{t("text")}</LeadingParagraph>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-8 grid justify-center gap-8 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:justify-start lg:grid-cols-5 lg:grid-rows-2"
          >
            <FormField
              control={control}
              name="subscribers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("subscribersInput.placeholder")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0"
                      {...field}
                      className="bg-boost-dark"
                    />
                  </FormControl>
                  <FormDescription>
                    {t("subscribersInput.description")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="views"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("viewsInput.placeholder")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0"
                      {...field}
                      className="bg-boost-dark"
                    />
                  </FormControl>
                  <FormDescription>
                    {t("viewsInput.description")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("budgetInput.placeholder")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0"
                      {...field}
                      className="bg-boost-dark"
                    />
                  </FormControl>
                  <FormDescription>
                    {t("budgetInput.description")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("categoryInput.placeholder")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-boost-dark">
                        <SelectValue placeholder="Select a verified category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.keys(categoryCoefficient).map((key) => (
                        <SelectItem key={key} value={key}>
                          {tCategories(`${key}.text`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    {t("categoryInput.description")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="socialNetworks"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base">
                    {t("socialPlatformsInput.placeholder")}
                  </FormLabel>

                  <div className="flex gap-4">
                    {socialNetworks.map((item) => (
                      <FormField
                        key={item.id}
                        control={control}
                        name="socialNetworks"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <CheckboxButtons
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id,
                                          ),
                                        );
                                  }}
                                >
                                  {item.label}
                                </CheckboxButtons>
                              </FormControl>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <div className="mb-4">
                    <FormDescription>
                      {t("socialPlatformsInput.description")}
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="sm:mt-8 lg:col-start-3 lg:col-end-4 lg:row-start-2"
            >
              {t("submitButton")}
            </Button>
          </form>
        </Form>

        {Object.keys(results).length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ResultCard
                value={results.potentialReach}
                description={t("result.potentialReach.text")}
              />
              <ResultCard
                value={results.subscriberGrowth}
                description={t("result.subscriberGrowth.text")}
              />
              <ResultCard
                value={results.totalVideos}
                description={t("result.totalVideos.text")}
              />
              {/* TODO: these metrics need more precise formulas before they are shown */}
              {/* <ResultCard value={results.extraViews} description={t("result.extraViews.text")} /> */}
              {/* <ResultCard value={results.timeSaved} description={t("result.timeSaved.text")} /> */}
              <ResultCard
                value={results.moneySaved}
                description={t("result.moneySaved.text")}
              />
            </div>
            <div className="col-start-1 col-end-4 mt-8 text-boost-neutral/60">
              <p className="text-center">{t("calculatorDisclaimer")} </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
