import { GenreHierarchyViewRepository } from "../../../../../../infrastructure/data-access/repositories/genre-hierarchy-view.repository.ts";
import { BaseService } from "../../../../../common/services/base-service.ts";
import { ListGenreHierarchyViewByGenreResponseMapper } from "../../../../mappers/response-mappers/list-genre-hierarchy-view-by-genre.request-mapper.ts";
import { ListGenreHierarchyViewByGenreRequest } from "./list-genre-hierarchy-view-by-genre.request.ts";
import { ListGenreHierarchyViewByGenreResponse } from "./list-genre-hierarchy-view-by-genre.response.ts";

export class ListGenreHierarchyViewByGenreService extends BaseService<ListGenreHierarchyViewByGenreRequest, ListGenreHierarchyViewByGenreResponse> {
	private readonly repo;
	private readonly resMapper = new ListGenreHierarchyViewByGenreResponseMapper();

	constructor(repo: GenreHierarchyViewRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: ListGenreHierarchyViewByGenreRequest): Promise<ListGenreHierarchyViewByGenreResponse> {
		const models = await this.repo.listByGenreId(req.id);

		return this.resMapper.map(models);
	}
}
