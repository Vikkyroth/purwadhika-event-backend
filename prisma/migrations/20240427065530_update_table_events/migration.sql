/*
  Warnings:

  - Added the required column `end_booking_date` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_date` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lineup` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_booking_date` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` ADD COLUMN `createdBy` INTEGER NULL,
    ADD COLUMN `end_booking_date` DATETIME(3) NOT NULL,
    ADD COLUMN `event_date` DATETIME(3) NOT NULL,
    ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `lineup` VARCHAR(191) NOT NULL,
    ADD COLUMN `location` VARCHAR(191) NOT NULL,
    ADD COLUMN `ratingAverage` DOUBLE NULL,
    ADD COLUMN `reviewsCount` INTEGER NULL,
    ADD COLUMN `start_booking_date` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedBy` INTEGER NULL;
