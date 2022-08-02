-- CreateTable
CREATE TABLE "ShortenedUrlLink" (
    "minifiedUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "attachedUserId" TEXT NOT NULL,
    "targetUrl" TEXT NOT NULL,

    CONSTRAINT "ShortenedUrlLink_pkey" PRIMARY KEY ("minifiedUrl")
);
