import { SongRepository } from "../../../../../infrastructure/data-access/repositories/song.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteSongRequest } from "./delete-song.request.ts";
import { DeleteSongResponse } from "./delete-song.response.ts";

export class DeleteSongService extends BaseService<DeleteSongRequest, DeleteSongResponse> {
	private readonly repo;

	constructor(repo: SongRepository) {
		super();
		this.repo = repo;
	}

	override async execute(req: DeleteSongRequest): Promise<DeleteSongResponse> {
		await this.repo.delete(req.id);

		return new DeleteSongResponse();
	}
}
