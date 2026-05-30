import { AddGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/add/add-genre-hierarchy.request.ts";
import { AddGenreHierarchyResponse } from "@application/logic/services/genre-hierarchy/add/add-genre-hierarchy.response.ts";
import { AddGenreHierarchyService } from "@application/logic/services/genre-hierarchy/add/add-genre-hierarchy.service.ts";
import { DeleteGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.request.ts";
import { DeleteGenreHierarchyResponse } from "@application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.response.ts";
import { DeleteGenreHierarchyService } from "@application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.service.ts";
import { ListGenreHierarchyByGenreRequest } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.request.ts";
import { ListGenreHierarchyByGenreResponse } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.response.ts";
import { ListGenreHierarchyByGenreService } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.service.ts";
import { ListGenreHierarchyByParentGenreRequest } from "@application/logic/services/genre-hierarchy/list/by-parent-genre/list-genre-hierarchy-by-parent-genre.request.ts";
import { ListGenreHierarchyByParentGenreResponse } from "@application/logic/services/genre-hierarchy/list/by-parent-genre/list-genre-hierarchy-by-parent-genre.response.ts";
import { ListGenreHierarchyByParentGenreService } from "@application/logic/services/genre-hierarchy/list/by-parent-genre/list-genre-hierarchy-by-parent-genre.service.ts";
import { UpdateGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/update/update-genre-hierarchy.request.ts";
import { UpdateGenreHierarchyResponse } from "@application/logic/services/genre-hierarchy/update/update-genre-hierarchy.response.ts";
import { UpdateGenreHierarchyService } from "@application/logic/services/genre-hierarchy/update/update-genre-hierarchy.service.ts";

export class GenreHierarchyController {
	private readonly addGenreHierarchyService;
	private readonly deleteGenreHierarchyService;
	private readonly listGenreHierarchiesByGenreService;
	private readonly listGenreHierarchiesByParentGenreService;
	private readonly updateGenreHierarchyService;

	constructor(
		addGenreHierarchyService: AddGenreHierarchyService,
		deleteGenreHierarchyService: DeleteGenreHierarchyService,
		listGenreHierarchiesByGenreService: ListGenreHierarchyByGenreService,
		listGenreHierarchiesByParentGenreService: ListGenreHierarchyByParentGenreService,
		updateGenreHierarchyService: UpdateGenreHierarchyService,
	) {
		this.addGenreHierarchyService = addGenreHierarchyService;
		this.deleteGenreHierarchyService = deleteGenreHierarchyService;
		this.listGenreHierarchiesByGenreService = listGenreHierarchiesByGenreService;
		this.listGenreHierarchiesByParentGenreService = listGenreHierarchiesByParentGenreService;
		this.updateGenreHierarchyService = updateGenreHierarchyService;
	}

	public async addGenreHierarchy(req: AddGenreHierarchyRequest): Promise<AddGenreHierarchyResponse> {
		return await this.addGenreHierarchyService.execute(req);
	}

	public async deleteGenreHierarchy(req: DeleteGenreHierarchyRequest): Promise<DeleteGenreHierarchyResponse> {
		return await this.deleteGenreHierarchyService.execute(req);
	}

	public async listGenreHierarchiesByGenre(req: ListGenreHierarchyByGenreRequest): Promise<ListGenreHierarchyByGenreResponse> {
		return await this.listGenreHierarchiesByGenreService.execute(req);
	}

	public async listGenreHierarchiesByParentGenre(req: ListGenreHierarchyByParentGenreRequest): Promise<ListGenreHierarchyByParentGenreResponse> {
		return await this.listGenreHierarchiesByParentGenreService.execute(req);
	}

	public async updateGenreHierarchy(req: UpdateGenreHierarchyRequest): Promise<UpdateGenreHierarchyResponse> {
		return await this.updateGenreHierarchyService.execute(req);
	}
}
