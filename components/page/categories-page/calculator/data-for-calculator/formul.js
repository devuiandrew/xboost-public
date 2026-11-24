import {
  categoryCoefficient,
  conversionRate,
  engagementRate,
  viralityCoefficient,
  ctr,
  videoCost,
  lowPrice,
  middlePrice,
  highPrice,
} from "./coefficients";
export function getResults(data, locale) {
  const numberOfPlatforms = data.socialNetworks.length;

  const budgetBonus =
    data.budget <= lowPrice
      ? 0.5
      : data.budget <= middlePrice
        ? 1
        : data.budget <= highPrice
          ? 1.5
          : 2;
  const potentialReach = Math.round(
    data.subscribers *
      0.1 *
      data.views *
      viralityCoefficient *
      categoryCoefficient[data.category] *
      budgetBonus *
      engagementRate *
      numberOfPlatforms,
  );
  const subscriberGrowth = Math.round(potentialReach * ctr * conversionRate);
  const totalVideos = Math.round((data.budget / videoCost) * numberOfPlatforms);
  const extraViews = Math.round((potentialReach / data.views) * 100);
  const timeSaved = totalVideos / 10;
  const moneySaved = totalVideos * 200;

  return {
    potentialReach: potentialReach.toLocaleString(locale),
    subscriberGrowth: subscriberGrowth.toLocaleString(locale),
    totalVideos: totalVideos.toLocaleString(locale),
    extraViews: extraViews.toLocaleString(locale),
    timeSaved: timeSaved.toLocaleString(locale),
    moneySaved: moneySaved.toLocaleString(locale),
  };
}
