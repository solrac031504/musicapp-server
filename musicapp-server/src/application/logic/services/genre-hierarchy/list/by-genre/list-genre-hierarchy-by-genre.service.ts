import { BaseService } from "@application/common/services/base-service.ts";
import { ListGenreHierarchyByGenreResponseMapper } from "@application/logic/mappers/response-mappers/list-genre-hierarchy-by-genre.request-mapper.ts";
import { ListGenreHierarchyByGenreRequest } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.request.ts";
import { ListGenreHierarchyByGenreResponse } from "@application/logic/services/genre-hierarchy/list/by-genre/list-genre-hierarchy-by-genre.response.ts";
import { GenreHierarchyViewRepository } from "@infrastructure/data-access/repositories/genre-hierarchy-view.repository.ts";

export class ListGenreHierarchyByGenreService extends BaseService<ListGenreHierarchyByGenreRequest, ListGenreHierarchyByGenreResponse> {
	private readonly repo;
	private readonly resMapper = new ListGenreHierarchyByGenreResponseMapper();

	constructor(repo: GenreHierarchyViewRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: ListGenreHierarchyByGenreRequest): Promise<ListGenreHierarchyByGenreResponse> {
		const models = await this.repo.listByGenreId(req.id);

		return this.resMapper.map(models);
	}
}
