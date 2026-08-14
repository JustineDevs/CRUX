import { betterAuth } from "better-auth";
import { organization } from "better-auth/plugins";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { env } from "@crux/env/server";
import prisma from "@crux/db";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
provider: "postgresql",



	}),

	trustedOrigins: [
		env.CORS_ORIGIN,
	],
	emailAndPassword: {
		enabled: true,
	},
	advanced: {
		defaultCookieAttributes: {
			sameSite: "none",
			secure: true,
			httpOnly: true,
		},
	},
	plugins: [
		organization(),
	],
});




