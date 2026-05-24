import { SongRepository } from "../../../../../infrastructure/data-access/repositories/song.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddSongRequestMapper } from "../../../mappers/request-mappers/add-song.request-mapper.ts";
import { AddSongResponseMapper } from "../../../mappers/response-mappers/add-song.response-mapper.ts";
import { AddSongRequest } from "../add/add-song.request.ts";
import { AddSongResponse } from "../add/add-song.response.ts";

export class AddSongService extends BaseService<AddSongRequest, AddSongResponse> {
	private readonly repo;
	private readonly reqMapper = new AddSongRequestMapper();
	private readonly resMapper = new AddSongResponseMapper();

	constructor(repo: SongRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(req: AddSongRequest): Promise<AddSongResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
