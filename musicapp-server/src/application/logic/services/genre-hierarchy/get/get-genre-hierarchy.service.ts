import { GenreHierarchyRepository } from "../../../../../infrastructure/data-access/repositories/genre-hierarchy.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetGenreHierarchyResponseMapper } from "../../../mappers/response-mappers/get-genre-hierarchy.response-mapper.ts";
import { GetGenreHierarchyRequest } from "./get-genre-hierarchy.request.ts";
import { GetGenreHierarchyResponse } from "./get-genre-hierarchy.response.ts";

export class GetGenreHierarchyService extends BaseService<GetGenreHierarchyRequest, GetGenreHierarchyResponse> {
	private readonly repo;
	private readonly resMapper = new GetGenreHierarchyResponseMapper();

	constructor(repo: GenreHierarchyRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetGenreHierarchyRequest,
	): Promise<GetGenreHierarchyResponse> {
		const model = await this.repo.getById(req.id);

		if (!model) return new GetGenreHierarchyResponse().notFound();

		return this.resMapper.map(model);
	}
}
