/*
  Warnings:

  - You are about to drop the column `token` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_token_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "token";
