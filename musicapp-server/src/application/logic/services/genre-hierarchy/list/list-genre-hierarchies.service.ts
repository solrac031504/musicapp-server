import { GenreHierarchyRepository } from "../../../../../infrastructure/data-access/repositories/genre-hierarchy.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListGenreHierarchiesResponseMapper } from "../../../mappers/response-mappers/list-genre-hierarchies.response-mapper.ts";
import { ListGenreHierarchiesRequest } from "./list-genre-hierarchies.request.ts";
import { ListGenreHierarchiesResponse } from "./list-genre-hierarchies.response.ts";

export class ListGenreHierarchiesService extends BaseService<ListGenreHierarchiesRequest, ListGenreHierarchiesResponse> {
	private readonly repo;
	private readonly resMapper = new ListGenreHierarchiesResponseMapper();

	constructor(repo: GenreHierarchyRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: ListGenreHierarchiesRequest,
	): Promise<ListGenreHierarchiesResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
