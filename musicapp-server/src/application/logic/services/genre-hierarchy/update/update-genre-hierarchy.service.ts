import { GenreHierarchyRepository } from "../../../../../infrastructure/data-access/repositories/genre-hierarchy.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateGenreHierarchyRequestMapper } from "../../../mappers/request-mappers/update-genre-hierarchy.request-mapper.ts";
import { UpdateGenreHierarchyResponseMapper } from "../../../mappers/response-mappers/update-genre-hierarchy.response-mapper.ts";
import { UpdateGenreHierarchyRequest } from "./update-genre-hierarchy.request.ts";
import { UpdateGenreHierarchyResponse } from "./update-genre-hierarchy.response.ts";

export class UpdateGenreHierarchyService extends BaseService<UpdateGenreHierarchyRequest, UpdateGenreHierarchyResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateGenreHierarchyRequestMapper();
	private readonly resMapper = new UpdateGenreHierarchyResponseMapper();

	constructor(repo: GenreHierarchyRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateGenreHierarchyRequest,
	): Promise<UpdateGenreHierarchyResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
