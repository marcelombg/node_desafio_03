/*
  Warnings:

  - Made the column `description` on table `ongs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `ongs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ongs" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "whatsapp_number" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;
