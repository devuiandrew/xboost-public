// Slugs of category pages. Each one must exist as a key in `categoryPage` of messages/*.json
// and in `categoryCoefficient` of the calculator.
export const categories = [
  "faceless",
  "talkingHead",
  "socialSurvey",
  "thirdPerson",
] as const;

export type Category = (typeof categories)[number];

export const isCategory = (value: string): value is Category =>
  (categories as readonly string[]).includes(value);
