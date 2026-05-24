import { GenreRepository } from "../../../../../infrastructure/data-access/repositories/genre.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddGenreRequestMapper } from "../../../mappers/request-mappers/add-genre.request-mapper.ts";
import { AddGenreResponseMapper } from "../../../mappers/response-mappers/add-genre.response-mapper.ts";
import { AddGenreRequest } from "./add-genre.request.ts";
import { AddGenreResponse } from "./add-genre.response.ts";

export class AddGenreService extends BaseService<AddGenreRequest, AddGenreResponse> {
	private readonly repo;
	private readonly reqMapper = new AddGenreRequestMapper();
	private readonly resMapper = new AddGenreResponseMapper();

	constructor(repo: GenreRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: AddGenreRequest,
	): Promise<AddGenreResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
