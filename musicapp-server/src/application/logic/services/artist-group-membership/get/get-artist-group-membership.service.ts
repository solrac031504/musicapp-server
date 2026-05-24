import { ArtistGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/artist-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetArtistGroupMembershipResponseMapper } from "../../../mappers/response-mappers/get-artist-group-membership.response-mapper.ts";
import { GetArtistGroupMembershipRequest } from "./get-artist-group-membership.request.ts";
import { GetArtistGroupMembershipResponse } from "./get-artist-group-membership.response.ts";

export class GetArtistGroupMembershipService extends BaseService<GetArtistGroupMembershipRequest, GetArtistGroupMembershipResponse> {
	private readonly repo;
	private readonly resMapper = new GetArtistGroupMembershipResponseMapper();

	constructor(repo: ArtistGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetArtistGroupMembershipRequest,
	): Promise<GetArtistGroupMembershipResponse> {
		const model = await this.repo.getById(req.id);

		if (!model) return new GetArtistGroupMembershipResponse().notFound();

		return this.resMapper.map(model);
	}
}
