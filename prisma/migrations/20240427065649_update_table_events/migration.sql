/*
  Warnings:

  - You are about to drop the column `createdBy` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `ratingAverage` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `reviewsCount` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `events` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `createdBy`,
    DROP COLUMN `ratingAverage`,
    DROP COLUMN `reviewsCount`,
    DROP COLUMN `updatedBy`,
    ADD COLUMN `created_by` INTEGER NULL,
    ADD COLUMN `rating_average` DOUBLE NULL,
    ADD COLUMN `reviews_count` INTEGER NULL,
    ADD COLUMN `updated_by` INTEGER NULL;
