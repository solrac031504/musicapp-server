import { GenreRepository } from "../../../../../infrastructure/data-access/repositories/genre.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteGenreRequest } from "./delete-genre.request.ts";
import { DeleteGenreResponse } from "./delete-genre.response.ts";

export class DeleteGenreService extends BaseService<DeleteGenreRequest, DeleteGenreResponse> {
	private readonly repo;

	constructor(repo: GenreRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: DeleteGenreRequest,
	): Promise<DeleteGenreResponse> {
		await this.repo.delete(req.id);

		return new DeleteGenreResponse();
	}
}
