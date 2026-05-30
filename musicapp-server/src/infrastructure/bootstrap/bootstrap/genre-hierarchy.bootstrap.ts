import { GenreHierarchyController } from "@api/controllers/genre-hierarchy.controller.ts";
import { AddGenreHierarchyService } from "@application/logic/services/genre-hierarchy/add/add-genre-hierarchy.service.ts";
import { DeleteGenreHierarchyService } from "@application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.service.ts";
import { ListGenreHierarchyByGenreService } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.service.ts";
import { ListGenreHierarchyByParentGenreService } from "@application/logic/services/genre-hierarchy/list/by-parent-genre/list-genre-hierarchy-by-parent-genre.service.ts";
import { UpdateGenreHierarchyService } from "@application/logic/services/genre-hierarchy/update/update-genre-hierarchy.service.ts";
import { GenreHierarchyViewRepository } from "@infrastructure/data-access/repositories/genre-hierarchy-view.repository.ts";
import { GenreHierarchyRepository } from "@infrastructure/data-access/repositories/genre-hierarchy.repository.ts";
import { DataSource } from "typeorm";

export function bootstrapGenreHierarchy(dataSource: DataSource): GenreHierarchyController {
	const repo = new GenreHierarchyRepository(dataSource);
	const viewRepo = new GenreHierarchyViewRepository(dataSource);

	return new GenreHierarchyController(
		new AddGenreHierarchyService(repo),
		new DeleteGenreHierarchyService(repo),
		new ListGenreHierarchyByGenreService(viewRepo),
		new ListGenreHierarchyByParentGenreService(viewRepo),
		new UpdateGenreHierarchyService(repo),
	);
}
