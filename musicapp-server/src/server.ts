// #region Imports
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import "reflect-metadata";
import { ArtistGroupMembershipController } from "./api/controllers/artist-group-membership.controller.ts";
import { ArtistGroupController } from "./api/controllers/artist-group.controller.ts";
import { ArtistController } from "./api/controllers/artist.controller.ts";
import { GenreHierarchyController } from "./api/controllers/genre-hierarchy.controller.ts";
import { GenreController } from "./api/controllers/genre.controller.ts";
import { LoginController } from "./api/controllers/login.controller.ts";
import { ProducerGroupMembershipController } from "./api/controllers/producer-group-membership.controller.ts";
import { ProducerGroupController } from "./api/controllers/producer-group.controller.ts";
import { ProducerController } from "./api/controllers/producer.controller.ts";
import { ProjectTypeController } from "./api/controllers/project-type.controller.ts";
import { ProjectController } from "./api/controllers/project.controller.ts";
import { SceneController } from "./api/controllers/scene.controller.ts";
import { SongController } from "./api/controllers/song.controller.ts";
import { StreamingServiceController } from "./api/controllers/streaming-service.controller.ts";
import { artistGroupMembershipRoutes } from "./api/routes/artist-group-membership.routes.ts";
import { artistGroupRoutes } from "./api/routes/artist-group.routes.ts";
import { artistRoutes } from "./api/routes/artist.routes.ts";
import { genreHierarchyRoutes } from "./api/routes/genre-hierarchy.routes.ts";
import { genreRoutes } from "./api/routes/genre.routes.ts";
import { loginRoutes } from "./api/routes/login.routes.ts";
import { producerGroupMembershipRoutes } from "./api/routes/producer-group-membership.routes.ts";
import { producerGroupRoutes } from "./api/routes/producer-group.routes.ts";
import { producerRoutes } from "./api/routes/producer.routes.ts";
import { projectTypeRoutes } from "./api/routes/project-type.routes.ts";
import { projectRoutes } from "./api/routes/project.routes.ts";
import { sceneRoutes } from "./api/routes/scene.routes.ts";
import { songRoutes } from "./api/routes/song.routes.ts";
import { streamingServiceRoutes } from "./api/routes/streaming-service.routes.ts";
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
import { AddGenreHierarchyService } from "./application/logic/services/genre-hierarchy/add/add-genre-hierarchy.service.ts";
import { DeleteGenreHierarchyService } from "./application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.service.ts";
import { GetGenreHierarchyService } from "./application/logic/services/genre-hierarchy/get/get-genre-hierarchy.service.ts";
import { ListGenreHierarchiesService } from "./application/logic/services/genre-hierarchy/list/list-genre-hierarchies.service.ts";
import { UpdateGenreHierarchyService } from "./application/logic/services/genre-hierarchy/update/update-genre-hierarchy.service.ts";
import { AddGenreService } from "./application/logic/services/genre/add/add-genre.service.ts";
import { DeleteGenreService } from "./application/logic/services/genre/delete/delete-genre.service.ts";
import { GetGenreService } from "./application/logic/services/genre/get/get-genre.service.ts";
import { ListGenresService } from "./application/logic/services/genre/list/list-genres.service.ts";
import { UpdateGenreService } from "./application/logic/services/genre/update/update-genre.service.ts";
import { LoginUserService } from "./application/logic/services/login-user/login/login-user.service.ts";
import { AddProducerGroupMembershipService } from "./application/logic/services/producer-group-membership/add/add-producer-group-membership.service.ts";
import { DeleteProducerGroupMembershipService } from "./application/logic/services/producer-group-membership/delete/delete-producer-group-membership.service.ts";
import { GetProducerGroupMembershipService } from "./application/logic/services/producer-group-membership/get/get-producer-group-membership.service.ts";
import { ListProducerGroupMembershipsService } from "./application/logic/services/producer-group-membership/list/list-producer-group-memberships.service.ts";
import { UpdateProducerGroupMembershipService } from "./application/logic/services/producer-group-membership/update/update-producer-group-membership.service.ts";
import { AddProducerGroupService } from "./application/logic/services/producer-group/add/add-producer-group.service.ts";
import { DeleteProducerGroupService } from "./application/logic/services/producer-group/delete/delete-producer-group.service.ts";
import { GetProducerGroupService } from "./application/logic/services/producer-group/get/get-producer-group.service.ts";
import { ListProducerGroupsService } from "./application/logic/services/producer-group/list/list-producer-groups.service.ts";
import { UpdateProducerGroupService } from "./application/logic/services/producer-group/update/update-producer-group.service.ts";
import { AddProducerService } from "./application/logic/services/producer/add/add-producer.service.ts";
import { DeleteProducerService } from "./application/logic/services/producer/delete/delete-producer.service.ts";
import { GetProducerService } from "./application/logic/services/producer/get/get-producer.service.ts";
import { ListProducersService } from "./application/logic/services/producer/list/list-producers.service.ts";
import { UpdateProducerService } from "./application/logic/services/producer/update/update-producer.service.ts";
import { AddProjectTypeService } from "./application/logic/services/project-type/add/add-project-type.service.ts";
import { DeleteProjectTypeService } from "./application/logic/services/project-type/delete/delete-project-type.service.ts";
import { GetProjectTypeService } from "./application/logic/services/project-type/get/get-project-type.service.ts";
import { ListProjectTypesService } from "./application/logic/services/project-type/list/list-project-types.service.ts";
import { UpdateProjectTypeService } from "./application/logic/services/project-type/update/update-project-type.service.ts";
import { AddProjectService } from "./application/logic/services/project/add/add-project.service.ts";
import { DeleteProjectService } from "./application/logic/services/project/delete/delete-project.service.ts";
import { GetProjectService } from "./application/logic/services/project/get/get-project.service.ts";
import { ListProjectsService } from "./application/logic/services/project/list/list-projects.service.ts";
import { UpdateProjectService } from "./application/logic/services/project/update/update-project.service.ts";
import { AddSceneService } from "./application/logic/services/scene/add/add-scene.service.ts";
import { DeleteSceneService } from "./application/logic/services/scene/delete/delete-scene.service.ts";
import { GetSceneService } from "./application/logic/services/scene/get/get-scene.service.ts";
import { ListScenesService } from "./application/logic/services/scene/list/list-scenes.service.ts";
import { UpdateSceneService } from "./application/logic/services/scene/update/update-scene.service.ts";
import { AddSongService } from "./application/logic/services/song/add/add-song.service.ts";
import { DeleteSongService } from "./application/logic/services/song/delete/delete-song.service.ts";
import { GetSongService } from "./application/logic/services/song/get/get-song.service.ts";
import { ListSongsService } from "./application/logic/services/song/list/list-songs.service.ts";
import { UpdateSongService } from "./application/logic/services/song/update/update-song.service.ts";
import { AddStreamingServiceService } from "./application/logic/services/streaming-service/add/add-streaming-service.service.ts";
import { DeleteStreamingServiceService } from "./application/logic/services/streaming-service/delete/delete-streaming-service.service.ts";
import { GetStreamingServiceService } from "./application/logic/services/streaming-service/get/get-streaming-service.service.ts";
import { ListStreamingServicesService } from "./application/logic/services/streaming-service/list/list-streaming-services.service.ts";
import { UpdateStreamingServiceService } from "./application/logic/services/streaming-service/update/update-streaming-service.service.ts";
import { dataSource } from "./infrastructure/data-access/databases/database.ts";
import { LoginUserProcedure } from "./infrastructure/data-access/procedures/login-user.procedure.ts";
import { ArtistGroupMembershipRepository } from "./infrastructure/data-access/repositories/artist-group-membership.repository.ts";
import { ArtistGroupRepository } from "./infrastructure/data-access/repositories/artist-group.repository.ts";
import { ArtistRepository } from "./infrastructure/data-access/repositories/artist.repository.ts";
import { GenreHierarchyRepository } from "./infrastructure/data-access/repositories/genre-hierarchy.repository.ts";
import { GenreRepository } from "./infrastructure/data-access/repositories/genre.repository.ts";
import { LoginUserRepository } from "./infrastructure/data-access/repositories/login-user.repository.ts";
import { ProducerGroupMembershipRepository } from "./infrastructure/data-access/repositories/producer-group-membership.repository.ts";
import { ProducerGroupRepository } from "./infrastructure/data-access/repositories/producer-group.repository.ts";
import { ProducerRepository } from "./infrastructure/data-access/repositories/producer.repository.ts";
import { ProjectTypeRepository } from "./infrastructure/data-access/repositories/project-type.repository.ts";
import { ProjectRepository } from "./infrastructure/data-access/repositories/project.repository.ts";
import { SceneRepository } from "./infrastructure/data-access/repositories/scene.repository.ts";
import { SongRepository } from "./infrastructure/data-access/repositories/song.repository.ts";
import { StreamingServiceRepository } from "./infrastructure/data-access/repositories/streaming-service.repository.ts";
// #endregion

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
		const genreHierarchyRepository = new GenreHierarchyRepository(dataSource);
		const loginUserRepository = new LoginUserRepository(dataSource, new LoginUserProcedure(dataSource));
		const producerRepository = new ProducerRepository(dataSource);
		const producerGroupRepository = new ProducerGroupRepository(dataSource);
		const producerGroupMembershipRepository = new ProducerGroupMembershipRepository(dataSource);
		const projectTypeRepository = new ProjectTypeRepository(dataSource);
		const projectRepository = new ProjectRepository(dataSource);
		const sceneRepository = new SceneRepository(dataSource);
		const songRepository = new SongRepository(dataSource);
		const streamingServiceRepository = new StreamingServiceRepository(dataSource);

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

		const loginUserService = new LoginUserService(loginUserRepository);

		const addProducerService = new AddProducerService(producerRepository);
		const deleteProducerService = new DeleteProducerService(producerRepository);
		const getProducerService = new GetProducerService(producerRepository);
		const listProducersService = new ListProducersService(producerRepository);
		const updateProducerService = new UpdateProducerService(producerRepository);

		const addProducerGroupService = new AddProducerGroupService(producerGroupRepository);
		const deleteProducerGroupService = new DeleteProducerGroupService(producerGroupRepository);
		const getProducerGroupService = new GetProducerGroupService(producerGroupRepository);
		const listProducerGroupsService = new ListProducerGroupsService(producerGroupRepository);
		const updateProducerGroupService = new UpdateProducerGroupService(producerGroupRepository);

		const addProducerGroupMembershipService = new AddProducerGroupMembershipService(producerGroupMembershipRepository);
		const deleteProducerGroupMembershipService = new DeleteProducerGroupMembershipService(producerGroupMembershipRepository);
		const getProducerGroupMembershipService = new GetProducerGroupMembershipService(producerGroupMembershipRepository);
		const listProducerGroupMembershipsService = new ListProducerGroupMembershipsService(producerGroupMembershipRepository);
		const updateProducerGroupMembershipService = new UpdateProducerGroupMembershipService(producerGroupMembershipRepository);

		const addGenreHierarchyService = new AddGenreHierarchyService(genreHierarchyRepository);
		const deleteGenreHierarchyService = new DeleteGenreHierarchyService(genreHierarchyRepository);
		const getGenreHierarchyService = new GetGenreHierarchyService(genreHierarchyRepository);
		const listGenreHierarchiesService = new ListGenreHierarchiesService(genreHierarchyRepository);
		const updateGenreHierarchyService = new UpdateGenreHierarchyService(genreHierarchyRepository);

		const addProjectTypeService = new AddProjectTypeService(projectTypeRepository);
		const deleteProjectTypeService = new DeleteProjectTypeService(projectTypeRepository);
		const getProjectTypeService = new GetProjectTypeService(projectTypeRepository);
		const listProjectTypesService = new ListProjectTypesService(projectTypeRepository);
		const updateProjectTypeService = new UpdateProjectTypeService(projectTypeRepository);

		const addProjectService = new AddProjectService(projectRepository);
		const deleteProjectService = new DeleteProjectService(projectRepository);
		const getProjectService = new GetProjectService(projectRepository);
		const listProjectsService = new ListProjectsService(projectRepository);
		const updateProjectService = new UpdateProjectService(projectRepository);

		const addSceneService = new AddSceneService(sceneRepository);
		const deleteSceneService = new DeleteSceneService(sceneRepository);
		const getSceneService = new GetSceneService(sceneRepository);
		const listScenesService = new ListScenesService(sceneRepository);
		const updateSceneService = new UpdateSceneService(sceneRepository);

		const addSongService = new AddSongService(songRepository);
		const deleteSongService = new DeleteSongService(songRepository);
		const getSongService = new GetSongService(songRepository);
		const listSongsService = new ListSongsService(songRepository);
		const updateSongService = new UpdateSongService(songRepository);

		const addStreamingServiceService = new AddStreamingServiceService(streamingServiceRepository);
		const deleteStreamingServiceService = new DeleteStreamingServiceService(streamingServiceRepository);
		const getStreamingServiceService = new GetStreamingServiceService(streamingServiceRepository);
		const listStreamingServicesService = new ListStreamingServicesService(streamingServiceRepository);
		const updateStreamingServiceService = new UpdateStreamingServiceService(streamingServiceRepository);

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

		const loginController = new LoginController(loginUserService);

		const producerController = new ProducerController(
			addProducerService,
			deleteProducerService,
			getProducerService,
			listProducersService,
			updateProducerService,
		);

		const producerGroupController = new ProducerGroupController(
			addProducerGroupService,
			deleteProducerGroupService,
			getProducerGroupService,
			listProducerGroupsService,
			updateProducerGroupService,
		);

		const producerGroupMembershipController = new ProducerGroupMembershipController(
			addProducerGroupMembershipService,
			deleteProducerGroupMembershipService,
			getProducerGroupMembershipService,
			listProducerGroupMembershipsService,
			updateProducerGroupMembershipService,
		);

		const projectTypeController = new ProjectTypeController(
			addProjectTypeService,
			deleteProjectTypeService,
			getProjectTypeService,
			listProjectTypesService,
			updateProjectTypeService,
		);

		const projectController = new ProjectController(
			addProjectService,
			deleteProjectService,
			getProjectService,
			listProjectsService,
			updateProjectService,
		);

		const sceneController = new SceneController(
			addSceneService,
			deleteSceneService,
			getSceneService,
			listScenesService,
			updateSceneService,
		);

		const songController = new SongController(
			addSongService,
			deleteSongService,
			getSongService,
			listSongsService,
			updateSongService,
		);

		const streamingServiceController = new StreamingServiceController(
			addStreamingServiceService,
			deleteStreamingServiceService,
			getStreamingServiceService,
			listStreamingServicesService,
			updateStreamingServiceService,
		);

		// Routing
		app.route("/artists", artistRoutes(artistController));
		app.route("/artist-groups", artistGroupRoutes(artistGroupController));
		app.route("/artist-group-memberships", artistGroupMembershipRoutes(artistGroupMembershipController));
		app.route("/genres", genreRoutes(genreController));
		app.route("/genre-hierarchies", genreHierarchyRoutes(genreHierarchyController));
		app.route("/login", loginRoutes(loginController));
		app.route("/producers", producerRoutes(producerController));
		app.route("/producer-groups", producerGroupRoutes(producerGroupController));
		app.route("/producer-group-memberships", producerGroupMembershipRoutes(producerGroupMembershipController));
		app.route("/project-types", projectTypeRoutes(projectTypeController));
		app.route("/projects", projectRoutes(projectController));
		app.route("/scenes", sceneRoutes(sceneController));
		app.route("/songs", songRoutes(songController));
		app.route("/streaming-services", streamingServiceRoutes(streamingServiceController));

		Deno.serve({ port: PORT }, app.fetch);
		console.log(`Server listening on port ${PORT}`);
	})
	.catch((err) => {
		console.error("Database connection failed:", err);
		Deno.exit(1);
	});
