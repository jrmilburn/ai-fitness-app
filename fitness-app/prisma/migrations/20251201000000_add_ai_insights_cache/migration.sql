-- CreateTable
CREATE TABLE "AiInsightsCache" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "snapshotHash" TEXT NOT NULL,
    "snapshotJson" JSONB NOT NULL,
    "insightsJson" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AiInsightsCache_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AiInsightsCache_userId_snapshotHash_key" ON "AiInsightsCache"("userId", "snapshotHash");

-- AddForeignKey
ALTER TABLE "AiInsightsCache" ADD CONSTRAINT "AiInsightsCache_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
