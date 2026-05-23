import { ArtistGroupRepository } from "../../../../../infrastructure/data-access/repositories/artist-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddArtistGroupRequestMapper } from "../../../mappers/request-mappers/add-artist-group.request-mapper.ts";
import { AddArtistGroupResponseMapper } from "../../../mappers/response-mappers/add-artist-group.response-mapper.ts";
import { AddArtistGroupRequest } from "./add-artist-group.request.ts";
import { AddArtistGroupResponse } from "./add-artist-group.response.ts";

export class AddArtistGroupService extends BaseService<AddArtistGroupRequest, AddArtistGroupResponse> {
	private readonly repo;
	private readonly reqMapper = new AddArtistGroupRequestMapper();
	private readonly resMapper = new AddArtistGroupResponseMapper();

	constructor(repo: ArtistGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: AddArtistGroupRequest,
	): Promise<AddArtistGroupResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
