/*
  Warnings:

  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNo` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImg` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "contactNo" TEXT NOT NULL,
ADD COLUMN     "profileImg" TEXT NOT NULL,
ADD COLUMN     "role" "UserRole" DEFAULT 'customer';
