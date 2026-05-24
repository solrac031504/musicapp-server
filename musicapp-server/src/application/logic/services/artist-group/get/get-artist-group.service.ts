import { ArtistGroupRepository } from "../../../../../infrastructure/data-access/repositories/artist-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { GetArtistGroupResponseMapper } from "../../../mappers/response-mappers/get-artist-group.response-mapper.ts";
import { GetArtistGroupRequest } from "./get-artist-group.request.ts";
import { GetArtistGroupResponse } from "./get-artist-group.response.ts";

export class GetArtistGroupService extends BaseService<GetArtistGroupRequest, GetArtistGroupResponse> {
	private readonly repo;
	private readonly resMapper = new GetArtistGroupResponseMapper();

	constructor(repo: ArtistGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		req: GetArtistGroupRequest,
	): Promise<GetArtistGroupResponse> {
		const model = await this.repo.getById(req.id);

		if (!model) return new GetArtistGroupResponse().notFound();

		return this.resMapper.map(model);
	}
}
