-- CreateTable
CREATE TABLE "marketplace_auth" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "marketplace" TEXT NOT NULL,
    "encryptedUsername" TEXT NOT NULL,
    "encryptedPassword" TEXT NOT NULL,
    "isConnected" BOOLEAN NOT NULL DEFAULT false,
    "lastVerified" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "marketplace_auth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "marketplace_auth_userId_idx" ON "marketplace_auth"("userId");

-- CreateIndex
CREATE INDEX "marketplace_auth_marketplace_idx" ON "marketplace_auth"("marketplace");

-- CreateIndex
CREATE UNIQUE INDEX "marketplace_auth_userId_marketplace_key" ON "marketplace_auth"("userId", "marketplace");
