import { AddGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/add/add-genre-hierarchy.request.ts";
import { AddGenreHierarchyResponse } from "@application/logic/services/genre-hierarchy/add/add-genre-hierarchy.response.ts";
import { AddGenreHierarchyService } from "@application/logic/services/genre-hierarchy/add/add-genre-hierarchy.service.ts";
import { DeleteGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.request.ts";
import { DeleteGenreHierarchyResponse } from "@application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.response.ts";
import { DeleteGenreHierarchyService } from "@application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.service.ts";
import { GetGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/get/get-genre-hierarchy.request.ts";
import { GetGenreHierarchyResponse } from "@application/logic/services/genre-hierarchy/get/get-genre-hierarchy.response.ts";
import { GetGenreHierarchyService } from "@application/logic/services/genre-hierarchy/get/get-genre-hierarchy.service.ts";
import { ListGenreHierarchyByGenreRequest } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.request.ts";
import { ListGenreHierarchyByGenreResponse } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.response.ts";
import { ListGenreHierarchyByGenreService } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.service.ts";
import { UpdateGenreHierarchyRequest } from "@application/logic/services/genre-hierarchy/update/update-genre-hierarchy.request.ts";
import { UpdateGenreHierarchyResponse } from "@application/logic/services/genre-hierarchy/update/update-genre-hierarchy.response.ts";
import { UpdateGenreHierarchyService } from "@application/logic/services/genre-hierarchy/update/update-genre-hierarchy.service.ts";

export class GenreHierarchyController {
	private readonly addGenreHierarchyService;
	private readonly deleteGenreHierarchyService;
	private readonly getGenreHierarchyService;
	private readonly listGenreHierarchiesByGenreService;
	private readonly updateGenreHierarchyService;

	constructor(
		addGenreHierarchyService: AddGenreHierarchyService,
		deleteGenreHierarchyService: DeleteGenreHierarchyService,
		getGenreHierarchyService: GetGenreHierarchyService,
		listGenreHierarchiesByGenreService: ListGenreHierarchyByGenreService,
		updateGenreHierarchyService: UpdateGenreHierarchyService,
	) {
		this.addGenreHierarchyService = addGenreHierarchyService;
		this.deleteGenreHierarchyService = deleteGenreHierarchyService;
		this.getGenreHierarchyService = getGenreHierarchyService;
		this.listGenreHierarchiesByGenreService = listGenreHierarchiesByGenreService;
		this.updateGenreHierarchyService = updateGenreHierarchyService;
	}

	public async addGenreHierarchy(req: AddGenreHierarchyRequest): Promise<AddGenreHierarchyResponse> {
		return await this.addGenreHierarchyService.execute(req);
	}

	public async deleteGenreHierarchy(req: DeleteGenreHierarchyRequest): Promise<DeleteGenreHierarchyResponse> {
		return await this.deleteGenreHierarchyService.execute(req);
	}

	public async getGenreHierarchy(req: GetGenreHierarchyRequest): Promise<GetGenreHierarchyResponse> {
		return await this.getGenreHierarchyService.execute(req);
	}

	public async listGenreHierarchiesByGenre(req: ListGenreHierarchyByGenreRequest): Promise<ListGenreHierarchyByGenreResponse> {
		return await this.listGenreHierarchiesByGenreService.execute(req);
	}

	public async updateGenreHierarchy(req: UpdateGenreHierarchyRequest): Promise<UpdateGenreHierarchyResponse> {
		return await this.updateGenreHierarchyService.execute(req);
	}
}
