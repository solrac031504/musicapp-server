import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ArtistGroupDTO } from "../../../../dto/artist-group.dto.ts";

export class GetArtistGroupResponse extends BaseItemResponse<ArtistGroupDTO> {
	constructor(item: ArtistGroupDTO | null = null) {
		super(item);
	}
}
