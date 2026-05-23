import { ArtistGroupMembershipModel } from "../../../../domain/models/artist-group-membership.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ArtistGroupMembershipDTO } from "../../../dto/artist-group-membership.dto.ts";
import { GetArtistGroupMembershipResponse } from "../../services/artist-group-membership/get/get-artist-group-membership.response.ts";

export class GetArtistGroupMembershipResponseMapper extends BaseResponseMapper<GetArtistGroupMembershipResponse, ArtistGroupMembershipModel> {
	public override map(model: ArtistGroupMembershipModel): GetArtistGroupMembershipResponse {
		return new GetArtistGroupMembershipResponse(
			new ArtistGroupMembershipDTO(model),
		);
	}
}
