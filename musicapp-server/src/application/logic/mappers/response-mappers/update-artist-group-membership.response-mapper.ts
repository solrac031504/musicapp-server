import { ArtistGroupMembershipModel } from "../../../../domain/models/artist-group-membership.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ArtistGroupMembershipDTO } from "../../../dto/artist-group-membership.dto.ts";
import { UpdateArtistGroupMembershipResponse } from "../../services/artist-group-membership/update/update-artist-group-membership.response.ts";

export class UpdateArtistGroupMembershipResponseMapper extends BaseResponseMapper<UpdateArtistGroupMembershipResponse, ArtistGroupMembershipModel> {
	public override map(model: ArtistGroupMembershipModel): UpdateArtistGroupMembershipResponse {
		return new UpdateArtistGroupMembershipResponse(
			new ArtistGroupMembershipDTO(model),
		);
	}
}
