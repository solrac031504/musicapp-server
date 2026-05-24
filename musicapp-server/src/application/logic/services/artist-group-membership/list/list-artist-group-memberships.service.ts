import { ArtistGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/artist-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListArtistGroupMembershipsResponseMapper } from "../../../mappers/response-mappers/list-artist-group-memberships.response-mapper.ts";
import { ListArtistGroupMembershipsRequest } from "./list-artist-group-memberships.request.ts";
import { ListArtistGroupMembershipsResponse } from "./list-artist-group-memberships.response.ts";

export class ListArtistGroupMembershipsService extends BaseService<ListArtistGroupMembershipsRequest, ListArtistGroupMembershipsResponse> {
	private readonly repo;
	private readonly resMapper = new ListArtistGroupMembershipsResponseMapper();

	constructor(repo: ArtistGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		_req: ListArtistGroupMembershipsRequest,
	): Promise<ListArtistGroupMembershipsResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
