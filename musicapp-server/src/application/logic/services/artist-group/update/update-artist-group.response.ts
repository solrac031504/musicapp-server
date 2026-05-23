import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ArtistGroupDTO } from "../../../../dto/artist-group.dto.ts";

export class UpdateArtistGroupResponse extends BaseItemResponse<ArtistGroupDTO> {
	constructor(dto: ArtistGroupDTO | null) {
		super(dto);
	}
}
