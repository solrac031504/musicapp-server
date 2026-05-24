import { GenreRepository } from "../../../../../infrastructure/data-access/repositories/genre.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetGenreResponseMapper } from "../../../mappers/response-mappers/get-genre.response-mapper.ts";
import { GetGenreRequest } from "./get-genre.request.ts";
import { GetGenreResponse } from "./get-genre.response.ts";

export class GetGenreService extends BaseService<GetGenreRequest, GetGenreResponse> {
	private readonly repo;
	private readonly resMapper = new GetGenreResponseMapper();

	constructor(repo: GenreRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetGenreRequest,
	): Promise<GetGenreResponse> {
		const model = await this.repo.getById(req.id);

		if (!model) return new GetGenreResponse().notFound();

		return this.resMapper.map(model);
	}
}
