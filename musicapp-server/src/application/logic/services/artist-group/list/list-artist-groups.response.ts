import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { ArtistGroupDTO } from "../../../../dto/artist-group.dto.ts";

export class ListArtistGroupsResponse extends BaseListResponse<ArtistGroupDTO> {
	constructor(dtos: ArtistGroupDTO[]) {
		super(dtos);
	}
}
