import * as yup from "yup";

const urlValidationTemp = "URL must be a valid URL";

export const schema = yup.object({
  bio: yup.string(),
  location: yup.string(),
  twitterUrl: yup.string().url(`Twitter ${urlValidationTemp}`),
  mediumUrl: yup.string().url(`Medium ${urlValidationTemp}`),
  stackOverflowUrl: yup.string().url(`Stack Overflow ${urlValidationTemp}`),
  websiteUrl: yup.string().url(`Website ${urlValidationTemp}`),
});

export type SchemaTypes = {
  bio?: string;
  location?: string;
  twitterUrl?: string;
  mediumUrl?: string;
  stackOverflowUrl?: string;
  websiteUrl?: string;
};
