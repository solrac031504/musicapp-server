import { BaseService } from "@application/common/services/base-service.ts";
import { ListGenreHierarchyByParentGenreResponseMapper } from "@application/logic/mappers/response-mappers/list-genre-hierarchy-by-parent-genre.response-mapper.ts";
import { ListGenreHierarchyByParentGenreRequest } from "@application/logic/services/genre-hierarchy/list/by-parent-genre/list-genre-hierarchy-by-parent-genre.request.ts";
import { ListGenreHierarchyByParentGenreResponse } from "@application/logic/services/genre-hierarchy/list/by-parent-genre/list-genre-hierarchy-by-parent-genre.response.ts";
import { GenreHierarchyViewRepository } from "@infrastructure/data-access/repositories/genre-hierarchy-view.repository.ts";

export class ListGenreHierarchyByParentGenreService extends BaseService<ListGenreHierarchyByParentGenreRequest, ListGenreHierarchyByParentGenreResponse> {
	private readonly repo;
	private readonly resMapper = new ListGenreHierarchyByParentGenreResponseMapper();

	constructor(repo: GenreHierarchyViewRepository) {
		super();

		this.repo = repo;
	}

	public override async execute(req: ListGenreHierarchyByParentGenreRequest): Promise<ListGenreHierarchyByParentGenreResponse> {
		const models = await this.repo.listByParentGenreId(req.id);

		return this.resMapper.map(models);
	}
}
