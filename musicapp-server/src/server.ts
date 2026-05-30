// #region Imports
import { buildCorsMiddleware } from "@api/middleware/cors.middleware.ts";
import { artistGroupMembershipRoutes } from "@api/routes/artist-group-membership.routes.ts";
import { artistGroupRoutes } from "@api/routes/artist-group.routes.ts";
import { artistRoutes } from "@api/routes/artist.routes.ts";
import { genreHierarchyRoutes } from "@api/routes/genre-hierarchy.routes.ts";
import { genreRoutes } from "@api/routes/genre.routes.ts";
import { loginRoutes } from "@api/routes/login.routes.ts";
import { producerGroupMembershipRoutes } from "@api/routes/producer-group-membership.routes.ts";
import { producerGroupRoutes } from "@api/routes/producer-group.routes.ts";
import { producerRoutes } from "@api/routes/producer.routes.ts";
import { projectTypeRoutes } from "@api/routes/project-type.routes.ts";
import { projectRoutes } from "@api/routes/project.routes.ts";
import { sceneRoutes } from "@api/routes/scene.routes.ts";
import { songRoutes } from "@api/routes/song.routes.ts";
import { streamingServiceRoutes } from "@api/routes/streaming-service.routes.ts";
import {
	bootstrapArtist,
	bootstrapArtistGroup,
	bootstrapArtistGroupMembership,
	bootstrapGenre,
	bootstrapGenreHierarchy,
	bootstrapLogin,
	bootstrapProducer,
	bootstrapProducerGroup,
	bootstrapProducerGroupMembership,
	bootstrapProject,
	bootstrapProjectType,
	bootstrapScene,
	bootstrapSong,
	bootstrapStreamingService,
} from "@infrastructure/bootstrap/index.ts";
import { dataSource } from "@infrastructure/data-access/databases/database.ts";
import { Hono } from "hono";
import { logger } from "hono/logger";
import "reflect-metadata";
// #endregion

const app = new Hono();

// Setup logger of development
app.use(logger());

// CORS config for now
app.use("*", buildCorsMiddleware());

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

		// Wire up all domains
		const controllers = {
			artist: bootstrapArtist(dataSource),
			artistGroup: bootstrapArtistGroup(dataSource),
			artistGroupMembership: bootstrapArtistGroupMembership(dataSource),
			genre: bootstrapGenre(dataSource),
			genreHierarchy: bootstrapGenreHierarchy(dataSource),
			login: bootstrapLogin(dataSource),
			producer: bootstrapProducer(dataSource),
			producerGroup: bootstrapProducerGroup(dataSource),
			producerGroupMembership: bootstrapProducerGroupMembership(dataSource),
			project: bootstrapProject(dataSource),
			projectType: bootstrapProjectType(dataSource),
			scene: bootstrapScene(dataSource),
			song: bootstrapSong(dataSource),
			streamingService: bootstrapStreamingService(dataSource),
		};

		// Register routes
		app.route("/artists", artistRoutes(controllers.artist));
		app.route("/artist-groups", artistGroupRoutes(controllers.artistGroup));
		app.route("/artist-group-memberships", artistGroupMembershipRoutes(controllers.artistGroupMembership));
		app.route("/genres", genreRoutes(controllers.genre));
		app.route("/genre-hierarchies", genreHierarchyRoutes(controllers.genreHierarchy));
		app.route("/login", loginRoutes(controllers.login));
		app.route("/producers", producerRoutes(controllers.producer));
		app.route("/producer-groups", producerGroupRoutes(controllers.producerGroup));
		app.route("/producer-group-memberships", producerGroupMembershipRoutes(controllers.producerGroupMembership));
		app.route("/projects", projectRoutes(controllers.project));
		app.route("/project-types", projectTypeRoutes(controllers.projectType));
		app.route("/scenes", sceneRoutes(controllers.scene));
		app.route("/songs", songRoutes(controllers.song));
		app.route("/streaming-services", streamingServiceRoutes(controllers.streamingService));

		Deno.serve({ port: PORT }, app.fetch);
		console.log(`Server listening on port ${PORT}`);
	})
	.catch((err) => {
		console.error("Database connection failed:", err);
		Deno.exit(1);
	});
