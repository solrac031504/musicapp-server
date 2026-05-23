import { ArtistRepository } from "../../../../../infrastructure/data-access/repositories/artist.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateArtistRequestMapper } from "../../../mappers/request-mappers/update-artist.request-mapper.ts";
import { UpdateArtistResponseMapper } from "../../../mappers/response-mappers/update-artist.response-mapper.ts";
import { UpdateArtistRequest } from "./update-artist.request.ts";
import { UpdateArtistResponse } from "./update-artist.response.ts";

export class UpdateArtistService extends BaseService<UpdateArtistRequest, UpdateArtistResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateArtistRequestMapper();
	private readonly resMapper = new UpdateArtistResponseMapper();

	constructor(repo: ArtistRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateArtistRequest,
	): Promise<UpdateArtistResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
