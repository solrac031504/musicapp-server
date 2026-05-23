import { GenreRepository } from "../../../../../infrastructure/data-access/repositories/genre.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListGenresResponseMapper } from "../../../mappers/response-mappers/list-genres.response-mapper.ts";
import { ListGenresRequest } from "./list-genres.request.ts";
import { ListGenresResponse } from "./list-genres.response.ts";

export class ListGenresService extends BaseService<ListGenresRequest, ListGenresResponse> {
	private readonly repo;
	private readonly resMapper = new ListGenresResponseMapper();

	constructor(repo: GenreRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		_req: ListGenresRequest,
	): Promise<ListGenresResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
