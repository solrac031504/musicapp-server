import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import "reflect-metadata";
import { ArtistController } from "./api/controllers/artist.controller.ts";
import { artistRoutes } from "./api/routes/artist.routes.ts";
import { AddArtistService } from "./application/logic/services/artist/add/add-artist.service.ts";
import { DeleteArtistService } from "./application/logic/services/artist/delete/delete-artist.service.ts";
import { GetArtistService } from "./application/logic/services/artist/get/get-artist.service.ts";
import { ListArtistsService } from "./application/logic/services/artist/list/list-artists.service.ts";
import { UpdateArtistService } from "./application/logic/services/artist/update/update-artist.service.ts";
import { dataSource } from "./infrastructure/data-access/databases/database.ts";
import { ArtistRepository } from "./infrastructure/data-access/repositories/artist.repository.ts";

const app = new Hono();

// Setup logger of development
app.use(logger());

// CORS config for now
app.use("*", cors());

// Health check
app.get(
	"/",
	(c) => c.json({ status: "ok", message: "musicapp-server running" }),
);

// --- Database + Server bootstrap ---
const PORT = parseInt(Deno.env.get("PORT") ?? "3000");

dataSource.initialize()
	.then(() => {
		// Add repositories
		const artistRepository = new ArtistRepository(dataSource);

		// Add services
		const addArtistService = new AddArtistService(artistRepository);
		const deleteArtistService = new DeleteArtistService(artistRepository);
		const getArtistService = new GetArtistService(artistRepository);
		const listArtistsService = new ListArtistsService(artistRepository);
		const updateArtistService = new UpdateArtistService(artistRepository);

		// Add controllers
		const artistController = new ArtistController(
			addArtistService,
			deleteArtistService,
			getArtistService,
			listArtistsService,
			updateArtistService,
		);

		// Routing
		app.route("/artist", artistRoutes(artistController));

		console.log("Database connected");
		Deno.serve({ port: PORT }, app.fetch);
		console.log(`Server listening on port ${PORT}`);
	})
	.catch((err) => {
		console.error("Database connection failed:", err);
		Deno.exit(1);
	});
