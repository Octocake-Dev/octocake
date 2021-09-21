/*
  Warnings:

  - Made the column `bio` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `github_url` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `twitter_url` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `medium_url` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stackOverflow_url` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `website_url` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `github_avatar_url` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `github_email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "bio" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "github_url" SET NOT NULL,
ALTER COLUMN "twitter_url" SET NOT NULL,
ALTER COLUMN "medium_url" SET NOT NULL,
ALTER COLUMN "stackOverflow_url" SET NOT NULL,
ALTER COLUMN "website_url" SET NOT NULL,
ALTER COLUMN "github_avatar_url" SET NOT NULL,
ALTER COLUMN "github_email" SET NOT NULL;
