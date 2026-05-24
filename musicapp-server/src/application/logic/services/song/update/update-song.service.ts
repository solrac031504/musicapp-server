import { SongRepository } from "../../../../../infrastructure/data-access/repositories/song.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateSongRequestMapper } from "../../../mappers/request-mappers/update-song.request-mapper.ts";
import { UpdateSongResponseMapper } from "../../../mappers/response-mappers/update-song.response-mapper.ts";
import { UpdateSongRequest } from "./update-song.request.ts";
import { UpdateSongResponse } from "./update-song.response.ts";

export class UpdateSongService extends BaseService<UpdateSongRequest, UpdateSongResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateSongRequestMapper();
	private readonly resMapper = new UpdateSongResponseMapper();

	constructor(repo: SongRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: UpdateSongRequest): Promise<UpdateSongResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
