import { ArtistGroupMembershipModel } from "../../../../domain/models/artist-group-membership.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { ArtistGroupMembershipDTO } from "../../../dto/artist-group-membership.dto.ts";
import { ListArtistGroupMembershipsResponse } from "../../services/artist-group-membership/list/list-artist-group-memberships.response.ts";

export class ListArtistGroupMembershipsResponseMapper extends BaseListResponseMapper<ListArtistGroupMembershipsResponse, ArtistGroupMembershipModel> {
	public override map(models: ArtistGroupMembershipModel[]): ListArtistGroupMembershipsResponse {
		const dtos = models.map((model) => new ArtistGroupMembershipDTO(model));

		return new ListArtistGroupMembershipsResponse(dtos);
	}
}
