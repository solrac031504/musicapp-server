import { GenreRepository } from "../../../../../infrastructure/data-access/repositories/genre.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateGenreRequestMapper } from "../../../mappers/request-mappers/update-genre.request-mapper.ts";
import { UpdateGenreResponseMapper } from "../../../mappers/response-mappers/update-genre.response-mapper.ts";
import { UpdateGenreRequest } from "./update-genre.request.ts";
import { UpdateGenreResponse } from "./update-genre.response.ts";

export class UpdateGenreService extends BaseService<UpdateGenreRequest, UpdateGenreResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateGenreRequestMapper();
	private readonly resMapper = new UpdateGenreResponseMapper();

	constructor(repo: GenreRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateGenreRequest,
	): Promise<UpdateGenreResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
