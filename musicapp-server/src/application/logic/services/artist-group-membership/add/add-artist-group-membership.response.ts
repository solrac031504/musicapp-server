import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ArtistGroupMembershipDTO } from "../../../../dto/artist-group-membership.dto.ts";

export class AddArtistGroupMembershipResponse extends BaseItemResponse<ArtistGroupMembershipDTO> {
	constructor(item: ArtistGroupMembershipDTO | null = null) {
		super(item);
	}
}
