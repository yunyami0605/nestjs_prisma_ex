-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'hello world';

-- CreateTable
CREATE TABLE "Hello" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'hello world',

    CONSTRAINT "Hello_pkey" PRIMARY KEY ("id")
);
