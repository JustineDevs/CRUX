import { createAuthClient } from "better-auth/react";
import { organizationClient } from "better-auth/client/plugins";
import { env } from "@crux/env/web";

export const authClient = createAuthClient({
	baseURL: env.VITE_SERVER_URL,
	plugins: [
		organizationClient(),
	],
});
