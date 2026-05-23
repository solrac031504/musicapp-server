import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import "reflect-metadata";
import { ArtistGroupMembershipController } from "./api/controllers/artist-group-membership.controller.ts";
import { ArtistGroupController } from "./api/controllers/artist-group.controller.ts";
import { ArtistController } from "./api/controllers/artist.controller.ts";
import { GenreController } from "./api/controllers/genre.controller.ts";
import { GenreHierarchyController } from "./api/controllers/genre-hierarchy.controller.ts";
import { artistGroupMembershipRoutes } from "./api/routes/artist-group-membership.routes.ts";
import { artistGroupRoutes } from "./api/routes/artist-group.routes.ts";
import { artistRoutes } from "./api/routes/artist.routes.ts";
import { genreRoutes } from "./api/routes/genre.routes.ts";
import { genreHierarchyRoutes } from "./api/routes/genre-hierarchy.routes.ts";
import { AddArtistGroupMembershipService } from "./application/logic/services/artist-group-membership/add/add-artist-group-membership.service.ts";
import { DeleteArtistGroupMembershipService } from "./application/logic/services/artist-group-membership/delete/delete-artist-group-membership.service.ts";
import { GetArtistGroupMembershipService } from "./application/logic/services/artist-group-membership/get/get-artist-group-membership.service.ts";
import { ListArtistGroupMembershipsService } from "./application/logic/services/artist-group-membership/list/list-artist-group-memberships.service.ts";
import { UpdateArtistGroupMembershipService } from "./application/logic/services/artist-group-membership/update/update-artist-group-membership.service.ts";
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
import { AddGenreService } from "./application/logic/services/genre/add/add-genre.service.ts";
import { DeleteGenreService } from "./application/logic/services/genre/delete/delete-genre.service.ts";
import { GetGenreService } from "./application/logic/services/genre/get/get-genre.service.ts";
import { ListGenresService } from "./application/logic/services/genre/list/list-genres.service.ts";
import { UpdateGenreService } from "./application/logic/services/genre/update/update-genre.service.ts";
import { AddGenreHierarchyService } from "./application/logic/services/genre-hierarchy/add/add-genre-hierarchy.service.ts";
import { DeleteGenreHierarchyService } from "./application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.service.ts";
import { GetGenreHierarchyService } from "./application/logic/services/genre-hierarchy/get/get-genre-hierarchy.service.ts";
import { ListGenreHierarchiesService } from "./application/logic/services/genre-hierarchy/list/list-genre-hierarchies.service.ts";
import { UpdateGenreHierarchyService } from "./application/logic/services/genre-hierarchy/update/update-genre-hierarchy.service.ts";
import { dataSource } from "./infrastructure/data-access/databases/database.ts";
import { ArtistGroupMembershipRepository } from "./infrastructure/data-access/repositories/artist-group-membership.repository.ts";
import { ArtistGroupRepository } from "./infrastructure/data-access/repositories/artist-group.repository.ts";
import { ArtistRepository } from "./infrastructure/data-access/repositories/artist.repository.ts";
import { GenreRepository } from "./infrastructure/data-access/repositories/genre.repository.ts";
import { GenreHierarchyRepository } from "./infrastructure/data-access/repositories/genre-hierarchy.repository.ts";

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
		const artistGroupMembershipRepository = new ArtistGroupMembershipRepository(dataSource);
		const genreRepository = new GenreRepository(dataSource);

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

		const addArtistGroupMembershipService = new AddArtistGroupMembershipService(artistGroupMembershipRepository);
		const deleteArtistGroupMembershipService = new DeleteArtistGroupMembershipService(artistGroupMembershipRepository);
		const getArtistGroupMembershipService = new GetArtistGroupMembershipService(artistGroupMembershipRepository);
		const listArtistGroupMembershipsService = new ListArtistGroupMembershipsService(artistGroupMembershipRepository);
		const updateArtistGroupMembershipService = new UpdateArtistGroupMembershipService(artistGroupMembershipRepository);

		const addGenreService = new AddGenreService(genreRepository);
		const deleteGenreService = new DeleteGenreService(genreRepository);
		const getGenreService = new GetGenreService(genreRepository);
		const listGenresService = new ListGenresService(genreRepository);
		const updateGenreService = new UpdateGenreService(genreRepository);

		const genreHierarchyRepository = new GenreHierarchyRepository(dataSource);

		const addGenreHierarchyService = new AddGenreHierarchyService(genreHierarchyRepository);
		const deleteGenreHierarchyService = new DeleteGenreHierarchyService(genreHierarchyRepository);
		const getGenreHierarchyService = new GetGenreHierarchyService(genreHierarchyRepository);
		const listGenreHierarchiesService = new ListGenreHierarchiesService(genreHierarchyRepository);
		const updateGenreHierarchyService = new UpdateGenreHierarchyService(genreHierarchyRepository);

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

		const artistGroupMembershipController = new ArtistGroupMembershipController(
			addArtistGroupMembershipService,
			deleteArtistGroupMembershipService,
			getArtistGroupMembershipService,
			listArtistGroupMembershipsService,
			updateArtistGroupMembershipService,
		);

		const genreController = new GenreController(
			addGenreService,
			deleteGenreService,
			getGenreService,
			listGenresService,
			updateGenreService,
		);

		const genreHierarchyController = new GenreHierarchyController(
			addGenreHierarchyService,
			deleteGenreHierarchyService,
			getGenreHierarchyService,
			listGenreHierarchiesService,
			updateGenreHierarchyService,
		);

		// Routing
		app.route("/artists", artistRoutes(artistController));
		app.route("/artist-groups", artistGroupRoutes(artistGroupController));
		app.route("/artist-group-memberships", artistGroupMembershipRoutes(artistGroupMembershipController));
		app.route("/genres", genreRoutes(genreController));
		app.route("/genre-hierarchies", genreHierarchyRoutes(genreHierarchyController));

		Deno.serve({ port: PORT }, app.fetch);
		console.log(`Server listening on port ${PORT}`);
	})
	.catch((err) => {
		console.error("Database connection failed:", err);
		Deno.exit(1);
	});
