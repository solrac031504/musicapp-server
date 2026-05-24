import { SongRepository } from "../../../../../infrastructure/data-access/repositories/song.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetSongResponseMapper } from "../../../mappers/response-mappers/get-song.response-mapper.ts";
import { GetSongRequest } from "./get-song.request.ts";
import { GetSongResponse } from "./get-song.response.ts";

export class GetSongService extends BaseService<GetSongRequest, GetSongResponse> {
	private readonly repo;
	private readonly resMapper = new GetSongResponseMapper();

	constructor(repo: SongRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: GetSongRequest): Promise<GetSongResponse> {
		const songModel = await this.repo.getById(req.id);

		if (!songModel) return new GetSongResponse().notFound();

		return this.resMapper.map(songModel!);
	}
}
