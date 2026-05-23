import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import "reflect-metadata";
import { ArtistGroupController } from "./api/controllers/artist-group.controller.ts";
import { ArtistController } from "./api/controllers/artist.controller.ts";
import { artistGroupRoutes } from "./api/routes/artist-group.routes.ts";
import { artistRoutes } from "./api/routes/artist.routes.ts";
import { AddArtistGroupService } from "./application/logic/services/artist-group/add/add-artist-group.service.ts";
import { DeleteArtistGroupService } from "./application/logic/services/artist-group/delete/delete-artist-group.service.ts";
import { GetArtistGroupService } from "./application/logic/services/artist-group/get/get-artist-group.service.ts";
import { ListArtistGroupsService } from "./application/logic/services/artist-group/list/list-artist-groups.service.ts";
import { UpdateArtistGroupService } from "./application/logic/services/artist-group/update/update-artist-group.service.ts";
import { AddArtistService } from "./application/logic/services/artist/add/add-artist.service.ts";
import { DeleteArtistService } from "./application/logic/services/artist/delete/delete-artist.service.ts";
import { GetArtistService } from "./application/logic/services/artist/get/get-artist.service.ts";
import { ListArtistsService } from "./application/logic/services/artist/list/list-artists.service.ts";
import { UpdateArtistService } from "./application/logic/services/artist/update/update-artist.service.ts";
import { dataSource } from "./infrastructure/data-access/databases/database.ts";
import { ArtistGroupRepository } from "./infrastructure/data-access/repositories/artist-group.repository.ts";
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
		console.log("Database connected");

		// Add repositories
		const artistRepository = new ArtistRepository(dataSource);
		const artistGroupRepository = new ArtistGroupRepository(dataSource);

		// Add services
		const addArtistService = new AddArtistService(artistRepository);
		const deleteArtistService = new DeleteArtistService(artistRepository);
		const getArtistService = new GetArtistService(artistRepository);
		const listArtistsService = new ListArtistsService(artistRepository);
		const updateArtistService = new UpdateArtistService(artistRepository);

		const addArtistGroupService = new AddArtistGroupService(artistGroupRepository);
		const deleteArtistGroupService = new DeleteArtistGroupService(artistGroupRepository);
		const getArtistGroupService = new GetArtistGroupService(artistGroupRepository);
		const listArtistGroupsService = new ListArtistGroupsService(artistGroupRepository);
		const updateArtistGroupService = new UpdateArtistGroupService(artistGroupRepository);

		// Add controllers
		const artistController = new ArtistController(
			addArtistService,
			deleteArtistService,
			getArtistService,
			listArtistsService,
			updateArtistService,
		);

		const artistGroupController = new ArtistGroupController(
			addArtistGroupService,
			deleteArtistGroupService,
			getArtistGroupService,
			listArtistGroupsService,
			updateArtistGroupService,
		);

		// Routing
		app.route("/artists", artistRoutes(artistController));
		app.route("/artist-groups", artistGroupRoutes(artistGroupController));

		Deno.serve({ port: PORT }, app.fetch);
		console.log(`Server listening on port ${PORT}`);
	})
	.catch((err) => {
		console.error("Database connection failed:", err);
		Deno.exit(1);
	});
