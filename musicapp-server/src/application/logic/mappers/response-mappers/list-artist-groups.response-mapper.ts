import { ArtistGroupModel } from "../../../../domain/models/artist-group.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { ArtistGroupDTO } from "../../../dto/artist-group.dto.ts";
import { ListArtistGroupsResponse } from "../../services/artist-group/list/list-artist-groups.response.ts";

export class ListArtistGroupsResponseMapper extends BaseListResponseMapper<ListArtistGroupsResponse, ArtistGroupModel> {
	public override map(models: ArtistGroupModel[]): ListArtistGroupsResponse {
		const dtos = models.map((m) => new ArtistGroupDTO(m));

		return new ListArtistGroupsResponse(dtos);
	}
}
