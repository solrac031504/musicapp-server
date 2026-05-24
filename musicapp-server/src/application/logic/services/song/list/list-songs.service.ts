import { SongRepository } from "../../../../../infrastructure/data-access/repositories/song.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListSongsResponseMapper } from "../../../mappers/response-mappers/list-songs.response-mapper.ts";
import { ListSongsRequest } from "./list-songs.request.ts";
import { ListSongsResponse } from "./list-songs.response.ts";

export class ListSongsService extends BaseService<ListSongsRequest, ListSongsResponse> {
	private readonly repo;
	private readonly resMapper = new ListSongsResponseMapper();

	constructor(repo: SongRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(_req: ListSongsRequest): Promise<ListSongsResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
