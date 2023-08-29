import type { PrismaClient } from '@prisma/client';
import type { SocketConfig } from '@adiwajshing/baileys';
export declare function setPrisma(prismaClient: PrismaClient): void;
export declare function setLogger(pinoLogger?: SocketConfig['logger']): void;
export declare function usePrisma(): any;
export declare function useLogger(): import("pino").Logger<import("pino").LoggerOptions>;
