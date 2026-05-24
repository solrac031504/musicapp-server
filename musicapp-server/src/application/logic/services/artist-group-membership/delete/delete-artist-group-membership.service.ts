import { ArtistGroupMembershipRepository } from "../../../../../infrastructure/data-access/repositories/artist-group-membership.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteArtistGroupMembershipRequest } from "./delete-artist-group-membership.request.ts";
import { DeleteArtistGroupMembershipResponse } from "./delete-artist-group-membership.response.ts";

export class DeleteArtistGroupMembershipService extends BaseService<DeleteArtistGroupMembershipRequest, DeleteArtistGroupMembershipResponse> {
	private readonly repo;

	constructor(repo: ArtistGroupMembershipRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: DeleteArtistGroupMembershipRequest,
	): Promise<DeleteArtistGroupMembershipResponse> {
		await this.repo.delete(req.id);

		return new DeleteArtistGroupMembershipResponse();
	}
}
