import { GenreHierarchyRepository } from "../../../../../infrastructure/data-access/repositories/genre-hierarchy.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddGenreHierarchyRequestMapper } from "../../../mappers/request-mappers/add-genre-hierarchy.request-mapper.ts";
import { AddGenreHierarchyResponseMapper } from "../../../mappers/response-mappers/add-genre-hierarchy.response-mapper.ts";
import { AddGenreHierarchyRequest } from "./add-genre-hierarchy.request.ts";
import { AddGenreHierarchyResponse } from "./add-genre-hierarchy.response.ts";

export class AddGenreHierarchyService extends BaseService<AddGenreHierarchyRequest, AddGenreHierarchyResponse> {
	private readonly repo;
	private readonly reqMapper = new AddGenreHierarchyRequestMapper();
	private readonly resMapper = new AddGenreHierarchyResponseMapper();

	constructor(repo: GenreHierarchyRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: AddGenreHierarchyRequest,
	): Promise<AddGenreHierarchyResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
