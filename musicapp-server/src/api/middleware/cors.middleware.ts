import { cors } from "hono/cors";

const DEV_ORIGINS = (Deno.env.get("CORS_ORIGINS") || "").split(";");

export function buildCorsMiddleware() {
	const env = Deno.env.get("ENV");

	// Same-domain deployment. CORS headers not needed
	// Return no-op middleware so app pipeline stays uniform
	if (env === "production") return (_c: unknown, next: () => Promise<void>) => next();

	return cors({
		origin: DEV_ORIGINS,
		allowMethods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization"],
		maxAge: 600,
	});
}
