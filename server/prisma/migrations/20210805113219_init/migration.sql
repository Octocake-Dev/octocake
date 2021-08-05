-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "github_avatar_url" TEXT,
    "github_name" TEXT NOT NULL,
    "github_email" TEXT,
    "github_username" TEXT NOT NULL,
    "github_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    FOREIGN KEY ("ownerId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users.github_email_unique" ON "users"("github_email");

-- CreateIndex
CREATE UNIQUE INDEX "users.github_username_unique" ON "users"("github_username");

-- CreateIndex
CREATE UNIQUE INDEX "users.github_id_unique" ON "users"("github_id");

-- CreateIndex
CREATE UNIQUE INDEX "posts.slug_unique" ON "posts"("slug");
