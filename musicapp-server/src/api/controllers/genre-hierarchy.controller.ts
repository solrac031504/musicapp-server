import { AddGenreHierarchyRequest } from "../../application/logic/services/genre-hierarchy/add/add-genre-hierarchy.request.ts";
import { AddGenreHierarchyResponse } from "../../application/logic/services/genre-hierarchy/add/add-genre-hierarchy.response.ts";
import { AddGenreHierarchyService } from "../../application/logic/services/genre-hierarchy/add/add-genre-hierarchy.service.ts";
import { DeleteGenreHierarchyRequest } from "../../application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.request.ts";
import { DeleteGenreHierarchyResponse } from "../../application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.response.ts";
import { DeleteGenreHierarchyService } from "../../application/logic/services/genre-hierarchy/delete/delete-genre-hierarchy.service.ts";
import { GetGenreHierarchyRequest } from "../../application/logic/services/genre-hierarchy/get/get-genre-hierarchy.request.ts";
import { GetGenreHierarchyResponse } from "../../application/logic/services/genre-hierarchy/get/get-genre-hierarchy.response.ts";
import { GetGenreHierarchyService } from "../../application/logic/services/genre-hierarchy/get/get-genre-hierarchy.service.ts";
import { ListGenreHierarchiesRequest } from "../../application/logic/services/genre-hierarchy/list/list-genre-hierarchies.request.ts";
import { ListGenreHierarchiesResponse } from "../../application/logic/services/genre-hierarchy/list/list-genre-hierarchies.response.ts";
import { ListGenreHierarchiesService } from "../../application/logic/services/genre-hierarchy/list/list-genre-hierarchies.service.ts";
import { UpdateGenreHierarchyRequest } from "../../application/logic/services/genre-hierarchy/update/update-genre-hierarchy.request.ts";
import { UpdateGenreHierarchyResponse } from "../../application/logic/services/genre-hierarchy/update/update-genre-hierarchy.response.ts";
import { UpdateGenreHierarchyService } from "../../application/logic/services/genre-hierarchy/update/update-genre-hierarchy.service.ts";

export class GenreHierarchyController {
	private readonly addGenreHierarchyService;
	private readonly deleteGenreHierarchyService;
	private readonly getGenreHierarchyService;
	private readonly listGenreHierarchiesService;
	private readonly updateGenreHierarchyService;

	constructor(
		addGenreHierarchyService: AddGenreHierarchyService,
		deleteGenreHierarchyService: DeleteGenreHierarchyService,
		getGenreHierarchyService: GetGenreHierarchyService,
		listGenreHierarchiesService: ListGenreHierarchiesService,
		updateGenreHierarchyService: UpdateGenreHierarchyService,
	) {
		this.addGenreHierarchyService = addGenreHierarchyService;
		this.deleteGenreHierarchyService = deleteGenreHierarchyService;
		this.getGenreHierarchyService = getGenreHierarchyService;
		this.listGenreHierarchiesService = listGenreHierarchiesService;
		this.updateGenreHierarchyService = updateGenreHierarchyService;
	}

	public async addGenreHierarchy(
		req: AddGenreHierarchyRequest,
	): Promise<AddGenreHierarchyResponse> {
		return await this.addGenreHierarchyService.execute(req);
	}

	public async deleteGenreHierarchy(
		req: DeleteGenreHierarchyRequest,
	): Promise<DeleteGenreHierarchyResponse> {
		return await this.deleteGenreHierarchyService.execute(req);
	}

	public async getGenreHierarchy(
		req: GetGenreHierarchyRequest,
	): Promise<GetGenreHierarchyResponse> {
		return await this.getGenreHierarchyService.execute(req);
	}

	public async listGenreHierarchies(
		req: ListGenreHierarchiesRequest,
	): Promise<ListGenreHierarchiesResponse> {
		return await this.listGenreHierarchiesService.execute(req);
	}

	public async updateGenreHierarchy(
		req: UpdateGenreHierarchyRequest,
	): Promise<UpdateGenreHierarchyResponse> {
		return await this.updateGenreHierarchyService.execute(req);
	}
}
