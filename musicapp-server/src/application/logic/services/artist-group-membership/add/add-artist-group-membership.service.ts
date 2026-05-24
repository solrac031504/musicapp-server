import { ArtistGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/artist-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { AddArtistGroupMembershipRequestMapper } from "../../../mappers/request-mappers/add-artist-group-membership.request-mapper.ts";
import { AddArtistGroupMembershipResponseMapper } from "../../../mappers/response-mappers/add-artist-group-membership.response-mapper.ts";
import { AddArtistGroupMembershipRequest } from "./add-artist-group-membership.request.ts";
import { AddArtistGroupMembershipResponse } from "./add-artist-group-membership.response.ts";

export class AddArtistGroupMembershipService extends BaseService<AddArtistGroupMembershipRequest, AddArtistGroupMembershipResponse> {
	private readonly repo;
	private readonly reqMapper = new AddArtistGroupMembershipRequestMapper();
	private readonly resMapper = new AddArtistGroupMembershipResponseMapper();

	constructor(repo: ArtistGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: AddArtistGroupMembershipRequest,
	): Promise<AddArtistGroupMembershipResponse> {
		const model = this.reqMapper.map(req);

		const addedModel = await this.repo.add(model);

		return this.resMapper.map(addedModel);
	}
}
