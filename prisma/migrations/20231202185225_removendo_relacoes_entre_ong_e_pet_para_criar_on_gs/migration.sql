/*
  Warnings:

  - You are about to drop the column `pet_id` on the `ongs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ongs" DROP CONSTRAINT "ongs_pet_id_fkey";

-- AlterTable
ALTER TABLE "ongs" DROP COLUMN "pet_id";
