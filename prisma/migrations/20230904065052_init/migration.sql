-- CreateTable
CREATE TABLE "login_users" (
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "login_users_email_key" ON "login_users"("email");
