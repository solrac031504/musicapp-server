import { GenreHierarchyRepository } from "../../../../../infrastructure/data-access/repositories/genre-hierarchy.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteGenreHierarchyRequest } from "./delete-genre-hierarchy.request.ts";
import { DeleteGenreHierarchyResponse } from "./delete-genre-hierarchy.response.ts";

export class DeleteGenreHierarchyService extends BaseService<DeleteGenreHierarchyRequest, DeleteGenreHierarchyResponse> {
	private readonly repo;

	constructor(repo: GenreHierarchyRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: DeleteGenreHierarchyRequest,
	): Promise<DeleteGenreHierarchyResponse> {
		await this.repo.delete(req.id);

		return new DeleteGenreHierarchyResponse();
	}
}
