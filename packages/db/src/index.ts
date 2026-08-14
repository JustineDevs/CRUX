import { PrismaClient } from "../prisma/generated/client";
import { env } from "@crux/env/server";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });


export default prisma;
