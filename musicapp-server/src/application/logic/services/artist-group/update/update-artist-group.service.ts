import { ArtistGroupRepository } from "../../../../../infrastructure/data-access/repositories/artist-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateArtistGroupRequestMapper } from "../../../mappers/request-mappers/update-artist-group.request-mapper.ts";
import { UpdateArtistGroupResponseMapper } from "../../../mappers/response-mappers/update-artist-group.response-mapper.ts";
import { UpdateArtistGroupRequest } from "./update-artist-group.request.ts";
import { UpdateArtistGroupResponse } from "./update-artist-group.response.ts";

export class UpdateArtistGroupService extends BaseService<UpdateArtistGroupRequest, UpdateArtistGroupResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateArtistGroupRequestMapper();
	private readonly resMapper = new UpdateArtistGroupResponseMapper();

	constructor(repo: ArtistGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateArtistGroupRequest,
	): Promise<UpdateArtistGroupResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
