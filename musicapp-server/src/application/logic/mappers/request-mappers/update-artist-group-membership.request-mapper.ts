import { ArtistGroupMembershipModel } from "../../../../domain/models/artist-group-membership.model.ts";
import { BaseRequestMapper } from "../../../common/mappers/base-request-mapper.ts";
import { UpdateArtistGroupMembershipRequest } from "../../services/artist-group-membership/update/update-artist-group-membership.request.ts";

export class UpdateArtistGroupMembershipRequestMapper extends BaseRequestMapper<UpdateArtistGroupMembershipRequest, ArtistGroupMembershipModel> {
	public override map(req: UpdateArtistGroupMembershipRequest): ArtistGroupMembershipModel {
		return {
			id: req.item.id,
			artistGroupId: req.item.artistGroupId,
			artistId: req.item.artistId,
			createdBy: req.item.createdBy,
			modifiedBy: req.item.modifiedBy,
		} as ArtistGroupMembershipModel;
	}
}
