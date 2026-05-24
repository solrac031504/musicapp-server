import { ArtistGroupRepository } from "../../../../../infrastructure/data-access/repositories/artist-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { DeleteArtistGroupRequest } from "./delete-artist-group.request.ts";
import { DeleteArtistGroupResponse } from "./delete-artist-group.response.ts";

export class DeleteArtistGroupService extends BaseService<DeleteArtistGroupRequest, DeleteArtistGroupResponse> {
	private readonly repo;

	constructor(repo: ArtistGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: DeleteArtistGroupRequest,
	): Promise<DeleteArtistGroupResponse> {
		await this.repo.delete(req.id);

		return new DeleteArtistGroupResponse();
	}
}
