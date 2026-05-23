import { ArtistGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/artist-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { UpdateArtistGroupMembershipRequestMapper } from "../../../mappers/request-mappers/update-artist-group-membership.request-mapper.ts";
import { UpdateArtistGroupMembershipResponseMapper } from "../../../mappers/response-mappers/update-artist-group-membership.response-mapper.ts";
import { UpdateArtistGroupMembershipRequest } from "./update-artist-group-membership.request.ts";
import { UpdateArtistGroupMembershipResponse } from "./update-artist-group-membership.response.ts";

export class UpdateArtistGroupMembershipService extends BaseService<UpdateArtistGroupMembershipRequest, UpdateArtistGroupMembershipResponse> {
	private readonly repo;
	private readonly reqMapper = new UpdateArtistGroupMembershipRequestMapper();
	private readonly resMapper = new UpdateArtistGroupMembershipResponseMapper();

	constructor(repo: ArtistGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: UpdateArtistGroupMembershipRequest,
	): Promise<UpdateArtistGroupMembershipResponse> {
		const model = this.reqMapper.map(req);

		const updatedModel = await this.repo.update(model);

		return this.resMapper.map(updatedModel);
	}
}
