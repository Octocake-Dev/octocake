-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_ownerId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'USER';

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "posts.slug_unique" RENAME TO "posts_slug_key";

-- RenameIndex
ALTER INDEX "users.github_email_unique" RENAME TO "users_github_email_key";

-- RenameIndex
ALTER INDEX "users.github_id_unique" RENAME TO "users_github_id_key";

-- RenameIndex
ALTER INDEX "users.github_username_unique" RENAME TO "users_github_username_key";
