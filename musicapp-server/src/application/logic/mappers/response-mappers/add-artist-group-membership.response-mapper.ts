import { ArtistGroupMembershipModel } from "../../../../domain/models/artist-group-membership.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ArtistGroupMembershipDTO } from "../../../dto/artist-group-membership.dto.ts";
import { AddArtistGroupMembershipResponse } from "../../services/artist-group-membership/add/add-artist-group-membership.response.ts";

export class AddArtistGroupMembershipResponseMapper extends BaseResponseMapper<AddArtistGroupMembershipResponse, ArtistGroupMembershipModel> {
	public override map(model: ArtistGroupMembershipModel): AddArtistGroupMembershipResponse {
		return new AddArtistGroupMembershipResponse(
			new ArtistGroupMembershipDTO(model),
		);
	}
}
