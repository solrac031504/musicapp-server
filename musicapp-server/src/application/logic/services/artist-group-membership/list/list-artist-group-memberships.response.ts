import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { ArtistGroupMembershipDTO } from "../../../dto/artist-group-membership.dto.ts";

export class ListArtistGroupMembershipsResponse extends BaseListResponse<ArtistGroupMembershipDTO> {
	constructor(items: ArtistGroupMembershipDTO[] = []) {
		super(items);
	}
}
