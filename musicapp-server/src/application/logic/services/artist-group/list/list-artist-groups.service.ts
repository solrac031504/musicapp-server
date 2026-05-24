import { ArtistGroupRepository } from "../../../../../infrastructure/data-access/repositories/artist-group.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ListArtistGroupsResponseMapper } from "../../../mappers/response-mappers/list-artist-groups.response-mapper.ts";
import { ListArtistGroupsRequest } from "./list-artist-groups.request.ts";
import { ListArtistGroupsResponse } from "./list-artist-groups.response.ts";

export class ListArtistGroupsService extends BaseService<ListArtistGroupsRequest, ListArtistGroupsResponse> {
	private readonly repo;
	private readonly resMapper = new ListArtistGroupsResponseMapper();

	constructor(repo: ArtistGroupRepository) {
		super();
		this.repo = repo;
	}

	public override async execute(
		_req: ListArtistGroupsRequest,
	): Promise<ListArtistGroupsResponse> {
		const models = await this.repo.list();

		return this.resMapper.map(models);
	}
}
